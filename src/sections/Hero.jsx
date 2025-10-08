import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-40 pb-20 border-b border-cyan-900/50">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,rgba(15,23,42,1)_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center bg-slate-900/70 p-8 rounded-xl backdrop-blur-sm border border-cyan-700/30 shadow-2xl shadow-cyan-900/50">
          <p className="text-sm font-bold tracking-widest text-fuchsia-400 uppercase mb-4">
            FRAMEWORK DEVSON V1.0 – INGENIERÍA APLICADA AL ROI
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Diseñamos{" "}
            <span className="text-cyan-400">Estructuras Digitales</span> que
            Facturan, Analizan y se{" "}
            <span className="text-cyan-400">Adaptan Solas.</span>
          </motion.h1>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-300">
            En Devsono Labs, no vendemos "páginas web", sino{" "}
            <strong>sistemas inquebrantables</strong> que generan retorno de
            inversión, eliminan errores y crean dinero en automático.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-cyan-400 hover:bg-cyan-500 shadow-xl shadow-cyan-500/50 transition duration-300 transform hover:scale-105 ring-4 ring-cyan-600/30">
              Solicita una Auditoría Gratuita
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-fuchsia-500 text-base font-medium rounded-full text-fuchsia-300 bg-transparent hover:bg-slate-800/30 transition duration-300 transform hover:scale-105 ring-2 ring-fuchsia-500/50">
              Ver Quién Debe Escalar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
