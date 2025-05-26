import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/forms/SearchBar';
import JobList from '../components/jobs/JobList';
import { Filter, X } from 'lucide-react';
import { useJobs } from '../contexts/JobContext';
import { JobFilters } from '../types';

const Jobs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { jobs, loading, error, searchJobs } = useJobs();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<JobFilters>({
    location: searchParams.get('location') || undefined,
    type: searchParams.getAll('type') as any[] || [],
    category: searchParams.get('category') || undefined,
    salary: {
      min: searchParams.get('salaryMin') ? Number(searchParams.get('salaryMin')) : undefined,
      max: searchParams.get('salaryMax') ? Number(searchParams.get('salaryMax')) : undefined
    },
    postedWithin: searchParams.get('postedWithin') ? Number(searchParams.get('postedWithin')) : undefined
  });
  
  // Filtered jobs based on search query and filters
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  
  // Update filtered jobs whenever query, filters, or jobs change
  useEffect(() => {
    setFilteredJobs(searchJobs(query, filters));
  }, [query, filters, jobs, searchJobs]);
  
  // Update URL search params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (query) params.set('q', query);
    if (filters.location) params.set('location', filters.location);
    if (filters.category) params.set('category', filters.category);
    if (filters.salary?.min) params.set('salaryMin', filters.salary.min.toString());
    if (filters.salary?.max) params.set('salaryMax', filters.salary.max.toString());
    if (filters.postedWithin) params.set('postedWithin', filters.postedWithin.toString());
    
    filters.type?.forEach(type => {
      params.append('type', type);
    });
    
    setSearchParams(params);
  }, [filters, query, setSearchParams]);
  
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };
  
  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => {
      if (key === 'type') {
        // Handle job type filter (multi-select)
        const currentTypes = prev.type || [];
        if (currentTypes.includes(value)) {
          return {
            ...prev,
            type: currentTypes.filter(t => t !== value)
          };
        } else {
          return {
            ...prev,
            type: [...currentTypes, value]
          };
        }
      } else if (key === 'salaryMin' || key === 'salaryMax') {
        // Handle salary range filter
        return {
          ...prev,
          salary: {
            ...prev.salary,
            [key === 'salaryMin' ? 'min' : 'max']: value === '' ? undefined : Number(value)
          }
        };
      } else {
        // Handle other filters
        return {
          ...prev,
          [key]: value === '' ? undefined : value
        };
      }
    });
  };
  
  const resetFilters = () => {
    setFilters({});
  };
  
  // Calculate if any filters are active
  const hasActiveFilters = 
    !!filters.location || 
    (filters.type && filters.type.length > 0) || 
    !!filters.category || 
    !!filters.salary?.min || 
    !!filters.salary?.max || 
    !!filters.postedWithin;

  return (
    <Layout>
      <div className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h1 className="text-2xl font-bold text-gray-900">Find Your Dream Job</h1>
            <div className="w-full md:w-auto md:flex-1 md:max-w-xl">
              <SearchBar initialQuery={query} onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`
            lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 h-fit
            ${showFilters ? 'fixed inset-0 z-40 p-4 lg:static lg:p-0 overflow-auto' : 'hidden lg:block'}
          `}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Filters Form */}
              <div className="space-y-6">
                {/* Job Type Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Job Type</h3>
                  <div className="space-y-2">
                    {['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'].map(type => (
                      <div key={type} className="flex items-center">
                        <input
                          id={`type-${type}`}
                          name="type"
                          type="checkbox"
                          checked={(filters.type || []).includes(type as any)}
                          onChange={() => handleFilterChange('type', type)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Location Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Location</h3>
                  <input
                    type="text"
                    value={filters.location || ''}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    placeholder="City, state, or remote"
                    className="w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm border focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
                  <select
                    value={filters.category || ''}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm border focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">All Categories</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Product">Product</option>
                    <option value="Data Science">Data Science</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>
                
                {/* Salary Range Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Salary Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      value={filters.salary?.min || ''}
                      onChange={(e) => handleFilterChange('salaryMin', e.target.value)}
                      placeholder="Min"
                      className="w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm border focus:border-blue-500 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      value={filters.salary?.max || ''}
                      onChange={(e) => handleFilterChange('salaryMax', e.target.value)}
                      placeholder="Max"
                      className="w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm border focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                {/* Date Posted Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Date Posted</h3>
                  <select
                    value={filters.postedWithin || ''}
                    onChange={(e) => handleFilterChange('postedWithin', e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm px-3 py-2 text-sm border focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Any time</option>
                    <option value="1">Past 24 hours</option>
                    <option value="7">Past week</option>
                    <option value="30">Past month</option>
                    <option value="90">Past 3 months</option>
                  </select>
                </div>
                
                {/* Reset Filters Button */}
                <div className="pt-2">
                  <button
                    onClick={resetFilters}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Active
                  </span>
                )}
              </button>
              
              <div className="text-sm text-gray-500">
                {filteredJobs.length} jobs found
              </div>
            </div>
            
            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-6 bg-blue-50 rounded-lg p-3 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-blue-800">Active filters:</span>
                
                {filters.location && (
                  <div className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Location: {filters.location}
                    <button 
                      onClick={() => handleFilterChange('location', '')}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                
                {filters.category && (
                  <div className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Category: {filters.category}
                    <button 
                      onClick={() => handleFilterChange('category', '')}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                
                {filters.type && filters.type.map(type => (
                  <div key={type} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Type: {type}
                    <button 
                      onClick={() => handleFilterChange('type', type)}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                
                {(filters.salary?.min || filters.salary?.max) && (
                  <div className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Salary: {filters.salary.min || '0'} - {filters.salary.max || '∞'}
                    <button 
                      onClick={() => {
                        handleFilterChange('salaryMin', '');
                        handleFilterChange('salaryMax', '');
                      }}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                
                {filters.postedWithin && (
                  <div className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                    Posted within: {filters.postedWithin === 1 ? '24 hours' : 
                                    filters.postedWithin === 7 ? '1 week' : 
                                    filters.postedWithin === 30 ? '1 month' : '3 months'}
                    <button 
                      onClick={() => handleFilterChange('postedWithin', '')}
                      className="ml-1 text-blue-500 hover:text-blue-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-auto"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {/* Desktop Results Count */}
            <div className="hidden lg:flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Job Listings</h2>
              <div className="text-sm text-gray-500">
                {filteredJobs.length} jobs found
              </div>
            </div>
            
            {/* Job List */}
            <JobList 
              jobs={filteredJobs} 
              loading={loading} 
              error={error}
              title=""
              emptyMessage={query || hasActiveFilters ? "No jobs match your search criteria. Try adjusting your filters." : "No jobs found."}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;