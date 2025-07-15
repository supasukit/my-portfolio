import { Trophy } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    'Frontend Development': [
      'React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'
    ],
    'Backend Development': [
      'Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'JWT Authentication', 'Docker'
    ],
    'Database & Tools': [
      'MongoDB', 'MySQL', 'Git/GitHub', 'Docker', 'Tableau', 'Linux/Unix'
    ],
    'Programming Languages': [
      'JavaScript', 'Python', 'Dart (Flutter)', 'PHP', 'C++', 'Java'
    ],
    'Mobile & Desktop': [
      'Flutter', 'Electron.js', 'React Native', 'Cross-platform Development', 'Mobile UI/UX'
    ],
    'Data Science & AI': [
      'Python (Data Analysis)', 'TensorFlow', 'Machine Learning', 'Pandas/NumPy', 'Data Visualization'
    ]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Trophy className="w-6 h-6 mr-3 text-indigo-400" />
        Technical Skills
      </h2>
      
      <div className="grid gap-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Soft Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <span className="text-green-400 mr-2">✓</span>
              Strong problem-solving and analytical thinking
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-green-400 mr-2">✓</span>
              Team collaboration and communication
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-green-400 mr-2">✓</span>
              Fast learner and adaptable to new technologies
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-gray-300">
              <span className="text-green-400 mr-2">✓</span>
              Responsibility and time management
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-green-400 mr-2">✓</span>
              Detail-oriented and quality-focused
            </div>
            <div className="flex items-center text-gray-300">
              <span className="text-blue-400 mr-2">🌐</span>
              Thai (Native), English (Intermediate)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;