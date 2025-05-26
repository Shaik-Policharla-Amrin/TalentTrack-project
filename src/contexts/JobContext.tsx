import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Job, JobContextType, Application, JobFilters } from '../types';
import mockJobs from '../data/jobs';

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setJobs(mockJobs);
        setFeaturedJobs(mockJobs.filter(job => job.featured));
      } catch (err) {
        setError('Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const getJobById = (id: string) => {
    return jobs.find(job => job.id === id);
  };

  const searchJobs = (query: string, filters?: JobFilters) => {
    let filteredJobs = [...jobs];
    
    // Search by query (title, company, location, description)
    if (query) {
      const lowerQuery = query.toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(lowerQuery) ||
        job.company.toLowerCase().includes(lowerQuery) ||
        job.location.toLowerCase().includes(lowerQuery) ||
        job.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Apply filters
    if (filters) {
      if (filters.location) {
        filteredJobs = filteredJobs.filter(job => 
          job.location.toLowerCase().includes(filters.location!.toLowerCase())
        );
      }
      
      if (filters.type && filters.type.length > 0) {
        filteredJobs = filteredJobs.filter(job => 
          filters.type!.includes(job.type)
        );
      }
      
      if (filters.category) {
        filteredJobs = filteredJobs.filter(job => 
          job.category.toLowerCase() === filters.category!.toLowerCase()
        );
      }
      
      if (filters.salary) {
        if (filters.salary.min) {
          filteredJobs = filteredJobs.filter(job => 
            job.salary && job.salary.min >= filters.salary!.min!
          );
        }
        
        if (filters.salary.max) {
          filteredJobs = filteredJobs.filter(job => 
            job.salary && job.salary.max <= filters.salary!.max!
          );
        }
      }
      
      if (filters.postedWithin) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - filters.postedWithin);
        
        filteredJobs = filteredJobs.filter(job => 
          job.postedAt >= cutoffDate
        );
      }
    }
    
    return filteredJobs;
  };

  const applyToJob = async (jobId: string, applicationData: Partial<Application>) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, we would send this to the backend
      console.log('Applying to job:', jobId, applicationData);
      
      // Update job applications count
      setJobs(prevJobs => 
        prevJobs.map(job => 
          job.id === jobId 
            ? { ...job, applications: job.applications + 1 } 
            : job
        )
      );
      
      // Also update featured jobs if the job is featured
      setFeaturedJobs(prevFeaturedJobs => 
        prevFeaturedJobs.map(job => 
          job.id === jobId 
            ? { ...job, applications: job.applications + 1 } 
            : job
        )
      );
    } catch (err) {
      setError('Failed to apply for job');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const postJob = async (jobData: Partial<Job>) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, we would send this to the backend
      console.log('Posting job:', jobData);
      
      // Create a new job with mock data
      const newJob: Job = {
        id: `job-${Date.now()}`,
        title: jobData.title || 'Untitled Job',
        company: jobData.company || 'Unknown Company',
        location: jobData.location || 'Remote',
        type: jobData.type || 'Full-time',
        category: jobData.category || 'Other',
        description: jobData.description || 'No description provided',
        requirements: jobData.requirements || [],
        responsibilities: jobData.responsibilities || [],
        salary: jobData.salary,
        employerId: jobData.employerId || 'unknown',
        postedAt: new Date(),
        featured: jobData.featured || false,
        applications: 0,
        logo: jobData.logo,
      };
      
      // Add to jobs list
      setJobs(prevJobs => [newJob, ...prevJobs]);
      
      // Add to featured jobs if featured
      if (newJob.featured) {
        setFeaturedJobs(prevFeaturedJobs => [newJob, ...prevFeaturedJobs]);
      }
    } catch (err) {
      setError('Failed to post job');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider 
      value={{ 
        jobs, 
        featuredJobs, 
        loading, 
        error, 
        getJobById, 
        searchJobs, 
        applyToJob, 
        postJob 
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};