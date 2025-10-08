import React, { useState, useEffect } from 'react';
import {
  Zap, Settings, DollarSign, Shield, Cpu, Aperture, BookOpen, MessageSquare, Briefcase, Mail, MapPin, Menu, X, Gem, TrendingUp, Lock, RefreshCw, Layers
} from 'lucide-react';

// SVG Logo Devsono
const DevsonoLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <path d="M16 4L28 16L16 28L4 16L16 4Z" stroke="url(#cyanGradient)" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M16 4V28M4 16H28" stroke="url(#cyanGradient)" strokeWidth="1.5" strokeOpacity="0.5"/>
    <path d="M16 4L4 16L16 28" fill="url(#fuchsiaGradient)" fillOpacity="0.2"/>
    <defs>
      <linearGradient id="cyanGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4"/>
        <stop offset="1" stopColor="#0891B2"/>
      </linearGradient>
      <linearGradient id="fuchsiaGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D946EF"/>
        <stop offset="1" stopColor="#9333EA"/>
      </linearGradient>
    </defs>
  </svg>
);

// --- Servicios / Pilares ---
const servicePillars = [
  {
    name: "Sistemas Escalables y SaaS Inteligentes",
    icon: Gem,
    description: "Diseño plataformas web, CRMs y SaaS con arquitectura sólida, seguridad integrada y foco total en el retorno de inversión.",
    categories: [
      { title: "CRMs de Alto Valor", icon: Briefcase, details: "Sistemas internos personalizados con roles, métricas y lógica de negocio adaptada a cada empresa." },
      { title: "SaaS y Suscripciones", icon: Zap, details: "Aplicaciones escalables listas para monetizar: membresías, usuarios premium y pagos automáticos." },
      { title: "Infraestructura Cloud", icon: Aperture, details: "Planificación técnica y despliegue en AWS, Linode o Hetzner con pipelines seguros y estables." },
    ]
  },
  {
    name: "Automatización, Comercio y Finanzas Digitales",
    icon: DollarSign,
    description: "Optimizo procesos, integro pagos y creo ecosistemas digitales que generan ingresos mientras duermes.",
    categories: [
      { title: "Pagos Inteligentes", icon: Cpu, details: "Integraciones con Stripe, PayPal o MercadoPago. Lógica avanzada de planes y renovaciones." },
      { title: "Plataformas de Creadores", icon: MessageSquare, details: "Construcción de portales de monetización tipo OnlyFans/Patreon con analítica y afiliados." },
      { title: "Dashboards de Ingresos", icon: BookOpen, details: "Paneles financieros y reportes automáticos para visualizar tus resultados en tiempo real." },
    ]
  },
  {
    name: "Ciberseguridad, Bots e Inteligencia Artificial",
    icon: Shield,
    description: "Combino seguridad, IA y automatización para crear sistemas autónomos y blindados, con control total de datos.",
    categories: [
      { title: "Automatización API", icon: Cpu, details: "Integraciones con Notion, Google Sheets o Zapier. Bots de tareas, reportes o control remoto." },
      { title: "Pentesting y Seguridad", icon: Shield, details: "Auditorías, detección de vulnerabilidades y control de acceso avanzado por token o IP." },
      { title: "IA Aplicada", icon: Cpu, details: "Integración con OpenAI para asistentes, análisis predictivo o chatbots empresariales." },
    ]
  },
];

// --- Componente de Tarjeta de Servicio ---
const ServiceCard = ({ title, details, Icon }) => (
  <div className="p-6 bg-slate-800/60 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-700/50 hover:border-cyan-400/80 transition duration-300 flex flex-col space-y-3">
    <div className="flex items-center space-x-3">
      <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
      <h4 className="text-xl font-semibold text-white">{title}</h4>
    </div>
    <p className="text-gray-300 text-sm">{details}</p>
  </div>
);

