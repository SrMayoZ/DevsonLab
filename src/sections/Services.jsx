import React from "react";
import { motion } from "framer-motion";
import { Brain, Server, Bot, Shield, Rocket } from "lucide-react";

const services = [
  {
    icon: <Server className="w-10 h-10 text-cyan-400" />,
    title: "Desarrollo Web Escalable",
    desc: "Aplicaciones modernas, rápidas y seguras optimizadas para el crecimiento y la experiencia del usuario.",
  },
  {
    icon: <Bot className="w-10 h-10 text-devson-primary" />,
    title: "Automatización con IA",
    desc: "Implementamos bots inteligentes, workflows automáticos y sistemas conectados a APIs empresariales.",
  },
  {
    icon: <Shield className="w-10 h-10 text-cyan-400" />,
    title: "Ciberseguridad & Infraestructura",
    desc: "Auditorías, pentesting y despliegues blindados en AWS, Hetzner y Linode.",
  },
  {
    icon: <Brain className="w-10 h-10 text-devson-primary" />,
    title: "SaaS & Plataformas Personalizadas",
    desc: "Sistemas completos tipo CRM, OnlyFans o Marketplace diseñados a medida de tu negocio.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-cyan-400" />,
    title: "Growth & Performance",
    desc: "Optimización de rendimiento, data analytics y automatización de marketing con IA.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-slate-950 border-y border-cyan-900/40">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Servicios Clave
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg"
        >
          Fusionamos desarrollo, automatización y ciberseguridad para crear sistemas que no solo funcionan, sino que aprenden y evolucionan contigo.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/50 border border-cyan-800/30 rounded-xl shadow-md hover:shadow-cyan-700/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
