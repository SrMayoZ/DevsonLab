import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 border-t border-cyan-800 text-center py-6 relative z-10">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Devsono Labs — Ingeniería, IA y Crecimiento.
      </p>
    </footer>
  );
}
