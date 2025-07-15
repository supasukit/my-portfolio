import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Personal Project',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      description: 'Developing cross-platform desktop applications and web solutions for various clients. Specializing in modern JavaScript frameworks, database design, and system architecture.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Electron.js', 'Docker'],
      achievements: [
        'Built POS application serving multiple retail businesses',
        'Implemented real-time inventory management systems',
        'Deployed scalable database solutions using Docker',
        'Created responsive web applications with modern UI/UX'
      ]
    },
    {
      title: 'Computer Engineering Student',
      company: 'Naresuan University',
      location: 'Phitsanulok, Thailand',
      period: 'Jun 2021 - Mar 2025',
      description: 'Pursuing Bachelor\'s degree in Computer Engineering with focus on software development, data structures, algorithms, and system design. Active in programming projects and data analysis.',
      technologies: ['Python', 'C++', 'Java', 'SQL', 'Machine Learning'],
      achievements: [
        'Completed COVID-19 employment analysis research project',
        'Developed web applications using modern frameworks',
        'Maintained high academic performance in core subjects',
        'Participated in software development competitions'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-3 text-indigo-400" />
        Professional Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <p className="text-indigo-400 font-medium mb-2">{exp.company}</p>
              </div>
              <div className="text-sm text-gray-400 md:text-right">
                <div className="flex items-center mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {exp.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {exp.location}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-indigo-400 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;