import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar, Code } from 'lucide-react';
import profileImage from '../../assets/profile.png';

const ProfileSection = () => {
  const socials = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/limecraftt',
      Icon: Github,
      username: '@limecraftt'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/mutahicharlesmaina',
      Icon: Linkedin,
      username: 'Mutahi Charles Maina'
    },
    { 
      name: 'Email', 
      url: 'mailto:airdrophunter743@gmail.com',
      Icon: Mail,
      username: 'airdrophunter743@gmail.com'
    },
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 
    'AI/ML', 'Full Stack Development', 'Software Engineering'
  ];

  return (
    <section id="profile" className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Profile Content */}
        <div className="bg-gray-800 rounded-2xl border-2 border-gray-700 overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-5 gap-8 p-8">
            {/* Profile Image Column */}
            <div className="md:col-span-2 flex flex-col items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/30 mb-6">
                <img 
                  src={profileImage} 
                  alt="Mutahi Charles Maina" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quick Info */}
              <div className="space-y-3 text-center w-full">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <MapPin size={18} className="text-cyan-400" />
                  <span>Embu, Kenya</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Calendar size={18} className="text-cyan-400" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Code size={18} className="text-cyan-400" />
                  <span>Computer Science Student</span>
                </div>
              </div>
            </div>

            {/* Profile Details Column */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Mutahi Charles Maina</h3>
                <p className="text-xl text-cyan-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-400 leading-relaxed">
                  I'm a passionate Computer Science student and Full Stack Developer with a keen interest in 
                  building innovative solutions. I specialize in web development, AI/ML, and software engineering, 
                  constantly exploring cutting-edge technologies to create impactful applications.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-cyan-400">●</span> Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-cyan-400">●</span> Connect With Me
                </h4>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 bg-gray-700 border border-gray-600 rounded-lg hover:border-cyan-400 hover:bg-gray-600 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-600 group-hover:border-cyan-400 transition-all duration-300">
                        <social.Icon size={18} className="text-gray-400 group-hover:text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{social.name}</div>
                        <div className="text-xs text-gray-400">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;