// Header.tsx
"use client";
import React, { useState } from "react";
import Button from "./Button";
{/*
  import { Link } from "react-router-dom";
*/}

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
    <div className="py-1 flex flex-col w-full justify-center space-x-4 fixed inset-x-0 top-0 bg-white z-50">
      <div className="flex flex-col space-y-1">
  
        {/* 
                <div className="flex flex-row space-x-2 justify-center mb-2">
                    <Link to="/app/productos" className="btn">
                      Productos
                    </Link>
                    <Link to="app/cotizacion" className="btn">
                      Cotización
                    </Link>
                    <Link to="app/cliente" className="btn">
                      Cliente
                    </Link>
                    <Link to="app/manuales" className="btn">
                      Inicio
                    </Link>
                  </div>
        */}

        <div className="flex flex-row space-x-1 justify-center mb-2">
          {containers.map((name) => (
            <Button
              key={name}
              name={name}
              onClick={() => handleClick(name)}
              className={
                name === activeContainer &&
                [
                  "Cocinas",
                  "Freidoras",
                  "Hornos",
                  "Secadoras",
                  "Otros",
                ].includes(name)
                  ? "bg-gray-400"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
