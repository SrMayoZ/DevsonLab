import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TypeLogo from "./TypeLogo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Framework", href: "#framework" },
    { label: "Servicios", href: "#services" },
    { label: "Autoridad", href: "#authority" },
    { label: "Contacto", href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-cyan-900/30 shadow-lg shadow-cyan-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <TypeLogo />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 group">
        {navItems.map((item, i) => (
            <motion.a
            key={i}
            href={item.href}
            whileHover={{ scale: 1.05 }}
            className="relative text-sm font-medium text-gray-300 hover:text-devson-primary transition-colors"
            >
            {item.label}
            {/* Línea brillante IA */}
            <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r 
                from-devson-primary via-devson-secondary to-devson-primary 
                transition-all duration-300 group-hover:w-full"
            ></span>
            </motion.a>
        ))}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950/95 border-t border-cyan-900/30 backdrop-blur-md px-6 py-4 space-y-4"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-devson-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
