import React from "react";
import { motion } from "framer-motion";

const Framework = () => {
  return (
    <section
      id="framework"
      className="py-28 px-6 md:px-10 bg-[#0f0f14] border-y border-cyan-900/30 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-6"
      >
        Ingeniería. Estrategia. Automatización.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
      >
        En Devson Labs diseñamos sistemas que{" "}
        <span className="text-cyan-400 font-semibold">
          piensan, venden y evolucionan solos
        </span>
        .  
        No creamos páginas web, sino estructuras digitales que analizan datos,
        automatizan procesos y escalan tu negocio con precisión quirúrgica.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {[
          {
            title: "Arquitectura Escalable",
            text: "Infraestructura optimizada para rendimiento, seguridad y crecimiento medible.",
          },
          {
            title: "Automatización con IA",
            text: "Sistemas que aprenden, responden y toman decisiones basadas en datos.",
          },
          {
            title: "Ciberseguridad Integrada",
            text: "Pentesting, auditorías y despliegues blindados en AWS, Hetzner y Linode.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 border border-cyan-800/30 rounded-xl bg-slate-900/40 shadow-md hover:shadow-cyan-700/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Framework;
