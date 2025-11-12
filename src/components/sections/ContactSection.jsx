import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

// Contact Data
const contactData = {
  email: 'your.email@example.com',
  github: 'github.com/yourusername',
  linkedin: 'linkedin.com/in/yourusername',
  location: 'Embu, Kenya'
};

// Section Header Component
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="w-16 h-1 bg-cyan-400 mx-auto mb-3"></div>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

// Contact Card Component
const ContactCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 p-4 bg-[#0f1824] rounded-lg border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300">
    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
      <Icon size={20} className="text-cyan-400" />
    </div>
    <div className="overflow-hidden">
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className="text-white text-sm font-medium truncate">{value}</p>
    </div>
  </div>
);

const ContactSection = () => (
  <section id="contact" className="py-16 px-6 bg-[#0a1520]">
    <div className="max-w-5xl mx-auto">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />

      <div className="bg-[#1a2534] border border-gray-800/50 rounded-xl p-8">
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <ContactCard icon={Mail} label="Email" value={contactData.email} />
          <ContactCard icon={Github} label="GitHub" value={contactData.github} />
          <ContactCard icon={Linkedin} label="LinkedIn" value={contactData.linkedin} />
          <ContactCard icon={MapPin} label="Location" value={contactData.location} />
        </div>

        <div className="text-center pt-6 border-t border-gray-800/50">
          <p className="text-gray-400 mb-4">Let's create something amazing together</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium text-sm">
            <Mail size={18} />
            Send me an email
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;