// --- Sección de Pilares ---
const PillarSection = ({ pillar }) => {
  const Icon = pillar.icon;
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start mb-6">
          <Icon className="w-12 h-12 text-cyan-400 mr-4" />
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">{pillar.name}</h2>
            <p className="mt-2 text-xl text-fuchsia-400 max-w-3xl">{pillar.description}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillar.categories.map((service, index) => (
            <ServiceCard key={index} title={service.title} details={service.details} Icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Stack Técnico ---
const TechnicalStackShowcase = () => {
  const technologies = [
    "React.js / Vite (Frontend de Alto Rendimiento)",
    "Firebase / Firestore (Backend en Tiempo Real)",
    "Stripe / MercadoPago (Pagos Globales)",
    "AWS / Hetzner / Linode (Cloud Escalable)",
    "Tailwind CSS / Shadcn (Diseño Modular)",
    "OpenAI API (Integración de IA)",
    "Node.js / Express (Lógica de Servidor)",
    "JWT / OAuth2 (Seguridad y Autenticación)",
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-b border-cyan-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-cyan-600/50 pb-2 flex items-center">
          <Layers className="w-6 h-6 mr-3 text-fuchsia-400"/> Stack de Ingeniería Devsono
        </h2>
        <p className="text-xl text-gray-400 mb-10">Usamos solo herramientas validadas por la industria para proyectos que exigen rendimiento, seguridad y escala global.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((tech, index) => (
            <div key={index} className="px-6 py-3 rounded-full bg-slate-800/80 border border-cyan-700/50 shadow-lg hover:bg-slate-700/90 transition">
              <p className="text-sm font-semibold text-cyan-400">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Componente Principal ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Soluciones", href: "#servicios" },
    { name: "Stack", href: "#stack" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.fontFamily = 'Inter, sans-serif';
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg shadow-xl border-b border-cyan-700/50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-black text-cyan-400 flex items-center">
            <DevsonoLogo /> Dev<span className="text-white">sono</span>
          </a>
          <div className="hidden md:flex space-x-10">
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={(e) => { e.preventDefault(); scrollToSection(item.href.substring(1)); }} className="text-gray-300 hover:text-cyan-400 transition">{item.name}</a>
            ))}
          </div>
          <button onClick={() => scrollToSection('contacto')} className="hidden md:block bg-cyan-400 text-slate-900 px-5 py-2 rounded-full hover:bg-cyan-500 transition font-medium">Solicitar Proyecto</button>
          <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-cyan-700/40 px-4 py-4">
            {navItems.map(item => (
              <a key={item.name} href={item.href} onClick={(e) => { e.preventDefault(); scrollToSection(item.href.substring(1)); }} className="block py-2 text-gray-200 hover:text-cyan-400">{item.name}</a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="text-center pt-24 pb-20 px-6 border-b border-cyan-900/50">
        <h1 className="text-6xl font-extrabold leading-tight text-white">
          Sistemas que <span className="text-cyan-400">automatizan tu crecimiento</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Desarrollo, automatización e inteligencia aplicada. Devsono crea plataformas que generan ingresos, protegen datos y escalan sin fricción.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => scrollToSection('servicios')} className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-cyan-500 transition shadow-lg shadow-cyan-500/30">
            Ver Soluciones
          </button>
          <button onClick={() => scrollToSection('contacto')} className="border border-fuchsia-500 text-fuchsia-300 px-8 py-3 rounded-full font-medium hover:bg-slate-800/40 transition">
            Solicitar Evaluación
          </button>
        </div>
      </section>

      {/* Stack */}
      <div id="stack"><TechnicalStackShowcase /></div>

      {/* Servicios */}
      <div id="servicios" className="pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-4">Soluciones Devsono</h2>
          <p className="text-xl text-fuchsia-400">Sistemas inteligentes diseñados para empresas que piensan en el futuro.</p>
        </div>
        {servicePillars.map((pillar, i) => <PillarSection key={i} pillar={pillar} />)}
      </div>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-slate-900/80 border-t border-cyan-800/50">
        <div className="max-w-xl mx-auto text-center bg-slate-800/70 p-10 rounded-2xl border border-fuchsia-700/50">
          <h2 className="text-4xl font-extrabold text-white mb-4">Agenda tu proyecto con Devsono</h2>
          <p className="text-gray-300 text-lg mb-8">Solo aceptamos proyectos con visión de crecimiento real. Evaluamos tu caso y te damos una propuesta estratégica personalizada.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Tu nombre y cargo" className="w-full px-5 py-3 rounded-lg bg-slate-700/60 text-white border border-transparent focus:ring-2 focus:ring-fuchsia-500"/>
            <input type="email" placeholder="Correo empresarial" className="w-full px-5 py-3 rounded-lg bg-slate-700/60 text-white border border-transparent focus:ring-2 focus:ring-fuchsia-500"/>
            <textarea rows="4" placeholder="Describe brevemente tu proyecto o problema de negocio" className="w-full px-5 py-3 rounded-lg bg-slate-700/60 text-white border border-transparent focus:ring-2 focus:ring-fuchsia-500"></textarea>
            <button type="submit" className="w-full bg-fuchsia-400 text-slate-900 font-medium py-3 rounded-full hover:bg-fuchsia-500 transition shadow-xl shadow-fuchsia-500/40">
              Enviar Solicitud
            </button>
          </form>
          <div className="mt-6 text-gray-400 text-sm">
            <p><Mail className="inline w-4 h-4 mr-1 text-fuchsia-400"/> contact@devsono.com</p>
            <p><MapPin className="inline w-4 h-4 mr-1 text-fuchsia-400"/> Global | Operamos Remoto</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-center text-gray-500 py-6 border-t border-slate-800/50">
        <p>&copy; {new Date().getFullYear()} Devsono Labs — Ingeniería que resuena.</p>
      </footer>
    </div>
  );
};

export default App;
