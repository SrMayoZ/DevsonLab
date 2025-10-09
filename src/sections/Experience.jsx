import React, { useEffect, useRef, useState } from "react";
import {
  Aperture,
  DollarSign,
  RefreshCw,
  HardHat,
  Code,
  Activity,
  Check,
  Rocket,
} from "lucide-react";

/* === 1. AI SYSTEM CONSOLE === */
const AISystemConsole = () => {
  const [log, setLog] = useState([]);
  const ref = useRef(null);
  const full = [
    "[AI-01] Analizando patrones de comportamiento del usuario...",
    "[AI-02] Optimizando embudo de conversión: +0.05% eficiencia.",
    "[AI-03] Identificando cuellos de botella en la API (latencia 8ms).",
    "[AI-04] Ejecutando modelo predictivo financiero (Q4).",
    "[AI-05] Sentiment Analysis → Positivo (89%).",
    "[AI-06] Depuración automática de datos obsoletos completada.",
    "[AI-07] Sincronización de base de conocimiento: OK.",
  ];
  useEffect(() => {
    let i = 0;
    const it = setInterval(() => {
      const next = full[i % full.length];
      setLog((p) => {
        const n = [...p];
        if (n.length > 5) n.shift();
        return [...n, next];
      });
      i++;
    }, 2500);
    return () => clearInterval(it);
  }, []);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [log]);

  return (
    <div className="p-6 bg-slate-950/80 border border-devson-secondary/40 rounded-xl shadow-lg min-h-[250px] flex flex-col">
      <h3 className="text-lg font-bold text-devson-primary mb-3 flex items-center">
        <Aperture className="w-5 h-5 mr-2" /> AI SYSTEM CONSOLE
      </h3>
      <div
        ref={ref}
        className="flex-1 overflow-y-auto text-xs font-mono text-devson-secondary bg-slate-900/70 p-3 rounded-lg scrollbar-hide"
      >
        {log.map((e, i) => (
          <p
            key={i}
            className={
              i === log.length - 1
                ? "text-devson-primary animate-pulse"
                : "text-gray-400"
            }
          >
            {e}
          </p>
        ))}
        <span className="text-devson-primary animate-pulse">▌</span>
      </div>
    </div>
  );
};

/* === 2. ROI ENGINE === */
const ROIEngine = () => {
  const [saved, setSaved] = useState(5000);
  useEffect(() => {
    const it = setInterval(
      () => setSaved((p) => p + Math.floor(Math.random() * 4 + 1)),
      120
    );
    return () => clearInterval(it);
  }, []);
  return (
    <div className="p-6 bg-slate-950/80 border border-devson-primary/40 rounded-xl shadow-lg text-center min-h-[250px] flex flex-col justify-between">
      <h3 className="text-lg font-bold text-devson-primary mb-3 flex items-center justify-center">
        <DollarSign className="w-5 h-5 mr-2" /> ROI ENGINE
      </h3>
      <p className="text-4xl font-extrabold text-white leading-none">
        $ {saved.toLocaleString("es-MX")}
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Retorno acumulado generado por automatización.
      </p>
    </div>
  );
};

