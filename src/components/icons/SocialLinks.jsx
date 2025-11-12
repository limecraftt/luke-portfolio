import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => (
  <div className="flex items-center justify-center gap-4">
    <a href="https://github.com" className="w-14 h-14 bg-[#1a2942] rounded-full flex items-center justify-center hover:bg-[#243a5e] transition-colors">
      <Github size={22} />
    </a>
    <a href="https://linkedin.com" className="w-14 h-14 bg-[#1a2942] rounded-full flex items-center justify-center hover:bg-[#243a5e] transition-colors">
      <Linkedin size={22} />
    </a>
    <a href="mailto:alex@email.com" className="w-14 h-14 bg-[#1a2942] rounded-full flex items-center justify-center hover:bg-[#243a5e] transition-colors">
      <Mail size={22} />
    </a>
  </div>
);

export default SocialLinks;