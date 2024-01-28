// page.tsx
"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Footer";
import Footer from "@/components/Header";

const containers = ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"];

export default function Home() {
  const [visibleContainer, setVisibleContainer] = useState(containers[0]);

  return (
    <main className="container items-center flex flex-col min-h-screen pb-20"> 
      <div className="flex-grow">
        <h1 className="text-2xl text-center">Gasodomésticos</h1>
        <Header
          containers={containers}
          setVisibleContainer={setVisibleContainer}
        />
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
      <Footer />
    </main>
  );
}
