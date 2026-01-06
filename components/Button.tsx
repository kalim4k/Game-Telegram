import React from 'react';
import { CHECKOUT_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ className = '', fullWidth = false }) => {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center gap-2
        bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
        text-white font-bold py-4 px-8 rounded-full transition-all duration-300
        shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]
        hover:scale-105 active:scale-95
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <span>REJOINDRE LE GROUPE</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite]"></div>
      </div>
    </a>
  );
};

export default Button;