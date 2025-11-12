import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', icon: Icon }) => {
  const variants = {
    primary: 'px-8 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors font-medium',
    secondary: 'px-8 py-3 border border-gray-600 text-gray-300 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition-colors font-medium',
    outline: 'flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm'
  };

  return (
    <button onClick={onClick} className={`${variants[variant]} ${className} flex items-center gap-2`}>
      {Icon && <Icon size={variant === 'outline' ? 16 : 18} />}
      {children}
    </button>
  );
};

export default Button;