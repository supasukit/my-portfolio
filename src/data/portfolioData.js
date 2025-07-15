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
    title: 'Mobile Store Data Application',
    tech: ['Flutter', 'Dart', 'Node.js', 'Express', 'Docker', 'MongoDB'],
    description: 'A comprehensive mobile application developed with Flutter to connect retail stores with real-time data management capabilities. The project involves building a complete ecosystem including mobile frontend, RESTful API backend, and containerized database infrastructure. Features include real-time inventory tracking, sales analytics, customer management, and secure multi-user authentication with role-based access control. The application supports both Android and iOS platforms with responsive UI design and offline-first architecture for seamless user experience.',
    status: 'In Development',
    type: 'Personal Project',
    features: [
      'Architected and implemented RESTful API with Express.js for seamless data operations',
      'Deployed MongoDB using Docker containers for scalable database management',
      'Developed cross-platform mobile UI with Flutter supporting Android and iOS',
      'Implemented JWT-based authentication with role-based permission system',
      'Built real-time data synchronization for inventory and sales tracking'
    ]
  },
  {
    title: 'Portfolio Website',
    tech: ['React', 'Tailwind CSS', 'Lucide Icons', 'GitHub Pages'],
    description: 'A modern, interactive portfolio website built with React and inspired by Discord\'s sleek user interface design. The project showcases advanced frontend development skills through component-based architecture, responsive design principles, and smooth animations. Features include dynamic content rendering, interactive navigation, certificate galleries with modal displays, and optimized performance. The website demonstrates proficiency in modern web technologies, CSS frameworks, and deployment automation through GitHub Pages with continuous integration.',
    status: 'Completed',
    type: 'Personal Project',
    liveUrl: 'https://supasukit.github.io/my-portfolio',
    githubUrl: 'https://github.com/supasukit/my-portfolio'
  },
  {
  title: 'POS Application',
  tech: ['Electron.js', 'Node.js', 'MongoDB', 'React', 'JWT', 'Docker'],
  description: 'A comprehensive Point-of-Sale system developed with Electron.js for cross-platform desktop deployment across multiple operating systems. The database is hosted on a private server using MongoDB running through Docker Container for enhanced stability and streamlined management. The application features a complete suite of retail functionality including barcode scanning technology, real-time inventory management, customer relationship management, and comprehensive sales analytics. Built with a security-first approach implementing JWT authentication, data encryption, and multi-level user permission hierarchies. Additional features include automated reporting systems, outstanding debt tracking, payment history management, and multi-currency support, specifically designed for small to medium-sized businesses.',
  status: 'Completed',
  type: 'Personal Project',
  features: [
    'Deployed and managed MongoDB using Docker on private server infrastructure',
    'Developed cross-platform Desktop Application with Electron.js supporting Windows, macOS, and Linux',
    'Implemented barcode scanning system with real-time inventory management capabilities',
    'Built comprehensive authentication system and user role management using JWT',
    'Configured private server database deployment through Docker containerization'
  ]
},
  {
  title: 'COVID-19 Employment Analysis Thailand',
  tech: ['Python', 'TensorFlow', 'Linear Regression', 'RNN', 'LSTM', 'Tableau', 'Pandas', 'NumPy'],
  description: 'An advanced data science project analyzing the impact of COVID-19 on Thailand\'s employment landscape using machine learning and statistical modeling. Developed multiple predictive models including Linear Regression for trend analysis, RNN for sequential data processing, and LSTM networks for long-term employment forecasting. The project involved comprehensive data collection from government sources, advanced data preprocessing, feature engineering, and model optimization. Created interactive Tableau dashboards for stakeholder presentation, enabling dynamic visualization of employment trends, sector-specific impacts, and recovery projections across different Thai provinces.',
  status: 'Completed',
  type: 'University Project',
  features: [
    'Collected and processed employment data from government agencies and official sources',
    'Developed multiple Machine Learning models (Linear Regression, RNN, LSTM) for forecasting',
    'Created interactive Tableau dashboards for dynamic data visualization and presentation',
    'Analyzed employment impact across different industry sectors and Thai provinces',
    'Generated post-COVID labor market recovery trend predictions and projections'
  ]
},
{
  title: 'Travel Journal Web Application',
  tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  description: 'A full-stack web application designed for travel enthusiasts to document and share their journey experiences. The project demonstrates strong database design principles through normalized schema creation, comprehensive ER diagram modeling, and optimized query performance. Features include user authentication, photo gallery management, interactive maps integration, travel itinerary planning, and social sharing capabilities. Built with responsive design using Bootstrap framework, ensuring seamless experience across desktop and mobile devices. Implemented advanced search functionality, tag-based content organization, and privacy controls for personal travel data.',
  status: 'Completed',
  type: 'University Project',
  features: [
    'Designed normalized database schema with comprehensive ER diagrams and optimized queries',
    'Built photo gallery management system for storing and organizing travel memories',
    'Integrated interactive maps for route visualization and destination marking',
    'Developed travel itinerary planning system with scheduling and organization tools',
    'Implemented advanced search functionality with tag-based filtering and privacy controls'
  ]
}
];

export const experience = [
  {
    title: 'Full-Stack Developer',
    company: 'Personal Project',
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