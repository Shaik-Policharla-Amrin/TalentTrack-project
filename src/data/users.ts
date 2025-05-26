import { User, Employer, Candidate } from '../types';

const mockUsers: User[] = [
  {
    id: 'emp1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    password: 'password123',
    role: 'employer',
    createdAt: new Date('2023-01-01')
  } as Employer,
  {
    id: 'emp2',
    name: 'Sarah Johnson',
    email: 'sarah@designhub.com',
    password: 'password123',
    role: 'employer',
    createdAt: new Date('2023-01-15')
  } as Employer,
  {
    id: 'cand1',
    name: 'Michael Brown',
    email: 'michael@example.com',
    password: 'password123',
    role: 'candidate',
    createdAt: new Date('2023-02-01')
  } as Candidate,
  {
    id: 'cand2',
    name: 'Emily Davis',
    email: 'emily@example.com',
    password: 'password123',
    role: 'candidate',
    createdAt: new Date('2023-02-15')
  } as Candidate
];

export const mockEmployers: Employer[] = [
  {
    id: 'emp1',
    name: 'John Smith',
    email: 'john@techcorp.com',
    password: 'password123',
    role: 'employer',
    company: 'TechCorp',
    industry: 'Technology',
    location: 'San Francisco, CA',
    website: 'https://techcorp.example.com',
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'TechCorp is a leading technology company specializing in software development and cloud solutions.',
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'emp2',
    name: 'Sarah Johnson',
    email: 'sarah@designhub.com',
    password: 'password123',
    role: 'employer',
    company: 'DesignHub',
    industry: 'Design',
    location: 'New York, NY',
    website: 'https://designhub.example.com',
    logo: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'DesignHub is a creative design agency that focuses on delivering exceptional user experiences.',
    createdAt: new Date('2023-01-15')
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: 'cand1',
    name: 'Michael Brown',
    email: 'michael@example.com',
    password: 'password123',
    role: 'candidate',
    title: 'Senior Frontend Developer',
    skills: ['React', 'TypeScript', 'CSS', 'HTML', 'JavaScript'],
    experience: 5,
    education: 'Bachelor of Computer Science, State University',
    resume: 'path/to/resume.pdf',
    location: 'San Francisco, CA',
    createdAt: new Date('2023-02-01')
  },
  {
    id: 'cand2',
    name: 'Emily Davis',
    email: 'emily@example.com',
    password: 'password123',
    role: 'candidate',
    title: 'UX/UI Designer',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research', 'Prototyping'],
    experience: 3,
    education: 'Master of Design, Art Institute',
    resume: 'path/to/resume.pdf',
    location: 'New York, NY',
    createdAt: new Date('2023-02-15')
  }
];

export default mockUsers;