// Footer.tsx
"use client";
import React, { useState } from "react";
import Button from "./Button";

type FooterProps = {
  containers: string[];
  setVisibleContainer: (name: string) => void;
};

const Footer: React.FC<FooterProps> = ({ containers, setVisibleContainer }) => {
  const [activeContainer, setActiveContainer] = useState("");

  const handleClick = (name: string) => {
    setVisibleContainer(name);
    setActiveContainer(name);
  };

  return (
    <div className="py-5 flex justify-center space-x-4 fixed inset-x-0 bottom-0 bg-white">
      {containers.map((name) => (
        <Button
          key={name}
          name={name}
          onClick={() => handleClick(name)}
          className={name === activeContainer && ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"].includes(name) ? 'bg-gray-400' : ''}
        />
      ))}
    </div>
  );
};

export default Footer;