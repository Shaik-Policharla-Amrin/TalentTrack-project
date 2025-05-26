import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from './JobCard';
import { Job } from '../../types';
import { useJobs } from '../../contexts/JobContext';

interface FeaturedJobsProps {
  title?: string;
  showViewAll?: boolean;
}

const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ 
  title = 'Featured Jobs', 
  showViewAll = true 
}) => {
  const { featuredJobs, loading, error } = useJobs();
  
  // Show at most 4 featured jobs
  const displayJobs: Job[] = featuredJobs.slice(0, 4);

  if (loading) {
    return (
      <div className="my-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          Error: {error}
        </div>
      </div>
    );
  }

  if (displayJobs.length === 0) {
    return null;
  }

  return (
    <div className="my-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {showViewAll && (
          <Link 
            to="/jobs" 
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            View all jobs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayJobs.map(job => (
          <JobCard key={job.id} job={job} featured={true} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;