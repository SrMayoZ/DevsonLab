import React from "react";
import { Code, Zap, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web Escalable",
      desc: "Aplicaciones modernas, rápidas y seguras optimizadas para el crecimiento.",
    },
    {
      icon: Zap,
      title: "Automatización con IA",
      desc: "Bots inteligentes, workflows automáticos y sistemas conectados a APIs.",
    },
    {
      icon: Shield,
      title: "Ciberseguridad & Infraestructura",
      desc: "Auditorías, pentesting y despliegues en AWS, Hetzner o Linode.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/40 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#00F5A0] to-[#FF3CAC] bg-clip-text text-transparent">
          Servicios Clave
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-slate-800/60 border border-cyan-700/50 hover:border-cyan-400/80 transition"
            >
              <Icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
