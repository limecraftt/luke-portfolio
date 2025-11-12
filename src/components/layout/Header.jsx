import React from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <>
    {/* Profile Icon Button - Left Side */}
    <button 
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
      aria-label="Toggle Menu"
    >
      <User size={22} className="text-gray-400 hover:text-cyan-400" />
    </button>

    {/* Status Badge - Right Side */}
    <div className="fixed top-6 right-6 z-50">
      <span className="px-4 py-2 text-sm border border-cyan-500 text-cyan-400 rounded-full bg-cyan-500/10 backdrop-blur-sm">
        Available for opportunities
      </span>
    </div>
  </>
);

export default Header;