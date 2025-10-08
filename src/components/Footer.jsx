import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Shield, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-slate-950 border-t border-cyan-900/40 py-16 text-gray-400"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-extrabold tracking-tight text-cyan-400"
          >
            Devson<span className="text-fuchsia-400">Labs</span>
          </motion.a>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#framework" className="hover:text-cyan-400 transition-colors">
              Framework
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Servicios
            </a>
            <a href="#authority" className="hover:text-cyan-400 transition-colors">
              Autoridad
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contacto
            </a>
          </div>

          {/* Icons */}
          <div className="flex gap-5">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/hectorloustaunau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/in/hectorloustaunau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="mailto:contact@devsonlabs.com"
            >
              <Mail className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-900/30 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Infraestructura Auditada por ElevenSec</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-fuchsia-400" />
            <span>Framework Devson v1.0 • Ingeniería Aplicada al ROI</span>
          </div>
          <p className="text-gray-600 text-xs mt-4 md:mt-0">
            © {new Date().getFullYear()} Devson Labs. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[200px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;
