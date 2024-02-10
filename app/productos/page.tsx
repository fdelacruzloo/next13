// page.tsx
"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { NavBar } from "@/components/NavBar";

const containers = ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"];

export default function Page() {
  const [visibleContainer, setVisibleContainer] = useState(containers[0]);

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="fixed w-full bg-white z-50">
          <NavBar />
          <Header
            containers={containers}
            setVisibleContainer={setVisibleContainer}
          />
        </div>
        <div>
          {containers.map((name) => (
            <Container
              key={name}
              name={name}
              visibleContainer={visibleContainer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
