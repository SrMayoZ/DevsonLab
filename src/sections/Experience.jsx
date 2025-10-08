import React, { useEffect, useRef, useState } from "react";
import { Aperture, DollarSign, RefreshCw, HardHat, Code, Globe, Activity, Check, Rocket } from "lucide-react";

/** 1) AI System Console */
const AISystemConsole = () => {
  const [log, setLog] = useState([]);
  const ref = useRef(null);
  const full = [
    "[IA-01] Analizando patrones de comportamiento del usuario...",
    "[IA-02] Optimizando embudo de conversión: +0.05% de eficiencia.",
    "[IA-03] Identificando cuellos de botella en la API: Latencia 8ms.",
    "[IA-04] Ejecutando modelo predictivo financiero (Q4).",
    "[IA-05] Generando resumen de sentimiento de cliente (NLP: Positivo 89%).",
    "[IA-06] Iniciando proceso de depuración automática de datos obsoletos.",
    "[IA-07] IA Core: Sincronización de base de conocimiento completada.",
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
    }, 3000);
    return () => clearInterval(it);
  }, []);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [log]);

  return (
    <div className="p-6 bg-slate-900/80 border border-fuchsia-700/50 rounded-xl shadow-2xl">
      <h3 className="text-lg font-bold text-fuchsia-500 mb-3 flex items-center">
        <Aperture className="w-5 h-5 mr-2" /> AI SYSTEM CONSOLE (Análisis Predictivo)
      </h3>
      <div ref={ref} className="h-32 overflow-y-scroll text-xs font-mono text-green-400 bg-slate-900 p-2 rounded-lg scrollbar-hide">
        {log.map((e, i) => (
          <p key={i} className={e && i === log.length - 1 ? "text-cyan-400 animate-pulse-slow" : "text-gray-400"}>
            {e}
          </p>
        ))}
        <span className="text-green-500 animate-pulse">_</span>
      </div>
    </div>
  );
};

/** 2) ROI Engine */
const ROIEngine = () => {
  const [saved, setSaved] = useState(5000);
  useEffect(() => {
    const it = setInterval(() => setSaved((p) => p + Math.floor(Math.random() * 5 + 1)), 100);
    return () => clearInterval(it);
  }, []);
  return (
    <div className="p-6 bg-slate-900/80 border border-cyan-700/50 rounded-xl shadow-2xl text-center">
      <h3 className="text-lg font-bold text-cyan-500 mb-3 flex items-center justify-center">
        <DollarSign className="w-5 h-5 mr-2" /> ROI ENGINE (Retorno Acumulado)
      </h3>
      <p className="text-4xl sm:text-5xl font-extrabold text-white leading-none">$ {saved.toLocaleString("es-MX")}</p>
      <p className="mt-2 text-sm text-gray-400">dólares recuperados por automatización de procesos.</p>
    </div>
  );
};

/** 3) Security Scanner (con fix robusto) */
const SecurityScanner = () => {
  const [log, setLog] = useState(["Scanning core systems...", "Checking JWT integrity...", "Firewall ruleset verification..."]);
  const [status, setStatus] = useState("Scanning...");
  const scannerRef = useRef(null);
  const steps = [
    { text: "Scanning ports..." },
    { text: "Encrypting data flow..." },
    { text: "Firewall integrity: 100% OK" },
    { text: "Anomaly detection: None" },
    { text: "Access control list: Verified" },
  ];
  const stepRef = useRef(0);

  useEffect(() => {
    let interval;
    const run = () => {
      stepRef.current = 0;
      interval = setInterval(() => {
        const s = stepRef.current;
        if (s >= steps.length) {
          clearInterval(interval);
          setStatus("Devson Secure v1.0: STABLE");
          setTimeout(() => {
            setLog(["Scan complete. Starting new cycle in 10s..."]);
            setStatus("Scanning...");
            run();
          }, 10000);
          return;
        }
        const current = steps[s];
        setLog((p) => {
          const n = [...p];
          if (n.length > 5) n.shift();
          return [...n, current.text];
        });
        stepRef.current += 1;
      }, 1500);
    };
    run();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scannerRef.current) scannerRef.current.scrollTop = scannerRef.current.scrollHeight;
  }, [log]);

  const cls = status.includes("STABLE") ? "text-green-400" : "text-yellow-400 animate-pulse";

  return (
    <div className="p-6 bg-slate-900/80 border border-red-700/50 rounded-xl shadow-2xl">
      <h3 className="text-lg font-bold text-red-500 mb-3 flex items-center">
        <HardHat className="w-5 h-5 mr-2" /> SECURITY SCANNER (Pentest Activo)
      </h3>
      <div ref={scannerRef} className="h-32 overflow-y-scroll text-xs font-mono text-gray-400 bg-slate-900 p-2 rounded-lg scrollbar-hide">
        {log.map((e, i) => (
          <p key={i} className={`font-mono ${e && (e.includes("OK") || e.includes("Verified")) ? "text-green-400" : e?.includes("Scanning") ? "text-yellow-400" : "text-gray-400"}`}>
            {e}
          </p>
        ))}
        <p className={`mt-2 font-bold ${cls}`}>{status}</p>
      </div>
    </div>
  );
};

