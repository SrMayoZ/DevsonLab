import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypeLogo() {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "Labs";

  useEffect(() => {
    let i = 0;
    setText(""); // aseguramos reinicio limpio
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 220); // velocidad typing
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <motion.a
      href="#hero"
      whileHover={{ scale: 1.05 }}
      className="flex items-center text-2xl font-extrabold tracking-tight select-none"
    >
      <span className="text-cyan-400">Devson</span>
      <span className="text-fuchsia-400 ml-1">{text}</span>
      <span
        className={`text-fuchsia-300 ml-[2px] ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        ▌
      </span>
    </motion.a>
  );
}
