// Header.tsx
"use client";
import React, { useState } from "react";
import Button from "./Button";

type HeaderProps = {
  containers: string[];
  setVisibleContainer: (name: string) => void;
};

const Header: React.FC<HeaderProps> = ({ containers, setVisibleContainer }) => {
  const [activeContainer, setActiveContainer] = useState("");

  const handleClick = (name: string) => {
    setVisibleContainer(name);
    setActiveContainer(name);
  };

  return (
<div className="py-1 flex flex-col items-center w-full justify-center bg-white">{/*py-1 flex flex-col items-center w-full justify-center fixed inset-x-0 bg-white z-100*/}
  <div className="flex flex-row space-x-1 justify-center">
    {containers.map((name) => (
      <Button
        key={name}
        name={name}
        onClick={() => handleClick(name)}
        className={name === activeContainer && ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"].includes(name) ? 'bg-gray-400' : ''}
      />
    ))}
  </div>
</div>


  );
};

export default Header;