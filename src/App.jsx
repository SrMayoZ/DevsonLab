import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Footer from "./components/Footer";

import Audiences from "./sections/Audiences";
import Metrics from "./sections/Metrics";
import Experience from "./sections/Experience";
import DevsonRadar from "./sections/DevsonRadar";
import Authority from "./sections/Authority";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0f0f14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Audiences />
      <section className="bg-slate-800/40 py-28 border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Nuestra única métrica es tu <span className="italic">Retorno de Inversión (ROI)</span>.
            </h2>
            <p className="mt-4 text-lg text-gray-300 italic">
              “Dominamos tanto la ingeniería (automatización, seguridad, backend) como la lógica de negocio (ROI, suscripciones, monetización). Te vendemos un futuro financiero, no solo código.”
            </p>
          </div>
        </div>
      </section>
      <Metrics />
      <Experience />
      <DevsonRadar />
      <Authority />
      <Services />
      <Footer />
    </div>
  );
}
