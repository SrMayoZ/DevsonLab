import React, { useEffect, useRef, useState } from "react";

export default function DevsonConsole({ mode = "cyber" }) {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [logs, setLogs] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const containerRef = useRef(null);
  const queueRef = useRef([]);
  const typingRef = useRef(false);

  // --- Logs base ---
  const cyberLogs = [
    "[SYSTEM] **ALERT**: Unauthorized access attempt on Citadel_Node_01.",
    "[FIREWALL] IP 203.0.113.44 Blacklisted. Origin: SUSPECT/MALWARE.",
    "[SCANNER] Vulnerability Report: Service 'ssh' exposed (CVE-2024-5501).",
    "[WAF] **BLOCK** - Cross-Site Scripting (XSS) neutralized on /api/login.",
    "[ENCRYPT] Secure Channel 1-7 re-established (Key rotation complete).",
    "[LOG] Analyst-4 initiated full system integrity check (Code: ALPHA-7).",
    "[IDS] Heuristic match: 'EternalBlue' payload pattern detected. Isolated.",
    "[GEO-LOC] High-risk inbound traffic detected from AS30781 (HOSTILE).",
    "[SIEM] Threat Level raised to **DELTA**. All systems to DEFCON 3.",
    "[NETMON] Data exfiltration attempt halted. Payload: 0 bytes transferred.",
    "[AUDIT] Access granted: Cpt. John 'Ghost' MacTavish (Clearance Lvl 5).",
    "[DEFENSE] Automated counter-response protocol executed. Status: SUCCESS.",
    "[MEMORY] Rogue process PID 512 terminated. Memory scrub in progress.",
    "[TLOG] Decryption failure: Mismatched MAC. Packet dropped/logged.",
    "[ASSET] Critical Asset #A-38 quarantined. **Action Required**.",
    "[NETWORK] Backdoor payload neutralized by ElevenSec Core Agent.",
    "[SYSTEM] Console initialized. Awaiting orders...",
    "[STATUS] ElevenSec Defense Node: **ONLINE** | Integrity: 100%",
  ];

  const aiLogs = [
    "[09:12:43] Agent#3 training weights... ✅",
    "[09:13:22] Neural bridge connected (36ms)",
    "[09:15:33] Synapse link recalibrated (ΔLoss: 0.002)",
    "[09:17:25] Neural drift corrected – coherence 98.3%",
    "[09:19:44] Quantum inference active: 300 req/s 🚀",
    "[09:22:48] DeepScan analyzing traffic anomalies...",
    "[09:25:22] Reinforcement feedback loop optimized.",
    "[09:27:50] Vector embeddings refreshed (32k tokens)",
    "[09:30:41] Neuron cluster 4A stabilized ✅",
    "[09:33:45] Gradient checkpoint pruning saved 2.1GB VRAM",
    "[09:36:04] Cognitive mirror alignment recalibrated.",
    "[09:39:13] Emotional bias module tuned for neutrality.",
    "[09:47:31] Recurrent loop stability test passed ✅",
    "[09:55:36] Multi-agent negotiation protocol engaged 🤝",
    "[10:10:09] Consciousness stable — no drift detected 🧠",
  ];

  // --- sonido corto digital
  function beep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 400 + Math.random() * 80;
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {}
  }

  // --- Añadir logs a la cola
  useEffect(() => {
    const source = mode === "cyber" ? cyberLogs : aiLogs;
    const interval = setInterval(() => {
      const random = source[Math.floor(Math.random() * source.length)];
      queueRef.current.push(random);
    }, 2500 + Math.random() * 1500);
    return () => clearInterval(interval);
  }, [mode]);

  // --- Typing engine continuo
  useEffect(() => {
    let active = true;

    async function typeWriter() {
      if (typingRef.current || queueRef.current.length === 0) return;
      typingRef.current = true;

      const next = queueRef.current.shift();
      setCurrentLine(""); // limpiar línea actual
      beep();

      for (let i = 0; i < next.length && active; i++) {
        setCurrentLine(next.slice(0, i + 1));
        const isFastChar = /[\s\d\[\]\(\)\-\_]/g.test(next[i]);
        const delay = isFastChar
          ? 8 + Math.random() * 10
          : 20 + Math.random() * 35;
        await new Promise((r) => setTimeout(r, delay));
      }

      // línea completada
      setLogs((prev) => {
        const updated = [...prev, next];
        return updated.slice(-15);
      });
      setCurrentLine("");
      typingRef.current = false;
    }

    const loop = setInterval(typeWriter, 400);
    return () => {
      active = false;
      clearInterval(loop);
    };
  }, []);

  // --- Scroll automático
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, currentLine]);

  // --- Cursor parpadeante
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-3 rounded-xl backdrop-blur-md border border-cyan-700/40 shadow-2xl
      overflow-y-auto overflow-x-hidden h-[280px] md:h-[320px]
      font-mono text-xs text-cyan-300 bg-[rgba(0,15,25,0.8)]
      relative leading-relaxed select-none text-left"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,255,255,0.08) 1px, transparent 0)",
        backgroundSize: "38px 38px",
      }}
    >
      {/* Líneas anteriores */}
      {logs.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          <span
            dangerouslySetInnerHTML={{
              __html: line.replace(
                /\*\*(.*?)\*\*/g,
                '<span class="text-red-400 font-bold">$1</span>'
              ),
            }}
          />
        </div>
      ))}

      {/* Línea activa con cursor al final */}
      <div className="flex items-center whitespace-pre-wrap">
        <span
          dangerouslySetInnerHTML={{
            __html: currentLine.replace(
              /\*\*(.*?)\*\*/g,
              '<span class="text-red-400 font-bold">$1</span>'
            ),
          }}
        />
        <span
          className={`ml-[2px] ${
            cursorVisible ? "opacity-100" : "opacity-0"
          } text-cyan-400`}
        >
          ▌
        </span>
      </div>

      {/* Gradiente inferior visual */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none"></div>
    </div>
  );
}
