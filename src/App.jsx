import React, { useState, useEffect } from 'react';
import { sections, skills, projects, experience } from './data/portfolioData';
import ProfileSection from './components/ProfileSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ContactSection from './components/ContactSection.jsx';

const DiscordPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return <ProfileSection isOnline={isOnline} />;
      case 'experience':
        return <ExperienceSection experience={experience} />;
      case 'projects':
        return <ProjectsSection projects={projects} />;
      case 'education':
        return <EducationSection />;
      case 'skills':
        return <SkillsSection skills={skills} />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white relative">
      {/* Background เบลอ */}
      <div 
        className="absolute inset-0 scale-110"
          style={{
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/intro-coding.jpeg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(8px)',
        }}
      ></div>
      
      {/* Overlay สีเข้ม */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* เนื้อหาที่ไม่เบลอ */}
      <div className="relative z-10">
        {/* Discord-style sidebar */}
        <div className="fixed left-0 top-0 h-full w-72 bg-gray-900/90 backdrop-blur-sm border-r border-gray-700 overflow-y-auto">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* รูปโปรไฟล์ */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/d6440734-f5f5-41d4-9082-be8df04220fe.jpg'} 
                    alt="Suphasukit" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback ถ้าไม่มีรูป */}
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-lg font-bold text-white" style={{display: 'none'}}>
                    SK
                  </div>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              </div>
              <div>
                <h2 className="font-semibold text-white">Suphasukit</h2>
                <p className="text-sm text-gray-400">Full-Stack Developer</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4">
            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800/90 backdrop-blur-sm border-t border-gray-700">
            <div className="text-center text-xs text-gray-500">
              <p>Suphasukit Kleebbai</p>
              
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="ml-72 min-h-screen">
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordPortfolio;