import { Code, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Code className="w-6 h-6 mr-3 text-indigo-400" />
        Featured Projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors border border-gray-600 hover:border-indigo-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-full">
                  {project.type}
                </span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.status === 'Completed' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            {/* Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium mb-2"
                >
                  {expandedProject === index ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Hide Features
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Show Features ({project.features.length})
                    </>
                  )}
                </button>
                
                {expandedProject === index && (
                  <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-indigo-500">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-indigo-400 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {/* Project Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex space-x-4 pt-2 border-t border-gray-600">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium mt-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm font-medium mt-2"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;