import { MapPin, User, Monitor, Server, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ProfileSection = ({ isOnline }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        {/* Profile Image with Status */}
<div className="relative mb-6">
  <img 
    src={`${process.env.PUBLIC_URL}/images/d6440734-f5f5-41d4-9082-be8df04220fe.jpg`}
    alt="Suphasukit Kleebai" 
    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-400 shadow-lg"
  />
  {/* Online Status - Main Profile */}
  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-gray-800 rounded-full"></div>
</div>
        <div>
          <h1 className="text-3xl font-bold text-white">{personalInfo.name}</h1>
          <p className="text-lg text-indigo-400">{personalInfo.title}</p>
          <div className="flex items-center text-gray-400 mt-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
      
      
      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-indigo-400" />
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {personalInfo.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <Monitor className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <h3 className="text-white font-semibold">Frontend</h3>
          <p className="text-gray-400 text-sm">React, Electron.js</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <Server className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <h3 className="text-white font-semibold">Backend</h3>
          <p className="text-gray-400 text-sm">Node.js, MongoDB</p>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <h3 className="text-white font-semibold">Security</h3>
          <p className="text-gray-400 text-sm">Firewall, Endpoint Security</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;