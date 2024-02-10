"use client"
// components/Button.tsx
import React from 'react';

interface ButtonProps {
  name: string;
  onClick: (name: string) => void;
  className?: string; // Agrega esta línea
}

const Button: React.FC<ButtonProps> = ({ name, onClick, className }) => (
  <button
  className={`flex items-center justify-center border border-gray-600 rounded p-0.5 h-6 ${className}`} // Añade la clase 'border'
    type="button"
    onClick={() => onClick(name)}
  >
    {name}
  </button>
);

export default Button;
