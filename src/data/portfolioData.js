import { User, Briefcase, Code, GraduationCap, Trophy, Mail } from 'lucide-react';

export const sections = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export const skills = {
  'Programming Languages': ['Python', 'JavaScript (ES6+)', 'HTML', 'CSS', 'SQL'],
  'Frontend': ['React', 'Tailwind CSS', 'Electron.js', 'Bootstrap'],
  'Backend': ['Node.js', 'Express', 'REST API', 'JWT Authentication'],
  'Database': ['MongoDB', 'Mongoose', 'MySQL', 'phpMyAdmin'],
  'Security': ['Palo Alto Firewall', 'Trend Micro Apex One', 'Trellix Endpoint Security', 'JWT Authentication', 'Password Encryption', 'Network Security'],
  'Tools & Cloud': ['Git', 'GitHub', 'VS Code', 'Postman', 'Azure (Basic)', 'TCP/IP', 'DNS', 'HTTP/HTTPS']
};

export const projects = [
  {
    title: 'Cross-Platform POS Application',
    tech: ['Electron.js', 'Node.js', 'MongoDB', 'React', 'JWT'],
    description: 'Developed a full-featured desktop POS system with barcode scanning, inventory management, and secure user authentication.',
    status: 'In Development',
    type: 'Freelance Project'
  },
  {
    title: 'COVID-19 Employment Analysis',
    tech: ['Python', 'Linear Regression', 'RNN', 'LSTM', 'Tableau'],
    description: 'Built predictive models to forecast post-COVID employment trends in Thailand with comprehensive data visualization.',
    status: 'Completed',
    type: 'University Project'
  },
  {
    title: 'Travel Journal Web App',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    description: 'Designed normalized database schema and built full-stack web application with CRUD operations.',
    status: 'Completed',
    type: 'University Project'
  }
];

export const experience = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance Project',
    period: 'Jul 2025 - Present',
    type: 'Remote',
    achievements: [
      'Developed cross-platform desktop POS application using Electron.js and Node.js',
      'Implemented secure JWT-based authentication and user permission management',
      'Built customer management and inventory tracking features',
      'Currently developing mobile version for enhanced accessibility'
    ]
  },
  {
    title: 'Security Engineer (Internship)',
    company: 'METRO SYSTEMS CORPORATION',
    period: 'Apr 2024 - Jun 2024',
    type: 'On-site',
    achievements: [
      'Configured and tested Palo Alto Firewall and Trellix Endpoint Security',
      'Participated in Microsoft Azure and SC-900/SC-400 training programs',
      'Designed antivirus and DLP policies in virtual environments',
      'Strengthened networking fundamentals and security protocols'
    ]
  }
];

export const personalInfo = {
  name: 'Suphasukit Kleebbai',
  title: 'Full-Stack Developer • Security Engineer',
  location: 'Phetchabun, Thailand',
  email: 'supasukitkleebbai@gmail.com',
  phone: '096-185-0518',
  linkedin: 'https://www.linkedin.com/in/supasukitk/',
  github: 'https://github.com/supasukit',
   summary: 'I am a passionate junior full-stack developer with hands-on experience in building secure and scalable web applications. My journey began with freelance projects, where I designed and developed cross-platform POS systems using Electron.js, Node.js, and MongoDB. I am skilled in both frontend and backend development, with a solid foundation in authentication and IT security. I have knowledge of secure coding practices, access control, password encryption, and endpoint protection. I am also a strong communicator, responsible, and able to work well both independently and as part of a team. I enjoy solving real-world problems, learning new technologies, and collaborating with others. My goal is to keep growing as a developer and deliver solutions that make an impact.'
};