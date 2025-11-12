import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Projects Data
const projectsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    title: 'Task Management System',
    description: 'A full-stack web application for team collaboration with real-time updates, task tracking, and analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    title: 'E-Commerce Mobile App',
    description: 'Cross-platform mobile application with secure payments, product recommendations, and inventory management.',
    tags: ['React Native', 'Firebase', 'Stripe', 'Redux']
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    title: 'AI Content Analyzer',
    description: 'Machine learning project that analyzes and categorizes content using natural language processing and sentiment analysis.',
    tags: ['Python', 'TensorFlow', 'NLP', 'Flask']
  }
];

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="w-16 h-1 bg-cyan-400 mx-auto mb-4"></div>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="group bg-[#1a2534] rounded-xl overflow-hidden border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden bg-gray-800">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2534] to-transparent opacity-60"></div>
    </div>

    {/* Project Details */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {project.title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[#273142] text-white text-xs font-medium rounded-full border border-gray-700/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a
          href="#"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border-2 border-gray-700 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
        >
          <Github size={18} />
          Code
        </a>
        <a
          href="#"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm font-medium"
        >
          <ExternalLink size={18} />
          Demo
        </a>
      </div>
    </div>
  </div>
);

// Main Projects Section
const ProjectsSection = () => (
  <section id="projects" className="py-20 px-6 bg-[#0a1520]">
    <div className="max-w-7xl mx-auto">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Showcasing my best work and technical capabilities"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;