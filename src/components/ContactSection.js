
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ContactSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Mail className="w-6 h-6 mr-3 text-indigo-400" />
        Get In Touch
      </h2>
      
      <div className="bg-gray-700 rounded-lg p-6">
        <p className="text-gray-300 mb-6 text-lg">
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group">
            <Mail className="w-6 h-6 text-red-400 mr-4" />
            <div>
              <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors">Email</h3>
              <p className="text-gray-300 text-sm">{personalInfo.email}</p>
            </div>
          </a>
          
          <a href={`tel:${personalInfo.phone}`} className="flex items-center p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group">
            <Phone className="w-6 h-6 text-green-400 mr-4" />
            <div>
              <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">Phone</h3>
              <p className="text-gray-300 text-sm">{personalInfo.phone}</p>
            </div>
          </a>
          
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group">
            <Linkedin className="w-6 h-6 text-blue-400 mr-4" />
            <div>
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">LinkedIn</h3>
              <p className="text-gray-300 text-sm">linkedin.com/in/supasukitk/</p>
            </div>
          </a>
          
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group">
            <Github className="w-6 h-6 text-purple-400 mr-4" />
            <div>
              <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">GitHub</h3>
              <p className="text-gray-300 text-sm">github.com/supasukit</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;