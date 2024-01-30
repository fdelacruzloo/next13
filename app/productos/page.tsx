// page.tsx
"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const containers = ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"];

export default function Home() {
  const [visibleContainer, setVisibleContainer] = useState(containers[0]);

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen pb-20">
      <div className="flex-grow w-full flex flex-col items-center">

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
      
     <Footer
        containers={containers}
        setVisibleContainer={setVisibleContainer}
          />
      
    </main>
  );
}