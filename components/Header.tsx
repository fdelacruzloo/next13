// Header.tsx
"use client";
// Header.tsx
import React from "react";
import Button from "../components/Button";

type HeaderProps = {
  containers: string[];
  setVisibleContainer: (name: string) => void;
};

const Header: React.FC<HeaderProps> = ({ containers, setVisibleContainer }) => {
  return (
<div className="py-5 flex flex-col items-center justify-center fixed w-full top-0 bg-white z-50">
  <h1 className="text-2xl text-center mb-4">Gasodomésticos</h1>
  <div className="flex space-x-1">
    {containers.map((name) => (
      <Button
        key={name}
        name={name}
        onClick={() => setVisibleContainer(name)}
      />
    ))}
  </div>
</div>
  );
};

export default Header;
