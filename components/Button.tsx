// Button.tsx
"use client"
import React from 'react';

interface ButtonProps {
  name: string;
  onClick: (name: string) => void;
  className?: string; // Agrega esta línea
}

const Button: React.FC<ButtonProps> = ({ name, onClick, className }) => (
  <button
  className={`border border-gray-600 rounded ${className}`} // Añade la clase 'border'
    type="button"
    onClick={() => onClick(name)}
  >
    {name}
  </button>
);

export default Button;