/** 4) API Integrations Map */
const APIIntegrationsMap = () => {
  const nodes = [
    { name: "NOTION", x: 20, y: 30, color: "#D946EF" },
    { name: "SHEETS", x: 80, y: 30, color: "#06B6D4" },
    { name: "STRIPE", x: 50, y: 75, color: "#FBBF24" },
  ];
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const it = setInterval(() => setPulse((p) => !p), 1500);
    return () => clearInterval(it);
  }, []);
  const Line = ({ x1, y1, x2, y2, color, isPulsing }) => (
    <line x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} stroke={color} strokeWidth="1" className={isPulsing ? "animate-ping-slow" : ""} />
  );
  return (
    <div className="p-6 bg-slate-900/80 border border-cyan-700/50 rounded-xl shadow-2xl">
      <h3 className="text-lg font-bold text-cyan-500 mb-3 flex items-center">
        <Code className="w-5 h-5 mr-2" /> API INTEGRATIONS MAP (Flujo de Datos)
      </h3>
      <svg viewBox="0 0 100 100" className="w-full h-40">
        <Line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} color={nodes[0].color} isPulsing={pulse} />
        <Line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[2].x} y2={nodes[2].y} color={nodes[1].color} isPulsing={!pulse} />
        <Line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[2].x} y2={nodes[2].y} color={nodes[2].color} isPulsing={pulse} />
        {nodes.map((n) => (
          <g key={n.name}>
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r="3" fill={n.color} className={`shadow-lg ring-4 ring-offset-2 ring-offset-slate-900 ${pulse ? "" : "animate-pulse"}`} />
            <text x={`${n.x}%`} y={`${n.y + 7}%`} textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">
              {n.name}
            </text>
          </g>
        ))}
      </svg>
      <p className="text-xs text-gray-400 mt-2 text-center">NOTION ↔ SHEETS ↔ STRIPE ↔ DEVSON BACKEND</p>
    </div>
  );
};

