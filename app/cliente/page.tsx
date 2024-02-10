// cliente/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";

export default function Page() {

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <NavBar />
        <h1>Hola cliente</h1>
      </div>
    </main>
  );
}
