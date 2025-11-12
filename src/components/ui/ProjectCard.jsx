import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => (
  <div className="bg-[#1a2942] border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500 transition-all">
    <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
      <div className="text-7xl">{project.emoji}</div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-[#0d1b2a] rounded text-xs border border-gray-700">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <Button variant="outline" icon={Github}>Code</Button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors text-sm">
          <ExternalLink size={16} /> Demo
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;