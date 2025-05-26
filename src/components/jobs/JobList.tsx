import React from 'react';
import JobCard from './JobCard';
import { Job } from '../../types';
import { Briefcase } from 'lucide-react';

interface JobListProps {
  jobs: Job[];
  loading?: boolean;
  error?: string | null;
  title?: string;
  emptyMessage?: string;
}

const JobList: React.FC<JobListProps> = ({ 
  jobs, 
  loading = false, 
  error = null, 
  title = 'Jobs', 
  emptyMessage = 'No jobs found. Try changing your search criteria.' 
}) => {
  if (loading) {
    return (
      <div className="my-8">
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
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
      <div className="my-8">
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          Error: {error}
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="my-8">
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
          <p className="mt-1 text-sm text-gray-500">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
      <div className="space-y-6">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} featured={job.featured} />
        ))}
      </div>
    </div>
  );
};

export default JobList;