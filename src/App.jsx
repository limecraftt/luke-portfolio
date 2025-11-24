import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import ProfileSection from './components/sections/ProfileSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0d1b2a] text-gray-300 min-h-screen">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ProfileSection /> {/* Added this line */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}