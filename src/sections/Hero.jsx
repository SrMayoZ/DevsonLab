import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Frases con palabras clave
  const phrases = [
    { text: "Estructuras Digitales que Facturan, Analizan y se Adaptan Solas.", highlight: ["Facturan", "Analizan"] },
    { text: "Sistemas Inteligentes que Aprenden de tus Datos y los convierten en Decisiones.", highlight: ["Inteligentes", "Decisiones"] },
    { text: "Automatizaciones que Ahorran Tiempo y Escalan tus Ingresos.", highlight: ["Tiempo", "Ingresos"] },
    { text: "Redes Ciberseguras que se Fortalecen con Cada Ataque.", highlight: ["Ciberseguras"] },
    { text: "Infraestructuras que Piensan como un Equipo Humano — pero sin errores.", highlight: ["Equipo Humano"] },
    { text: "Ecosistemas IA que Monetizan tus Procesos y Operan 24/7.", highlight: ["IA", "Monetizan"] },
    { text: "Mentes Digitales que Interpretan el Caos y Actúan por ti.", highlight: ["Interpretan", "Actúan"] },
    { text: "Arquitecturas Autónomas que Anticipan el Futuro y se Reprograman Solas.", highlight: ["Autónomas", "Futuro"] },
  ];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [deleting, setDeleting] = useState(false);

  // --- Efecto de typing natural
  useEffect(() => {
    const current = phrases[index].text;
    let speed = deleting ? 35 + Math.random() * 20 : 80 + Math.random() * 50;

    if (!deleting && displayed.length < current.length) {
      const next = current.charAt(displayed.length);
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + next);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed === current) {
      const timeout = setTimeout(() => setDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed === "") {
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setDeleting(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [displayed, deleting, index]);

  // --- Cursor parpadeante
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 600);
    return () => clearInterval(blink);
  }, []);

  // --- Palabras en color fucsia (highlight)
  const renderWithHighlights = (text) => {
    const { highlight } = phrases[index];
    let result = text;
    highlight.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      result = result.replace(
        regex,
        `<span class='text-fuchsia-400 font-semibold'>$1</span>`
      );
    });
    return result;
  };

  return (
    <section className="relative overflow-hidden pt-28 md:pt-44 pb-24 border-b border-cyan-800/40">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,rgba(10,15,25,1)_80%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-bold tracking-[0.2em] text-fuchsia-400 uppercase mb-5">
          FRAMEWORK DEVSON V1.0 · INGENIERÍA APLICADA AL ROI
        </p>

        {/* Texto principal con typing */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_rgba(6,182,212,0.25)]"
        >
          <span className="text-cyan-400 font-semibold">Diseñamos </span>
          <span
            dangerouslySetInnerHTML={{
              __html: renderWithHighlights(displayed),
            }}
          />
          <span
            className={`ml-[2px] text-cyan-400 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            ▌
          </span>
        </motion.h1>

        {/* Texto inferior */}
        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          En <span className="font-semibold text-white">Devson Labs</span>, no vendemos{" "}
          <em className="text-fuchsia-300">“páginas web”</em>, sino{" "}
          <strong className="text-white">sistemas inquebrantables</strong> que generan retorno de inversión, 
          eliminan errores y crean dinero en automático.
        </p>

        {/* Botones */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-8 py-3 text-base font-semibold text-slate-900 bg-cyan-400 rounded-full hover:bg-cyan-300 shadow-lg shadow-cyan-500/40 transition duration-300 transform hover:scale-105">
            Solicita una Auditoría Gratuita
          </button>
          <button className="px-8 py-3 text-base font-semibold text-fuchsia-300 border border-fuchsia-500/60 rounded-full hover:bg-fuchsia-900/20 hover:text-white transition duration-300 transform hover:scale-105">
            Ver Quién Debe Escalar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
