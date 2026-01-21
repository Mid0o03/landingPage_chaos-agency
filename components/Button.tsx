import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'black' | 'white';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}) => {
  const baseClasses = "flex items-center justify-center rounded-full border-3 border-black font-bold uppercase transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-hover";
  
  const variants = {
    primary: "bg-neo-green text-black shadow-neo hover:bg-neo-pink hover:text-white",
    secondary: "bg-neo-yellow text-black shadow-neo-lg hover:bg-white",
    black: "bg-black text-white shadow-neo-lg hover:bg-neo-pink hover:text-black",
    white: "bg-white text-black shadow-neo-lg hover:bg-neo-green",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;