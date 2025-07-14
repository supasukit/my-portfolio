
import { Code } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Code className="w-6 h-6 mr-3 text-indigo-400" />
        Featured Projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-full">
                  {project.type}
                </span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;