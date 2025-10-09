import React, { useRef, useEffect, useState } from "react";
import { Users, Briefcase, Scale, Aperture, ChevronLeft, ChevronRight } from "lucide-react";

const audienceSegments = [
  {
    icon: Users,
    title: "Creadores y Coaches de Alto Nivel",
    pain: "Usan +5 herramientas dispersas (Notion, Stripe, Sheets). Pierden tiempo y control al no tener su propio sistema.",
    solution: "Diseñamos tu propio 'mini SaaS' para gestionar pagos recurrentes, clientes y comunidad. **Cobra sin depender de plataformas.**",
    cta: "Devsono Launch / Scale",
  },
  {
    icon: Briefcase,
    title: "Agencias y Consultores Caóticos",
    pain: "Crecen pero con procesos manuales y reportes lentos. El equipo está desorganizado por la falta de estructura.",
    solution: "Implementamos automatización API y sistemas internos (CRM/ERP) que transforman tu operación en un sistema que no duerme. **Haz que tus métricas respiren solas.**",
    cta: "Devsono Scale / Secure",
  },
  {
    icon: Scale,
    title: "E-commerce y Academias que Quieren Escalar",
    pain: "Pagan comisiones excesivas a plataformas de terceros (Shopify, WooCommerce) o tienen soluciones 'en plantilla'.",
    solution: "Convierte tu tienda en una plataforma que te pertenece. Reduce comisiones, controla tus datos y aumenta tus márgenes con checkouts y dashboards personalizados.",
    cta: "Devsono Scale / Secure",
  },
  {
    icon: Aperture,
    title: "Empresas que Quieren Incorporar IA",
    pain: "Saben del 'boom' de IA pero no saben cómo aplicarla para resolver sus procesos lentos o repetitivos.",
    solution: "Implementación de IA práctica, sin humo. Bots, asistentes y análisis inteligentes con OpenAI API para automatizar soporte y análisis interno. **No compres IA. Crea la tuya.**",
    cta: "Devsono AI / Scale",
  },
];

export default function Audiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const next = () => setCurrentIndex((p) => (p + 1) % audienceSegments.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + audienceSegments.length) % audienceSegments.length);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0, endX = 0;

    const onStart = (e) => (startX = e.changedTouches[0].screenX);
    const onEnd = (e) => {
      endX = e.changedTouches[0].screenX;
      if (endX < startX - 50) next();
      if (endX > startX + 50) prev();
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  const current = audienceSegments[currentIndex];
  const Icon = current.icon;

  return (
    <section id="audiencias" className="py-28 bg-slate-900/50 border-b border-cyan-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">¿PARA QUIÉN DISEÑAMOS SISTEMAS?</h2>
        <p className="text-lg text-devson-primary mb-12 text-center max-w-2xl mx-auto">
          Nuestra ingeniería está dedicada a 4 perfiles que buscan escala y control total de su operación.
        </p>

        <div className="relative">
          <div
            ref={containerRef}
            className="bg-slate-800/80 p-6 sm:p-8 rounded-xl shadow-2xl border border-cyan-700/50 min-h-[300px] flex items-center transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start w-full transition-opacity duration-300">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 text-center">
                <Icon className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-devson-primary p-3 bg-fuchsia-900/30 rounded-full border border-fuchsia-700" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">{current.title}</h3>
              </div>
              <div className="md:border-l border-cyan-700/50 md:pl-10 text-center md:text-left">
                <h4 className="text-lg font-bold text-gray-400 mb-2 uppercase tracking-wider">Dolor:</h4>
                <p className="text-xl text-red-300 italic mb-4 sm:mb-6">"{current.pain}"</p>
                <h4 className="text-lg font-bold text-gray-400 mb-2 uppercase tracking-wider">Solución Devson Labs:</h4>
                <p className="text-xl text-cyan-300 font-semibold leading-relaxed">"{current.solution}"</p>
                <p className="mt-4 text-xs text-gray-500">Ejemplo de Solución: {current.cta}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-3 bg-slate-700/80 rounded-full shadow-lg hover:bg-cyan-700/50 transition ring-2 ring-cyan-500/50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-3 bg-slate-700/80 rounded-full shadow-lg hover:bg-cyan-700/50 transition ring-2 ring-cyan-500/50"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {audienceSegments.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "bg-devson-primary w-8" : "bg-gray-700"
                }`}
                aria-label={`Ir a la audiencia ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

