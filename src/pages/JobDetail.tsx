import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Briefcase, Building, DollarSign, Share2, Bookmark, ExternalLink } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useJobs } from '../contexts/JobContext';
import { useAuth } from '../contexts/AuthContext';
import { formatDistanceToNow } from 'date-fns';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getJobById, loading, error, applyToJob } = useJobs();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [applyLoading, setApplyLoading] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);
  
  // Get job details based on the ID from the URL
  const job = id ? getJobById(id) : undefined;
  
  if (loading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="flex space-x-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (error || !job) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
            {error || 'Job not found'}
          </div>
          <div className="mt-6">
            <Link 
              to="/jobs" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              ← Back to all jobs
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  const timeAgo = formatDistanceToNow(new Date(job.postedAt), { addSuffix: true });
  
  const handleApply = async () => {
    // If user is not logged in, redirect to login page
    if (!user) {
      navigate('/login?redirect=' + encodeURIComponent(`/jobs/${job.id}`));
      return;
    }
    
    // If user is an employer, show error
    if (user.role === 'employer') {
      setApplyError('Employers cannot apply for jobs. Please log in as a candidate.');
      return;
    }
    
    setApplyLoading(true);
    setApplyError(null);
    try {
      await applyToJob(job.id, {
        id: `app-${Date.now()}`,
        jobId: job.id,
        candidateId: user.id,
        resume: 'path/to/resume.pdf', // In a real app, this would be the actual resume
        status: 'pending',
        appliedAt: new Date(),
        updatedAt: new Date()
      });
      setApplySuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setApplyError(err.message);
      } else {
        setApplyError('An unexpected error occurred');
      }
    } finally {
      setApplyLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Job Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start space-x-4">
                  {job.logo ? (
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`} 
                      className="h-16 w-16 object-cover rounded"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center">
                      <Building className="h-8 w-8 text-gray-500" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                    <p className="text-xl text-gray-600">{job.company}</p>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mt-2">
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
                        <span>Posted {timeAgo}</span>
                      </div>
                      {job.salary && (
                        <div className="flex items-center">
                          <DollarSign size={16} className="mr-1" />
                          <span>{`${job.salary.currency}${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}`}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Job Description */}
              <div className="p-6">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p>{job.description}</p>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </section>
                
                {/* Application Success Message */}
                {applySuccess && (
                  <div className="mb-8 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                    <h3 className="font-semibold">Application Submitted!</h3>
                    <p>Your application has been successfully submitted. The employer will contact you if they wish to proceed with your application.</p>
                  </div>
                )}
                
                {/* Application Error Message */}
                {applyError && (
                  <div className="mb-8 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                    <h3 className="font-semibold">Application Failed</h3>
                    <p>{applyError}</p>
                  </div>
                )}
                
                {/* Apply Button (Mobile) */}
                <div className="mt-6 md:hidden">
                  <button
                    onClick={handleApply}
                    disabled={applyLoading || applySuccess}
                    className="w-full rounded-md bg-blue-600 px-4 py-3 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {applyLoading ? 'Submitting...' : applySuccess ? 'Application Submitted' : 'Apply Now'}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link 
                to="/jobs" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                ← Back to all jobs
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:w-80">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Summary</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Briefcase className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Job Type</span>
                      <span className="block text-gray-900">{job.type}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Location</span>
                      <span className="block text-gray-900">{job.location}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Company</span>
                      <span className="block text-gray-900">{job.company}</span>
                    </div>
                  </li>
                  {job.salary && (
                    <li className="flex items-start">
                      <DollarSign className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <span className="block text-sm font-medium text-gray-500">Salary Range</span>
                        <span className="block text-gray-900">{`${job.salary.currency}${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}`}</span>
                      </div>
                    </li>
                  )}
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Posted</span>
                      <span className="block text-gray-900">{timeAgo}</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <button
                  onClick={handleApply}
                  disabled={applyLoading || applySuccess}
                  className="w-full rounded-md bg-blue-600 px-4 py-3 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {applyLoading ? 'Submitting...' : applySuccess ? 'Application Submitted' : 'Apply Now'}
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <Share2 className="h-4 w-4 mr-1" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <Bookmark className="h-4 w-4 mr-1" />
                    <span>Save</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>Company</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;