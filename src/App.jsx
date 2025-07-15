import React, { useState } from 'react';
import { User, Briefcase, Code, GraduationCap, Wrench, Mail, Menu, X } from 'lucide-react';
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import { projects } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <ProfileSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects':
        return <ProjectsSection projects={projects} />;
      case 'education':
        return <EducationSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <ProfileSection />;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // ปิดเมนูหลังเลือก
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/intro-coding.jpeg)`,
          filter: 'blur(3px)'
        }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 p-4 sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
        <img 
          src={`${process.env.PUBLIC_URL}/images/d6440734-f5f5-41d4-9082-be8df04220fe.jpg`}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border-2 border-indigo-400"
        />
        {/* Online Status - Mobile */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full"></div>
      </div>
      
              <div>
                <h1 className="text-white font-semibold text-sm">Suphasukit</h1>
                <p className="text-gray-400 text-xs">Full-Stack Developer</p>
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
  <div className="lg:hidden bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 sticky top-16 z-40">
    <nav className="p-6"> {/* เพิ่ม padding */}
      <div className="space-y-3"> {/* เปลี่ยนจาก grid เป็น vertical list */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  </div>
)}

        {/* Desktop Sidebar */}
<div className="hidden lg:block w-80 bg-gray-800/95 backdrop-blur-sm border-r border-gray-700">
  {/* Profile Header */}
  <div className="p-6 border-b border-gray-700">
    <div className="flex items-center space-x-4">
      <div className="relative">
        <img 
          src={`${process.env.PUBLIC_URL}/images/d6440734-f5f5-41d4-9082-be8df04220fe.jpg`}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400"
        />
        {/* Online Status - Desktop */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></div>
      </div>
      <div>
        <h1 className="text-white font-semibold">Suphasukit</h1>
        <p className="text-gray-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="p-6">
            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-4 lg:p-8 max-w-4xl mx-auto">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
  
}


export default App;