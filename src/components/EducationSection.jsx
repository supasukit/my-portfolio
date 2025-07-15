import { GraduationCap, Award, Database, Server, Globe, Shield, Lock } from 'lucide-react';

const EducationSection = () => {
  const certificates = [
    {
      title: 'Essential SQL for Everyone',
      issuer: 'BorntoDev',
      icon: Database,
      color: 'text-blue-400',
      image: `${process.env.PUBLIC_URL}/images/sql-certificate.png`
    },
    {
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      issuer: 'Udemy',
      icon: Server,
      color: 'text-green-400',
      image: `${process.env.PUBLIC_URL}/images/nodejs-bootcamp.jpg`
    },
    {
      title: 'Complete Web Development Course',
      issuer: 'Udemy', 
      icon: Globe,
      color: 'text-purple-400',
      image: `${process.env.PUBLIC_URL}/images/web-development.jpg`
    },
    {
      title: 'The Complete Cyber Security Course: Network Security',
      issuer: 'Udemy',
      icon: Shield,
      color: 'text-red-400',
      image: `${process.env.PUBLIC_URL}/images/cyber-security-network.jpg`
    },
    {
      title: 'The Complete Cyber Security Course: Hackers Exposed!',
      issuer: 'Udemy',
      icon: Lock,
      color: 'text-orange-400',
      image: `${process.env.PUBLIC_URL}/images/cyber-security-hackers.jpg`
    }
  ];

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

      {/* ส่วนใบเซอร์ - แสดงรูปเลย */}
      <div className="bg-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-400" />
          Certifications
        </h3>
        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors group">
              
              {/* ข้อมูลด้านซ้าย */}
              <div className="flex items-center flex-grow mb-4 md:mb-0">
                <cert.icon className={`w-6 h-6 ${cert.color} mr-4 flex-shrink-0`} />
                <div className="flex-grow">
                  <h4 className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                {/* Badge */}
                <div className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium ml-4">
                  Certified ✓
                </div>
              </div>
              
              {/* รูปใบเซอร์ด้านขวา */}
              <div className="w-full md:w-32 h-24 bg-gray-500 rounded-lg overflow-hidden border-2 border-gray-400 ml-0 md:ml-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="w-full h-full bg-gray-600 flex items-center justify-center text-xs text-gray-400" style={{display: 'none'}}>
                  📜 Certificate
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;