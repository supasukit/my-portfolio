
import { Briefcase } from 'lucide-react';

const ExperienceSection = ({ experience }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-3 text-indigo-400" />
        Work Experience
      </h2>
      {experience.map((exp, index) => (
        <div key={index} className="bg-gray-700 rounded-lg p-6 border-l-4 border-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-indigo-400 font-medium">{exp.company}</p>
            </div>
            <div className="flex flex-col md:items-end">
              <span className="text-gray-300 font-medium">{exp.period}</span>
              <span className={`text-xs px-2 py-1 rounded-full mt-1 ${exp.type === 'Remote' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {exp.type}
              </span>
            </div>
          </div>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-300 flex items-start">
                <span className="text-indigo-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;