import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

// Education Data
const educationData = {
  degree: {
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2021 - 2025',
    focus: 'Focus on Software Engineering, Artificial Intelligence, and Data Structures',
    highlights: [
      'GPA: 3.8/4.0',
      "Dean's List: 6 semesters",
      'President of Computer Science Club'
    ]
  },
  certifications: [
    'AWS Certified Cloud Practitioner',
    'Google Associate Cloud Engineer',
    'Meta Frontend Developer Certificate'
  ]
};

// Section Header Component
const SectionHeader = ({ title }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
  </div>
);

const EducationSection = () => (
  <section id="education" className="py-20 px-6 bg-[#0f1923]">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Education" />

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Degree */}
        <div className="bg-[#1a2534] border border-gray-800/50 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
              <GraduationCap size={32} className="text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {educationData.degree.title}
              </h3>
              <p className="text-gray-400 mb-2">{educationData.degree.institution}</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={16} />
                <span>{educationData.degree.period}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6 leading-relaxed text-sm">
            {educationData.degree.focus}
          </p>
          
          <ul className="space-y-3">
            {educationData.degree.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="bg-[#1a2534] border border-gray-800/50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
              <Award size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Certifications</h3>
          </div>
          
          <ul className="space-y-4">
            {educationData.certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;