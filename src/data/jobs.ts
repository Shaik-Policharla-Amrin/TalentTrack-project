import { Job } from '../types';

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp India',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'Development',
    description: 'TechCorp India is seeking a Senior Frontend Developer to join our growing team in Bangalore. You will be responsible for building high-quality user interfaces for our enterprise web applications using React and TypeScript, while mentoring junior developers and contributing to our technical architecture.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of experience in frontend development',
      'Strong proficiency in React, TypeScript, and modern JavaScript',
      'Experience with state management libraries (Redux, Context API)',
      'Understanding of responsive design and cross-browser compatibility'
    ],
    responsibilities: [
      'Develop new user-facing features using React.js',
      'Build reusable components and libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance',
      'Collaborate with UI/UX designers and backend developers'
    ],
    salary: {
      min: 2500000,
      max: 4000000,
      currency: 'INR'
    },
    employerId: 'emp1',
    postedAt: new Date('2023-05-01'),
    expiresAt: new Date('2023-06-01'),
    featured: true,
    applications: 12,
    logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub Solutions',
    location: 'Mumbai, India',
    type: 'Full-time',
    category: 'Design',
    description: 'DesignHub Solutions, a leading design agency in Mumbai, is looking for a talented UX/UI Designer to create innovative digital experiences. You will work on projects for major Indian and international clients, bringing creative solutions to complex design challenges.',
    requirements: [
      'Bachelor\'s degree in Design, Human-Computer Interaction, or related field',
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools (Figma, Sketch, Adobe XD)',
      'Experience with design systems and component libraries',
      'Portfolio showcasing your design process and solutions'
    ],
    responsibilities: [
      'Create user flows, wireframes, and prototypes',
      'Conduct user research and usability testing',
      'Design responsive layouts for web and mobile applications',
      'Create and maintain design systems',
      'Collaborate with cross-functional teams'
    ],
    salary: {
      min: 1500000,
      max: 2500000,
      currency: 'INR'
    },
    employerId: 'emp2',
    postedAt: new Date('2023-05-05'),
    expiresAt: new Date('2023-06-05'),
    featured: true,
    applications: 8,
    logo: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Backend Developer',
    company: 'DataSystems Technology',
    location: 'Hyderabad, India',
    type: 'Full-time',
    category: 'Development',
    description: 'DataSystems Technology, a fast-growing tech company in Hyderabad, is seeking a skilled Backend Developer. Join our team to work on cutting-edge cloud solutions and help scale our infrastructure to serve millions of users.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in backend development',
      'Strong proficiency in Node.js, Python, or Java',
      'Experience with databases (SQL, NoSQL)',
      'Knowledge of API design and RESTful services'
    ],
    responsibilities: [
      'Design and implement backend services and APIs',
      'Optimize applications for performance and scalability',
      'Implement security and data protection measures',
      'Collaborate with frontend developers and other stakeholders',
      'Troubleshoot and debug issues'
    ],
    salary: {
      min: 2000000,
      max: 3500000,
      currency: 'INR'
    },
    employerId: 'emp3',
    postedAt: new Date('2023-05-10'),
    expiresAt: new Date('2023-06-10'),
    featured: false,
    applications: 6,
    logo: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'Digital Marketing Manager',
    company: 'GrowthLabs Digital',
    location: 'Delhi, India',
    type: 'Full-time',
    category: 'Marketing',
    description: 'GrowthLabs Digital is looking for a Digital Marketing Manager to lead our marketing initiatives in Delhi. You will be responsible for developing and executing digital marketing strategies for our diverse portfolio of clients across India.',
    requirements: [
      'Bachelor\'s degree in Marketing, Business, or related field',
      '5+ years of experience in digital marketing',
      'Experience with digital marketing channels (SEO, SEM, social media)',
      'Knowledge of marketing analytics tools',
      'Strong communication and leadership skills'
    ],
    responsibilities: [
      'Develop and implement digital marketing strategies',
      'Manage social media presence and digital marketing campaigns',
      'Analyze market trends and competitor activities',
      'Measure and report on performance of marketing campaigns',
      'Collaborate with sales and product teams'
    ],
    salary: {
      min: 1800000,
      max: 3000000,
      currency: 'INR'
    },
    employerId: 'emp4',
    postedAt: new Date('2023-05-15'),
    expiresAt: new Date('2023-06-15'),
    featured: false,
    applications: 4,
    logo: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'InnovateX Solutions',
    location: 'Pune, India',
    type: 'Full-time',
    category: 'Product',
    description: 'InnovateX Solutions, a product-focused technology company in Pune, is seeking a Product Manager to drive our product strategy. You will work with cross-functional teams to deliver innovative solutions that address real market needs.',
    requirements: [
      'Bachelor\'s degree in Business, Computer Science, or related field',
      '3+ years of experience in product management',
      'Experience with agile methodologies',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management abilities'
    ],
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Gather and prioritize product requirements',
      'Work with engineering teams to deliver features',
      'Analyze market trends and competitive landscape',
      'Conduct user research and gather customer feedback'
    ],
    salary: {
      min: 2200000,
      max: 3800000,
      currency: 'INR'
    },
    employerId: 'emp5',
    postedAt: new Date('2023-05-20'),
    expiresAt: new Date('2023-06-20'),
    featured: true,
    applications: 9,
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'AnalyticsPro India',
    location: 'Chennai, India',
    type: 'Full-time',
    category: 'Data Science',
    description: 'AnalyticsPro India is seeking a Data Scientist to join our analytics team in Chennai. You will work on challenging problems in machine learning and AI, helping our clients derive actionable insights from their data.',
    requirements: [
      'Master\'s or PhD in Statistics, Computer Science, or related field',
      '3+ years of experience in data science',
      'Proficiency in Python, R, or similar programming languages',
      'Experience with machine learning and statistical modeling',
      'Knowledge of data visualization tools and techniques'
    ],
    responsibilities: [
      'Collect, process, and analyze large datasets',
      'Build and deploy machine learning models',
      'Develop data-driven solutions to business problems',
      'Communicate findings to technical and non-technical stakeholders',
      'Collaborate with engineering and product teams'
    ],
    salary: {
      min: 2000000,
      max: 3500000,
      currency: 'INR'
    },
    employerId: 'emp6',
    postedAt: new Date('2023-05-25'),
    expiresAt: new Date('2023-06-25'),
    featured: true,
    applications: 5,
    logo: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Bangalore, India',
    type: 'Full-time',
    category: 'DevOps',
    description: 'CloudTech Solutions, a leading cloud services provider in Bangalore, is looking for a DevOps Engineer to strengthen our infrastructure team. You will work on building and maintaining scalable cloud infrastructure for our enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in DevOps or SRE roles',
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Knowledge of infrastructure as code tools (Terraform, CloudFormation)',
      'Familiarity with containerization and orchestration (Docker, Kubernetes)'
    ],
    responsibilities: [
      'Build and maintain CI/CD pipelines',
      'Automate deployment and operations processes',
      'Monitor and optimize system performance',
      'Implement security best practices',
      'Collaborate with development teams to improve delivery processes'
    ],
    salary: {
      min: 2500000,
      max: 4000000,
      currency: 'INR'
    },
    employerId: 'emp7',
    postedAt: new Date('2023-05-30'),
    expiresAt: new Date('2023-06-30'),
    featured: false,
    applications: 3,
    logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    title: 'Mobile App Developer',
    company: 'AppWorks Technologies',
    location: 'Gurgaon, India',
    type: 'Full-time',
    category: 'Development',
    description: 'AppWorks Technologies, an innovative mobile app development company in Gurgaon, is seeking a talented Mobile App Developer. You will work on creating cutting-edge mobile applications for our diverse client base across various industries.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in mobile development',
      'Proficiency in Swift, Kotlin, or React Native',
      'Understanding of mobile design patterns',
      'Experience with app store submission processes'
    ],
    responsibilities: [
      'Develop and maintain mobile applications',
      'Collaborate with designers and backend developers',
      'Implement new features and fix bugs',
      'Optimize applications for performance',
      'Stay up-to-date with mobile development trends'
    ],
    salary: {
      min: 1800000,
      max: 3200000,
      currency: 'INR'
    },
    employerId: 'emp8',
    postedAt: new Date('2023-06-01'),
    expiresAt: new Date('2023-07-01'),
    featured: true,
    applications: 7,
    logo: 'https://images.pexels.com/photos/3182798/pexels-photo-3182798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export default mockJobs;