import React from "react";
import LiveMatrix from "./components/LiveMatrix";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0f0f14] text-white overflow-x-hidden">
      <LiveMatrix />
      <div className="relative z-10">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
