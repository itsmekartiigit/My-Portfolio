import { Project, Experience, SkillCategory, Metric } from './types';

export const METRICS: Metric[] = [
  { id: '1', label: 'Projects Built', value: 3, suffix: '' },
  { id: '2', label: 'MERN Stack Skills', value: 5, suffix: '+' },
  { id: '3', label: 'Coursework Topics', value: 5, suffix: '+' },
  { id: '4', label: 'Certifications', value: 1, suffix: '' },
];

export const PROJECTS: Project[] = [
  {
    id: 'ems-platform',
    title: 'EMS Platform',
    description: 'Employee Leave Management System for streamlining operations and improving efficiency.',
    longDescription: 'A comprehensive Enterprise Management System built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). This platform helps organizations manage their resources, track performance, and make data-driven decisions.',
    category: 'Web App',
    image: 'https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System.png',
    tags: [,'Node.js', 'Express.js', 'React.js', 'MongoDB'],
    liveUrl: 'https://fullstack-ems-wheat.vercel.app/login',
    githubUrl: 'https://github.com/itsmekartiigit/Fullstack-EMS',
    featured: true,
    features: [
      'Admin Login Authentication and Role-Based Access Control',
      'Employee and leave management dashboard',
      'Real-time notifications for leave requests and approvals',
      'Real-time leave tracking (Approved/Rejected/Pending)',
      'Delete Employees and Manage departments',
      'employee profile management with personal and professional details'
    ],
    learningOutcomes: [
      'Full-stack SaaS application development with MERN',
      'Implementing role-based access control and permissions',
      'Secure authentication and user management with JWT and bcrypt',
      'RESTful API design with Express.js',
      'Database modeling with MongoDB schemas',
      'Production deployment strategies'
    ],
    author: 'K@rtik',
    status: 'Active',
    detailedCategory: 'Full-Stack ',
  },
  {
    id: 'lms-platform',
    title: 'LMS Platform (under development)',
    description: 'Complete Learning Management System with course management and user dashboard features.',
    longDescription: 'A fully-featured Learning Management System (LMS) built with the MERN Stack. It empowers instructors to create, manage, and deliver high-quality courses, while providing students with an interactive, rich learning experience including progress tracking, video lectures, and quizzes.',
    category: 'Web App',
    image: 'https://img.magnific.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_hybrid&w=740&q=80',
    tags: ['Education', 'MERN', 'Full-Stack', 'E-learning'],
    liveUrl: '#',
    githubUrl: 'https://github.com/itsmekartiigit',
    featured: true,
    features: [
      'Interactive course builder for instructors',
      'Student enrollment and billing flows',
      'Chapter-wise video lessons and assignments',
      'Real-time learner progress analytics dashboard',
      'Quiz creation and automated grading engine',
      'Discussion forums and direct messaging'
    ],
    learningOutcomes: [
      'Developing high-throughput video streaming layouts',
      'Structuring nested relational MongoDB schemas',
      'Handling state management with React hooks',
      'Securing multi-role middleware (Admin, Instructor, Student)',
      'Deploying production-ready full-stack systems on Vercel',
      'Database query and aggregation pipeline optimization'
    ],
    author: 'LMS Platform',
    status: 'Inactive',
    detailedCategory: 'Education'
  },
  // {
  //   id: 'resume-builder',
  //   title: 'Resume Builder',
  //   description: 'AI-powered resume creation platform with professional templates, real-time styling, and print-perfect output.',
  //   longDescription: 'A state-of-the-art Resume Builder that guides users through creating polished, industry-standard resumes. Built on the MERN stack and featuring AI-powered sentence polishing, content analysis, and elegant responsive templates that can be customized instantly.',
  //   category: 'Web App',
  //   image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
  //   tags: ['AI', 'SaaS', 'MERN', 'Productivity'],
  //   liveUrl: '#',
  //   githubUrl: 'https://github.com/itsmekartiigit',
  //   featured: true,
  //   features: [
  //     'AI-driven resume text refinement and suggestions',
  //     'Real-time visual editor with drag-and-drop sections',
  //     'Multiple premium ATS-friendly templates',
  //     'Instant PDF generation and download engine',
  //     'Custom section configuration (Experience, Education, Skills)',
  //     'Public resume sharing links with access statistics'
  //   ],
  //   learningOutcomes: [
  //     'Generating complex PDF templates directly in the client browser',
  //     'Using AI models to evaluate and grade resume strength (ATS score)',
  //     'Implementing complex state-driven nested forms',
  //     'Fine-tuning responsive layouts for print-perfect media css',
  //     'Enabling user data export and cloud storage',
  //     'Structuring schema models for highly nested JSON records'
  //   ],
  //   author: 'Resume Builder',
  //   status: 'Active',
  //   detailedCategory: 'AI / Productivity'
  // },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Full Stack Web Developer Graduate',
    company: 'Physics Wallah (PW Skills)',
    period: 'Completed Certification',
    description: [
      'Completed an industry-aligned Full Stack Development course covering the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Developed hands-on experience building scalable, responsive web applications using component-based frontend architecture.',
      'Proficient in RESTful API development, MVC architecture patterns, database design, and version control workflows.',
    ],
    tags: ['MERN Stack', 'RESTful APIs', 'MVC Architecture', 'Git', 'Vercel'],
  },
  {
    id: 'exp2',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'University of Mysore',
    period: 'Currently Pursuing',
    description: [
      'Studying foundational computer science concepts, software development methodologies, and mathematical principles.',
      'Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Computer Networks, and Software Engineering.',
    ],
    tags: ['Data Structures', 'DBMS', 'OOP', 'Computer Networks', 'Software Engineering'],
  },
  {
    id: 'exp3',
    role: 'DevOps and Cloud Computing',
    company: 'Self-Directed Learning',
    period: 'Currently Learning',
    description: [
      'Eagerly exploring modern deployment pipelines, cloud platforms, and containerized development workflows.',
      'Studying automation configurations and application performance monitoring across Vercel, Netlify, and other web hosts.',
    ],
    tags: ['DevOps', 'Cloud Computing', 'GitHub Actions', 'Vercel', 'Netlify'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Artistry',
    skills: [
      { name: 'React.js', level: 90, iconName: 'React' },
      { name: 'JavaScript (ES6+)', level: 88, iconName: 'Code' },
      { name: 'Tailwind CSS', level: 92, iconName: 'Palette' },
      { name: 'Responsive Web Design', level: 95, iconName: 'Sparkles' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Database',
    skills: [
      { name: 'Node.js & Express.js', level: 85, iconName: 'Server' },
      { name: 'MongoDB & Mongoose', level: 82, iconName: 'Database' },
      { name: 'RESTful APIs', level: 88, iconName: 'Cpu' },
      { name: 'MySQL (Basic)', level: 70, iconName: 'Database' },
    ],
  },
];
