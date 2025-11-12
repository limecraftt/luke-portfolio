import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h2>
    <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
    {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeader;