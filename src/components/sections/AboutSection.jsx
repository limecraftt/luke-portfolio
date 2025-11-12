import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

// Section Header Component
const SectionHeader = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
  </div>
);

const AboutSection = () => {
  const features = [
    { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code with best practices' },
    { icon: Rocket, title: 'Fast Learner', desc: 'Quick to adapt and master new technologies' },
    { icon: Users, title: 'Team Player', desc: 'Collaborative approach to problem-solving' }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-[#0a1520]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a dedicated Computer Science student with a passion for creating elegant solutions to complex problems. Currently pursuing my degree while actively building projects that make a difference.
            </p>
            <p>
              My journey in tech started with curiosity about how things work under the hood. Today, I'm proficient in multiple programming languages and frameworks, constantly pushing myself to learn and grow.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-4">
            {features.map(item => (
              <div key={item.title} className="bg-[#1a2534] border border-gray-800/50 rounded-xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                    <item.icon size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;