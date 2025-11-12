import React from 'react';
import { Mail, ChevronDown, Github, Linkedin, User } from 'lucide-react';

// Button Component
const Button = ({ children, variant = 'primary', onClick, icon: Icon }) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50",
    secondary:
      "border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

// Social Links Component
const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', url: '#', Icon: Github },
    { name: 'LinkedIn', url: '#', Icon: Linkedin },
    { name: 'Email', url: '#', Icon: Mail },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border-2 border-gray-700 hover:border-cyan-400 hover:bg-gray-700 transition-all duration-300 group"
          aria-label={social.name}
        >
          <social.Icon size={20} className="text-gray-400 group-hover:text-cyan-400" />
        </a>
      ))}
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white relative">
      {/* Header with Profile Icon */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <button
          className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
          aria-label="View Profile"
        >
          <User size={22} className="text-gray-400 hover:text-cyan-400" />
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-cyan-400">Mutahi Charles Maina</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-6 font-light">
            Computer Science Student & Full Stack Developer
          </p>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about building innovative solutions and exploring
            cutting-edge technologies. Specializing in web development, AI/ML,
            and software engineering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection('contact')}
              icon={Mail}
            >
              Get In Touch
            </Button>
          </div>

          <div className="mb-8">
            <ChevronDown
              size={28}
              className="mx-auto text-cyan-400 animate-bounce"
            />
          </div>

          <SocialLinks />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;