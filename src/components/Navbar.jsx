import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-white/10 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#FF3CAC]">
        Devsono Labs
      </h1>
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-[#00F5A0] transition-colors cursor-pointer">Inicio</li>
        <li className="hover:text-[#00F5A0] transition-colors cursor-pointer">Servicios</li>
        <li className="hover:text-[#00F5A0] transition-colors cursor-pointer">Contacto</li>
      </ul>
    </nav>
  );
}
