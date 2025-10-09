import React from "react";
import { Check } from "lucide-react";

const testimonials = [
  { quote: "Devson Labs diseñó un CRM a medida que redujo nuestro tiempo de reporte en un 70%. Dejamos de operar, empezamos a escalar.", author: "Alejandra K., CEO de Adquirencia Group" },
  { quote: "Su implementación de Stripe para suscripciones recurrentes es inquebrantable. Cero fallas y el dashboard financiero es oro puro.", author: "Marcos V., Fundador de Tindme (Plataforma de Creadores)" },
  { quote: "La auditoría de seguridad y el sistema de acceso por token blindaron nuestros datos sensibles. Inversión prioritaria.", author: "Dr. Ricardo P., Director Médico de Clinica Neo" },
];

const mockClients = ["STARTUP.IO", "CREATORHUB", "FINTEK", "GROWTH AGENCY", "EDUVERSE", "SaaS BUILDERS"];

export default function Authority() {
  return (
    <section id="autoridad" className="py-28 bg-slate-900/70 border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center">
          <Check className="w-6 h-6 mr-3 text-devson-primary" /> PRUEBA DE AUTORIDAD: Sistemas Validados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-slate-800/80 rounded-xl shadow-xl border-l-4 border-fuchsia-500/80">
              <p className="text-lg italic text-gray-300">"{t.quote}"</p>
              <p className="mt-4 text-sm font-bold text-cyan-400">- {t.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-400 mb-8 uppercase tracking-widest">
            Empresas que confiaron en la ingeniería Devson Labs (Ficticio)
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-75">
            {mockClients.map((c, i) => (
              <div key={i} className="text-2xl font-extrabold text-white/50 hover:text-cyan-400 transition duration-300">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

