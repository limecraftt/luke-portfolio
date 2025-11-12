import React from 'react';

// Skills Data
const skillsData = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Linux', 'Agile']
};

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="w-16 h-1 bg-cyan-400 mx-auto mb-3"></div>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

// Skill Card Component
const SkillCard = ({ title, skills = [] }) => (
  <div className="bg-[#1a2534] rounded-xl p-6 border border-gray-800/50">
    <h3 className="text-lg font-semibold text-cyan-400 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-[#273142] text-white text-sm font-medium rounded-full border border-gray-700/50 hover:border-cyan-400 hover:text-cyan-400 hover:bg-[#2a3648] transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Main Skills Section
const SkillsSection = () => (
  <section id="skills" className="py-16 px-6 bg-[#0a1520]">
    <div className="max-w-6xl mx-auto">
      <SectionHeader 
        title="Skills & Technologies" 
        subtitle="A diverse toolkit built through academic learning and hands-on project experience"
      />

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <SkillCard title="Languages" skills={skillsData.languages} />
        <SkillCard title="Frontend" skills={skillsData.frontend} />
        <SkillCard title="Backend" skills={skillsData.backend} />
        <SkillCard title="Tools & Others" skills={skillsData.tools} />
      </div>
    </div>
  </section>
);

export default SkillsSection;