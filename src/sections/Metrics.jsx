import React, { useEffect, useState } from "react";
import { TrendingUp, RefreshCw, Lock, DollarSign, Shield } from "lucide-react";

export default function Metrics() {
  const [metrics, setMetrics] = useState({
    traffic: 5800,
    conversion: 2.1,
    securityStatus: "Sistema Protegido",
    uptime: 99.99,
  });

  const [log, setLog] = useState([
    "INIT: Devson Core v1.0 inicializado.",
    "DB: Conexión Firestore asegurada.",
  ]);

  useEffect(() => {
    const events = [
      "API: Stripe sincronizado.",
      "AI: Modelo predictivo optimizado.",
      "SECURITY: Escaneo completado sin incidentes.",
      "AUTOMATION: Script diario ejecutado.",
      "CLOUD: Carga balanceada correctamente.",
    ];

    const it = setInterval(() => {
      setMetrics((prev) => {
        let newStatus = prev.securityStatus;
        const threat = Math.random() < 0.1;

        if (threat) {
          newStatus = "⚠️ AMENAZA DETECTADA";
          setTimeout(() => {
            setMetrics((p) => ({ ...p, securityStatus: "Blindaje Activo" }));
          }, 2000);
        } else if (prev.securityStatus === "Blindaje Activo" && Math.random() < 0.3) {
          newStatus = "Sistema Protegido";
        }

        return {
          ...prev,
          traffic: Math.floor(prev.traffic * (1 + Math.random() * 0.05 - 0.02)),
          conversion: (parseFloat(prev.conversion) + Math.random() * 0.1 - 0.05).toFixed(2),
          securityStatus: newStatus,
        };
      });

      setLog((prev) => {
        const ev = events[Math.floor(Math.random() * events.length)];
        const nl = [...prev, `[${new Date().toLocaleTimeString("es-MX")}] ${ev}`];
        if (nl.length > 8) nl.shift();
        return nl;
      });
    }, 2000);

    return () => clearInterval(it);
  }, []);

  const statusClass = (status) => {
    if (status.includes("AMENAZA"))
      return "text-red-400 bg-red-900/20 ring-1 ring-red-500 animate-pulse-slow";
    if (status.includes("Blindaje"))
      return "text-yellow-400 bg-yellow-900/20 ring-1 ring-yellow-500";
    return "text-green-400 bg-green-900/20 ring-1 ring-green-500";
  };

  return (
    <section className="py-28 bg-slate-950/70 border-y border-cyan-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-cyan-800/50 pb-2">
          <TrendingUp className="w-6 h-6 text-devson-primary" />
          SYSTEM CORE METRICS
        </h2>

        {/* Cuadros de métricas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Tráfico */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg transition-all duration-500">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Tráfico Activo
            </p>
            <p className="text-3xl font-bold text-white mt-1">
              {metrics.traffic.toLocaleString()}
            </p>
            <p className="text-xs text-devson-secondary mt-1 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> Flujo Constante
            </p>
          </div>

          {/* Estado de Defensa */}
          <div
            className={`p-5 rounded-xl border shadow-lg transition-all duration-500 ${statusClass(
              metrics.securityStatus
            )}`}
          >
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Estado de Defensa
            </p>
            <p className="text-xl lg:text-2xl font-bold mt-1">
              {metrics.securityStatus}
            </p>
            <p className="text-xs text-gray-400 mt-1 flex items-center">
              <Shield className="w-3 h-3 mr-1" /> Protección Activa
            </p>
          </div>

          {/* Conversión */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Tasa de Conversión
            </p>
            <p className="text-3xl font-bold text-devson-primary mt-1">
              {metrics.conversion}%
            </p>
            <p className="text-xs text-devson-secondary mt-1 flex items-center">
              <DollarSign className="w-3 h-3 mr-1" /> ROI en Tiempo Real
            </p>
          </div>

          {/* Uptime */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-700 shadow-lg">
            <p className="text-sm uppercase tracking-wider text-gray-400">
              Uptime Garantizado
            </p>
            <p className="text-3xl font-bold text-white mt-1">
              {metrics.uptime}%
            </p>
            <p className="text-xs text-devson-secondary mt-1 flex items-center">
              <RefreshCw className="w-3 h-3 mr-1" /> Estabilidad Óptima
            </p>
          </div>
        </div>

        {/* Consola de eventos */}
        <div className="p-6 rounded-xl bg-slate-900 border border-devson-secondary/40 shadow-lg">
          <p className="text-sm font-bold tracking-widest text-devson-secondary mb-3">
            CONSOLA DE EVENTOS
          </p>
          <div className="h-48 overflow-y-hidden text-xs font-mono space-y-1">
            {log.map((entry, i) => (
              <p
                key={i}
                className={`${
                  i === log.length - 1
                    ? "text-white font-semibold animate-pulse-slow"
                    : "text-gray-400"
                }`}
              >
                {entry}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