/** 5) Launch Simulator */
const LaunchSimulator = () => {
  const [isDeployed, setIsDeployed] = useState(false);
  const [deployLog, setDeployLog] = useState([]);
  const [buttonText, setButtonText] = useState("Ejecutar Sistema Devson");
  const [isLoading, setIsLoading] = useState(false);
  const steps = [
    "[DEPLOY] Compilando módulos de automatización...",
    "[STATUS] Verificando tokens de autenticación...",
    "[STATUS] API Gateway conectada al Backend...",
    "[STATUS] Balanceador de carga activado (Latencia Óptima)...",
    "[READY] Sistema Devson Labs desplegado con éxito 🚀",
  ];
  const start = () => {
    if (isLoading) return;
    setIsDeployed(false);
    setIsLoading(true);
    setButtonText("Iniciando Despliegue...");
    setDeployLog([]);
    let i = 0;
    const it = setInterval(() => {
      if (i < steps.length) {
        setDeployLog((p) => [...p, steps[i]]);
        setButtonText(steps[i].split("]")[0].replace("[", "") + "...");
        i++;
      } else {
        clearInterval(it);
        setButtonText("Sistema Activo (Devson Ready)");
        setIsLoading(false);
        setIsDeployed(true);
      }
    }, 800);
  };
  return (
    <div className="p-6 bg-slate-900/80 border border-fuchsia-700/50 rounded-xl shadow-2xl">
      <h3 className="text-lg font-bold text-fuchsia-500 mb-3 flex items-center">
        <Rocket className="w-5 h-5 mr-2" /> LAUNCH SIMULATOR (Deploy Live)
      </h3>
      <div className="h-28 overflow-y-scroll text-xs font-mono text-gray-400 bg-slate-900 p-2 rounded-lg mb-4">
        {deployLog.map((e, i) => (
          <p key={i} className={`font-mono ${e && e.includes("READY") ? "text-green-400 font-semibold" : "text-cyan-400"}`}>{e}</p>
        ))}
        {isLoading && <span className="text-green-500 animate-pulse">|</span>}
      </div>
      <button
        onClick={start}
        disabled={isLoading}
        className={`w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold transition ${
          isLoading ? "bg-slate-700 text-gray-400 cursor-not-allowed" : isDeployed ? "bg-green-500 text-slate-900 hover:bg-green-400 shadow-lg" : "bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-xl"
        }`}
      >
        {isLoading ? <span className="flex items-center"><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> {buttonText}</span> : <span className="flex items-center">{isDeployed ? <Check className="w-5 h-5 mr-2" /> : <Rocket className="w-5 h-5 mr-2" />} {buttonText}</span>}
      </button>
    </div>
  );
};

