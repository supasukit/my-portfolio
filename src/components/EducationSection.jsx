
import { GraduationCap, Award, Database, Server, Globe, Shield, Lock } from 'lucide-react';

const EducationSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <GraduationCap className="w-6 h-6 mr-3 text-indigo-400" />
        Education & Certifications
      </h2>
      
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-2">Bachelor's Degree in Computer Engineering</h3>
        <p className="text-indigo-400 font-medium mb-2">Naresuan University</p>
        <p className="text-gray-300 mb-4">Jun 2021 - Mar 2025</p>
        <p className="text-gray-300">
          Relevant coursework in Systems and Software Engineering, Database Systems, Algorithm Analysis, 
          Operating Systems, Computer and Information Security, Data Structures, and Computer Networks
        </p>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-400" />
          Certifications
        </h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Database className="w-4 h-4 text-blue-400 mr-3" />
            <span className="text-gray-300">Essential SQL for Everyone - BorntoDev</span>
          </div>
          <div className="flex items-center">
            <Server className="w-4 h-4 text-green-400 mr-3" />
            <span className="text-gray-300">Node.js, Express, MongoDB & More: The Complete Bootcamp - Udemy</span>
          </div>
          <div className="flex items-center">
            <Globe className="w-4 h-4 text-purple-400 mr-3" />
            <span className="text-gray-300">Complete Web Development Course - Udemy</span>
          </div>
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-red-400 mr-3" />
            <span className="text-gray-300">The Complete Cyber Security Course: Network Security - Udemy</span>
          </div>
          <div className="flex items-center">
            <Lock className="w-4 h-4 text-orange-400 mr-3" />
            <span className="text-gray-300">The Complete Cyber Security Course: Hackers Exposed! - Udemy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;