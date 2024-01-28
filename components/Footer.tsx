// Footer.tsx
"use client";
import React from "react";
import Button from "./Button";

type FooterProps = {
  containers: string[];
  setVisibleContainer: (name: string) => void;
};

const Footer: React.FC<FooterProps> = ({ containers, setVisibleContainer }) => {
  return (
    <div className="py-5 flex justify-center space-x-4 fixed inset-x-0 bottom-0 bg-white">
      {containers.map((name) => (
        <Button
          key={name}
          name={name}
          onClick={() => setVisibleContainer(name)}
        />
      ))}
    </div>
  );
};

export default Footer;