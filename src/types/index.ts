export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'employer' | 'candidate';
  createdAt: Date;
}

export interface Employer extends User {
  role: 'employer';
  company: string;
  industry: string;
  location: string;
  website?: string;
  logo?: string;
  description?: string;
}

export interface Candidate extends User {
  role: 'candidate';
  title?: string;
  skills: string[];
  experience: number;
  education?: string;
  resume?: string;
  location: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  employerId: string;
  postedAt: Date;
  expiresAt?: Date;
  featured: boolean;
  applications: number;
  logo?: string;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  resume: string;
  coverLetter?: string;
  status: 'pending' | 'reviewed' | 'rejected' | 'interview' | 'offered' | 'hired';
  appliedAt: Date;
  updatedAt: Date;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
}

export interface JobContextType {
  jobs: Job[];
  featuredJobs: Job[];
  loading: boolean;
  error: string | null;
  getJobById: (id: string) => Job | undefined;
  searchJobs: (query: string, filters?: JobFilters) => Job[];
  applyToJob: (jobId: string, applicationData: Partial<Application>) => Promise<void>;
  postJob: (jobData: Partial<Job>) => Promise<void>;
}

export interface JobFilters {
  location?: string;
  type?: Job['type'][];
  category?: string;
  salary?: {
    min?: number;
    max?: number;
  };
  postedWithin?: number; // days
}