/** 6) AIDiagnostic */
const AIDiagnostic = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const questions = [
    { id: "tools", text: "¿Cuántas herramientas de terceros usas para operar (Suscripciones, CRM, Analytics)?", options: [{ label: "1-3 (Controlado)", value: 10 }, { label: "4-6 (Disperso)", value: 5 }, { label: "+7 (Caótico)", value: 0 }] },
    { id: "uptime", text: "¿Tu sistema de negocio opera 24/7 sin intervención manual?", options: [{ label: "Sí, totalmente automático", value: 15 }, { label: "Parcialmente (50% manual)", value: 8 }, { label: "No, depende de mi equipo", value: 0 }] },
    { id: "security", text: "¿Cuentas con un sistema de autenticación avanzado (JWT, 2FA) y auditorías regulares?", options: [{ label: "Sí, blindaje total", value: 10 }, { label: "Solo básico (contraseña)", value: 5 }, { label: "No estoy seguro/a", value: 0 }] },
    { id: "roi", text: "¿Puedes calcular tu ROI con precisión en tiempo real?", options: [{ label: "Sí, con dashboard centralizado", value: 15 }, { label: "Solo con reportes manuales", value: 8 }, { label: "No, es estimado", value: 0 }] },
  ];
  const onAnswer = (id, v) => {
    const nxt = { ...answers, [id]: v };
    setAnswers(nxt);
    if (step < questions.length - 1) setStep(step + 1);
    else {
      const total = Object.values(nxt).reduce((s, x) => s + x, 0);
      let level;
      if (total >= 40) level = { status: "ESCALABLE (Sistema Sólido)", color: "text-green-400", description: "Base fuerte. Vamos por optimización de alto rendimiento e IA." };
      else if (total >= 20) level = { status: "AUTOMATIZABLE (Potencial de Crecimiento)", color: "text-yellow-400", description: "Hay potencial, pero la dependencia manual cuesta. Centralicemos y automatizamos." };
      else level = { status: "CRÍTICO (Riesgo Inminente)", color: "text-red-400", description: "Operación vulnerable. Auditoría inmediata y Secure para construir futuro." };
      setResult({ score: total, level });
    }
  };
  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };
  const q = questions[step];
  return (
    <div className="p-6 bg-slate-900/80 border border-fuchsia-700/50 rounded-xl shadow-2xl">
      <h3 className="text-lg font-bold text-fuchsia-500 mb-4 flex items-center"><Activity className="w-5 h-5 mr-2" /> DIAGNÓSTICO AI (Madurez Digital)</h3>
      {!result ? (
        <div>
          <p className="text-sm text-gray-300 mb-4">Paso {step + 1} de {questions.length}:</p>
          <p className="text-lg font-semibold text-white mb-4">{q.text}</p>
          <div className="space-y-3">
            {q.options.map((op, i) => (
              <button key={i} onClick={() => onAnswer(q.id, op.value)} className="w-full text-left px-4 py-3 bg-slate-700/50 text-cyan-400 rounded-lg hover:bg-cyan-700/30 transition">
                {op.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-bold text-gray-300 mb-2">Tu Nivel de Madurez Devson es:</p>
          <p className={`text-4xl font-extrabold ${result.level.color} animate-pulse-slow`}>{result.level.status}</p>
          <p className="text-sm italic text-gray-400 mt-4">{result.level.description}</p>
          <button onClick={reset} className="mt-6 w-full py-2 bg-fuchsia-500 text-slate-900 font-semibold rounded-full hover:bg-fuchsia-400 transition">
            Re-evaluar Sistema
          </button>
          <p className="mt-4 text-xs text-gray-500">Resultado AI: {result.score} puntos.</p>
        </div>
      )}
    </div>
  );
};

/** 7) Devson Radar */
const DevsonRadar = () => {
  const active = [
    { id: 1, x: 20, y: 70, color: "red", label: "Mexico (E-commerce)" },
    { id: 2, x: 70, y: 40, color: "cyan", label: "España (SaaS)" },
    { id: 3, x: 40, y: 30, color: "fuchsia", label: "Canadá (Agencia)" },
    { id: 4, x: 85, y: 80, color: "yellow", label: "Colombia (Coaching)" },
  ];
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const it = setInterval(() => setPulse((p) => !p), 1000);
    return () => clearInterval(it);
  }, []);
  const World = () => <path fill="#2D3748" stroke="#104A67" strokeWidth="0.5" d="M 50 10 C 20 10, 5 30, 5 50 C 5 70, 20 90, 50 90 C 80 90, 95 70, 95 50 C 95 30, 80 10, 50 10 Z M 20 50 L 80 50 M 50 10 L 50 90 M 15 40 L 85 40 M 15 60 L 85 60"/>;
  return (
    <div className="p-6 bg-slate-900/80 border border-cyan-700/50 rounded-xl shadow-2xl">
      <h3 className="text-lg font-bold text-cyan-500 mb-3 flex items-center"><Globe className="w-5 h-5 mr-2" /> DEVSON RADAR (Actividad Global)</h3>
      <svg viewBox="0 0 100 100" className="w-full h-40">
        <World />
        {active.map((s) => (
          <circle key={s.id} cx={`${s.x}%`} cy={`${s.y}%`} r="1.5" fill={s.color} className={`transition-all duration-1000 ${pulse ? "opacity-100 ring-2 ring-offset-2 ring-offset-slate-900" : "opacity-70"}`}>
            <title>{s.label}</title>
          </circle>
        ))}
      </svg>
      <p className="text-xs text-gray-400 mt-2 text-center">Sistemas activos en 4 continentes. Ingeniería sin fronteras.</p>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-28 bg-slate-900/50 border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">EXPERIENCIA DEVSON: El Laboratorio Activo</h2>
        <p className="text-lg text-fuchsia-400 mb-12 text-center max-w-2xl mx-auto">
          Demostraciones en vivo de nuestra ingeniería en AI, Seguridad, Automatización y Crecimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AISystemConsole />
          <ROIEngine />
          <SecurityScanner />
          <APIIntegrationsMap />
          <div className="md:col-span-1"><LaunchSimulator /></div>
          <AIDiagnostic />
        </div>

        <div className="mt-8"><DevsonRadar /></div>
      </div>
    </section>
  );
}

