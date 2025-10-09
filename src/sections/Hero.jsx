import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const phrases = [
    { text: "Estructuras Digitales que Facturan, Analizan y se Adaptan Solas.", highlight: ["Facturan", "Analizan"] },
    { text: "Sistemas Inteligentes que Aprenden de tus Datos y los convierten en Decisiones.", highlight: ["Inteligentes", "Decisiones"] },
    { text: "Automatizaciones que Ahorran Tiempo y Escalan tus Ingresos.", highlight: ["Tiempo", "Ingresos"] },
    { text: "Redes Ciberseguras que se Fortalecen con Cada Ataque.", highlight: ["Ciberseguras"] },
    { text: "Infraestructuras que Piensan como un Equipo Humano — pero sin errores.", highlight: ["Equipo Humano", "errores"] },
    { text: "Ecosistemas IA que Monetizan tus Procesos y Operan 24/7.", highlight: ["IA", "Monetizan"] },
    { text: "Mentes Digitales que Interpretan el Caos y Actúan por ti.", highlight: ["Interpretan", "Actúan"] },
    { text: "Arquitecturas Autónomas que Anticipan el Futuro y se Reprograman Solas.", highlight: ["Autónomas", "Futuro"] },
  ];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [glow, setGlow] = useState(false);

  // Typing effect control
  useEffect(() => {
    const current = phrases[index].text;
    let speed = deleting ? 25 + Math.random() * 15 : 55 + Math.random() * 25;

    if (!deleting && displayed.length < current.length) {
      const next = current.charAt(displayed.length);
      const timeout = setTimeout(() => setDisplayed((p) => p + next), speed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed === current) {
      setGlow(true);
      const timeout = setTimeout(() => {
        setGlow(false);
        setDeleting(true);
      }, 3500); // ⏱ más tiempo visible antes de borrar
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed((p) => p.slice(0, -1));
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

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 600);
    return () => clearInterval(blink);
  }, []);

  // Highlight render
  const renderWithHighlights = (text) => {
    const { highlight } = phrases[index];
    let result = text;
    highlight.forEach((word, i) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      const colorClass = i % 2 === 0 ? "text-devson-primary" : "text-devson-secondary";
      result = result.replace(
        regex,
        `<span class='${colorClass} font-semibold'>$1</span>`
      );
    });
    return result;
  };

  return (
    <section className="relative overflow-hidden flex flex-col justify-center text-center min-h-[90vh] sm:min-h-[85vh] border-b border-devson-secondary/30 bg-devson-dark">
      {/* Fondo IA sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,179,255,0.08)_0%,#0C0F16_85%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-32">
        <p className="text-sm font-bold tracking-[0.2em] text-devson-primary uppercase mb-6">
          FRAMEWORK DEVSON V1.0 · INGENIERÍA APLICADA AL ROI
        </p>

        {/* Typing principal con espacio fijo */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white 
                     min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem] mb-4"
        >
          <span className="text-devson-secondary font-semibold">Diseñamos </span>
          <span
            dangerouslySetInnerHTML={{ __html: renderWithHighlights(displayed) }}
          />
          <span
            className={`ml-[2px] text-devson-primary ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            ▌
          </span>
        </motion.h1>

        {/* Texto fijo debajo */}
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
          En <span className="font-semibold text-white">Devson Labs</span>, no vendemos{" "}
          <em className="text-devson-secondary">“páginas web”</em>, sino{" "}
          <strong className="text-white">sistemas inquebrantables</strong> que generan retorno, 
          eliminan errores y crean dinero en automático.
        </p>

        {/* Botones fijos (no se mueven al cambiar el texto) */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5 sm:gap-6 pb-10">
          <button className="px-8 py-3 text-base font-semibold text-slate-900 bg-devson-primary rounded-full hover:bg-devson-secondary shadow-neural transition duration-300 transform hover:scale-105">
            Solicita una Auditoría Gratuita
          </button>
          <button className="px-8 py-3 text-base font-semibold text-devson-secondary border border-devson-secondary rounded-full hover:bg-devson-secondary hover:text-slate-900 transition duration-300 transform hover:scale-105">
            Ver Quién Debe Escalar
          </button>
        </div>
      </div>
    </section>
  );
};

// ⚡ Glow IA sutil y rápido
const glowStyle = document.createElement("style");
glowStyle.innerHTML = `
@keyframes glowPulseIA {
  0%, 100% { text-shadow: 0 0 5px #00FFC6, 0 0 10px #00B3FF; }
  50% { text-shadow: 0 0 10px #00B3FF, 0 0 20px #00FFC6; }
}
.animate-glow {
  animation: glowPulseIA 0.7s ease-in-out;
}
`;
document.head.appendChild(glowStyle);

export default Hero;