/* === 3. SECURITY SCANNER === */
const SecurityScanner = () => {
  const [log, setLog] = useState(["Inicializando escaneo..."]);
  const [status, setStatus] = useState("Scanning...");
  const ref = useRef(null);
  const steps = [
    "Checking JWT integrity...",
    "Encrypting data flow...",
    "Firewall integrity: OK",
    "Anomaly detection: None",
    "Access control verified.",
  ];
  const idx = useRef(0);
  useEffect(() => {
    const run = () => {
      idx.current = 0;
      const it = setInterval(() => {
        if (idx.current >= steps.length) {
          clearInterval(it);
          setStatus("✅ Devson Secure v1.0: STABLE");
          setTimeout(run, 8000);
          return;
        }
        const s = steps[idx.current];
        setLog((p) => [...p.slice(-4), s]);
        idx.current++;
      }, 1200);
    };
    run();
  }, []);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [log]);
  return (
    <div className="p-6 bg-slate-950/80 border border-red-500/30 rounded-xl shadow-lg min-h-[250px] flex flex-col">
      <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center">
        <HardHat className="w-5 h-5 mr-2" /> SECURITY SCANNER
      </h3>
      <div
        ref={ref}
        className="flex-1 overflow-y-auto text-xs font-mono bg-slate-900/70 p-3 rounded-lg text-gray-300"
      >
        {log.map((e, i) => (
          <p
            key={i}
            className={`${
              e.includes("OK") || e.includes("verified")
                ? "text-green-400"
                : "text-gray-400"
            }`}
          >
            {e}
          </p>
        ))}
        <p
          className={`mt-2 text-sm font-semibold ${
            status.includes("STABLE")
              ? "text-green-400"
              : "text-yellow-400 animate-pulse"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

/* === 4. API INTEGRATIONS MAP (Rediseñado estilo radar IA) === */
const APIIntegrationsMap = () => {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const it = setInterval(() => setPulse((p) => !p), 1500);
    return () => clearInterval(it);
  }, []);

  const nodes = [
    { name: "NOTION", x: 25, y: 40, color: "#00FFC6" },
    { name: "SHEETS", x: 75, y: 40, color: "#00B3FF" },
    { name: "STRIPE", x: 50, y: 70, color: "#9EFF00" },
  ];

  return (
    <div className="p-6 bg-slate-950/80 border border-devson-secondary/40 rounded-xl shadow-lg min-h-[250px] flex flex-col">
      <h3 className="text-lg font-bold text-devson-secondary mb-3 flex items-center">
        <Code className="w-5 h-5 mr-2" /> DATA NETWORK MAP
      </h3>
      <div className="flex-1 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-40">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#0D9488"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="#00B3FF"
            strokeWidth="0.3"
            fill="none"
            opacity="0.6"
          />
          {nodes.map((n, i) => (
            <g key={i}>
              <circle
                cx={`${n.x}%`}
                cy={`${n.y}%`}
                r="2.5"
                fill={n.color}
                className={`transition-all duration-500 ${
                  pulse ? "opacity-100 scale-125" : "opacity-70 scale-100"
                }`}
              />
              <text
                x={`${n.x}%`}
                y={`${n.y + 6}%`}
                textAnchor="middle"
                fill="white"
                fontSize="4"
                fontWeight="bold"
              >
                {n.name}
              </text>
              <line
                x1="50%"
                y1="50%"
                x2={`${n.x}%`}
                y2={`${n.y}%`}
                stroke={n.color}
                strokeWidth="0.5"
                opacity="0.7"
              />
            </g>
          ))}
        </svg>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">
        Core IA conectado: Notion ↔ Sheets ↔ Stripe ↔ Devson Backend
      </p>
    </div>
  );
};

/* === 5. LAUNCH SIMULATOR === */
const LaunchSimulator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [deployLog, setDeployLog] = useState([]);
  const steps = [
    "[DEPLOY] Compilando módulos...",
    "[STATUS] Conectando Gateway...",
    "[STATUS] Balanceador de carga activo...",
    "[READY] Sistema Devson Labs desplegado 🚀",
  ];
  const start = () => {
    if (isLoading) return;
    setIsLoading(true);
    setDeployLog([]);
    let i = 0;
    const it = setInterval(() => {
      if (i < steps.length) {
        setDeployLog((p) => [...p, steps[i]]);
        i++;
      } else {
        clearInterval(it);
        setIsLoading(false);
      }
    }, 900);
  };
  return (
    <div className="p-6 bg-slate-950/80 border border-devson-primary/40 rounded-xl shadow-lg min-h-[250px] flex flex-col justify-between">
      <h3 className="text-lg font-bold text-devson-primary mb-3 flex items-center">
        <Rocket className="w-5 h-5 mr-2" /> LAUNCH SIMULATOR
      </h3>
      <div className="flex-1 overflow-y-auto text-xs font-mono text-gray-300 bg-slate-900/70 p-3 rounded-lg mb-4">
        {deployLog.map((e, i) => (
          <p
            key={i}
            className={`${
              e.includes("READY")
                ? "text-green-400 font-semibold"
                : "text-devson-secondary"
            }`}
          >
            {e}
          </p>
        ))}
      </div>
      <button
        onClick={start}
        disabled={isLoading}
        className={`w-full py-3 rounded-lg font-bold text-slate-900 transition ${
          isLoading
            ? "bg-slate-700 text-gray-400 cursor-wait"
            : "bg-devson-primary hover:bg-devson-secondary shadow-md"
        }`}
      >
        {isLoading ? "Desplegando..." : "Ejecutar Sistema Devson"}
      </button>
    </div>
  );
};

/* === 6. AI DIAGNOSTIC === */
const AIDiagnostic = () => {
  const [result, setResult] = useState(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!result) {
      const i = setInterval(() => setProgress((p) => (p < 100 ? p + 2 : 100)), 60);
      return () => clearInterval(i);
    }
  }, [result]);
  return (
    <div className="p-6 bg-slate-950/80 border border-devson-secondary/40 rounded-xl shadow-lg min-h-[250px] flex flex-col justify-between">
      <h3 className="text-lg font-bold text-devson-secondary mb-3 flex items-center">
        <Activity className="w-5 h-5 mr-2" /> AI DIAGNOSTIC
      </h3>
      {!result ? (
        <>
          <p className="text-sm text-gray-400 mb-2">Analizando tu infraestructura...</p>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-devson-primary to-devson-secondary transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {progress >= 100 && (
            <button
              onClick={() =>
                setResult({
                  status: "AUTOMATIZABLE",
                  color: "text-green-400",
                  msg: "Sistema con alto potencial de IA aplicada.",
                })
              }
              className="mt-auto py-2 bg-devson-primary text-slate-900 font-semibold rounded-lg hover:bg-devson-secondary transition"
            >
              Ver Resultado
            </button>
          )}
        </>
      ) : (
        <div className="text-center">
          <p className={`text-3xl font-extrabold ${result.color}`}>
            {result.status}
          </p>
          <p className="text-sm text-gray-400 mt-2">{result.msg}</p>
        </div>
      )}
    </div>
  );
};

/* === MAIN SECTION === */
export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-28 bg-slate-900/50 border-b border-cyan-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          SYSTEM CORE METRICS
        </h2>
        <p className="text-lg text-devson-primary mb-12 text-center max-w-2xl mx-auto">
          Núcleo activo de IA, seguridad, automatización y despliegue en vivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AISystemConsole />
          <ROIEngine />
          <SecurityScanner />
          <APIIntegrationsMap />
          <LaunchSimulator />
          <AIDiagnostic />
        </div>
      </div>
    </section>
  );
}
