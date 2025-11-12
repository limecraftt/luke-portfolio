import React from 'react';

const SkillCard = ({ title, skills }) => (
  <div className="bg-[#1a2942] border border-gray-800 rounded-lg p-8">
    <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span key={skill} className="px-5 py-2 bg-[#0d1b2a] rounded-md text-sm text-gray-300 border border-gray-700">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;