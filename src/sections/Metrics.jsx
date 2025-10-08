import React, { useEffect, useState } from "react";
import { TrendingUp, RefreshCw, Lock, DollarSign } from "lucide-react";

export default function Metrics() {
  const [metrics, setMetrics] = useState({
    traffic: 5800,
    conversion: 2.1,
    securityStatus: "Protegido",
    uptime: 99.99,
  });
  const [log, setLog] = useState([
    "INIT: Framework v1.0 loaded successfully.",
    "DB: Firestore connection secured (low latency).",
  ]);

  useEffect(() => {
    const logEvents = [
      "API: Stripe hook validated. Payment queue sync.",
      "AUTOMATION: Report bot deployed (Cron: 0 4 * * *).",
      "SECURITY: Pentest scan completed. Status: Green.",
      "SaaS: New user signup. Data pipeline updated.",
      "CLOUD: Server cluster optimization complete.",
    ];

    const it = setInterval(() => {
      setMetrics((prev) => {
        let newStatus = "Sistema Protegido";
        const threat = Math.random() < 0.1;
        if (threat) {
          newStatus = "AMENAZA DETECTADA";
          setTimeout(() => {
            setMetrics((p) => ({ ...p, securityStatus: "Blindaje Activo (Ruta Segura)" }));
          }, 2000);
        } else if (prev.securityStatus !== "Sistema Protegido" && Math.random() < 0.3) {
          newStatus = "Sistema Protegido";
        } else {
          newStatus = prev.securityStatus === "AMENAZA DETECTADA" ? "Blindaje Activo (Ruta Segura)" : prev.securityStatus;
        }

        return {
          traffic: Math.floor(prev.traffic * (1 + Math.random() * 0.05 - 0.02)),
          conversion: Math.min(3.5, parseFloat(prev.conversion) + Math.random() * 0.1 - 0.05).toFixed(2),
          uptime: 99.99,
          securityStatus: newStatus,
        };
      });

      setLog((prev) => {
        const nl = [...prev];
        const ev = logEvents[Math.floor(Math.random() * logEvents.length)];
        if (nl.length > 7) nl.shift();
        nl.push(`[${new Date().toLocaleTimeString("es-MX")}] ${ev}`);
        return nl;
      });
    }, 2000);

    return () => clearInterval(it);
  }, []);

  const statusClass = (s) =>
    s?.includes("AMENAZA")
      ? "text-red-400 bg-red-800/20 ring-red-500 animate-pulse-slow"
      : s?.includes("Blindaje")
      ? "text-orange-400 bg-orange-800/20 ring-orange-500"
      : "text-green-400 bg-green-800/20 ring-green-500";

  return (
    <section className="py-28 bg-slate-800/70 border-y border-cyan-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-fuchsia-600/50 pb-2 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3 text-cyan-400" /> SYSTEM CORE METRICS (Control de Crecimiento)
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-700 shadow-xl">
            <p className="text-sm uppercase tracking-wider text-gray-400">Tráfico Activo</p>
            <p className="text-2xl lg:text-3xl font-bold text-white mt-1">{metrics.traffic.toLocaleString()}</p>
            <p className="text-xs text-cyan-400 mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> Escala Masiva
            </p>
          </div>

          <div className={`p-5 rounded-xl border shadow-xl ${statusClass(metrics.securityStatus)}`}>
            <p className="text-sm uppercase tracking-wider text-gray-400">Estado de la Defensa</p>
            <p className="text-xl lg:text-2xl font-bold mt-1">{metrics.securityStatus}</p>
            <p className="text-xs text-gray-400 mt-1 flex items-center">
              <Lock className="w-3 h-3 mr-1" /> Seguridad Proactiva
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-700 shadow-xl">
            <p className="text-sm uppercase tracking-wider text-gray-400">Tasa de Conversión (ROI)</p>
            <p className="text-2xl lg:text-3xl font-bold text-fuchsia-400 mt-1">{metrics.conversion}%</p>
            <p className="text-xs text-cyan-400 mt-1 flex items-center">
              <DollarSign className="w-3 h-3 mr-1" /> Lógica de Negocio
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-700 shadow-xl">
            <p className="text-sm uppercase tracking-wider text-gray-400">Uptime Garantizado</p>
            <p className="text-2xl lg:text-3xl font-bold text-white mt-1">{metrics.uptime}%</p>
            <p className="text-xs text-cyan-400 mt-1 flex items-center">
              <RefreshCw className="w-3 h-3 mr-1" /> Arquitectura Estable
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="p-6 rounded-xl bg-slate-900 border border-fuchsia-700/50 shadow-2xl">
            <p className="text-sm font-bold tracking-widest text-fuchsia-500 mb-3">CONSOLA DE EVENTOS (AUTOMATIZACIÓN)</p>
            <div className="h-48 overflow-y-hidden text-xs space-y-1">
              {log.map((entry, i) => (
                <p key={i} className={`font-mono ${entry && i === log.length - 1 ? "text-white font-semibold animate-pulse-slow" : "text-gray-400"}`}>
                  {entry}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

