import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Job } from '../../types';
import { formatDistanceToNow } from 'date-fns';

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, featured = false }) => {
  const timeAgo = formatDistanceToNow(new Date(job.postedAt), { addSuffix: true });
  
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden border 
        ${featured ? 'border-blue-500' : 'border-gray-200'} 
        transition-transform duration-200 hover:shadow-lg hover:-translate-y-1
      `}
    >
      {featured && (
        <div className="bg-blue-500 text-white px-4 py-1 text-xs font-semibold uppercase tracking-wide">
          Featured
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {job.logo ? (
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="h-12 w-12 object-cover rounded"
              />
            ) : (
              <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-gray-500" />
              </div>
            )}
            <div className="ml-4">
              <Link to={`/jobs/${job.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                {job.title}
              </Link>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>
          {job.salary && (
            <div className="hidden sm:block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {`${job.salary.currency}${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}`}
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600 line-clamp-2">
            {job.description}
          </p>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {job.category}
            </span>
            {job.applications > 0 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {job.applications} applicant{job.applications !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <Link 
            to={`/jobs/${job.id}`} 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;