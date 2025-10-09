/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Nueva paleta "Neural Defense"
        devson: {
          primary: "#00FFC6", // verde cian IA
          secondary: "#00B3FF", // azul IA
          accent: "#9EFF00", // radar
          dark: "#0C0F16", // fondo base
          alert: "#FF3D5A", // urgencia
        },
      },
      boxShadow: {
        "neural": "0 0 20px rgba(0,255,198,0.3)",
        "neural-strong": "0 0 35px rgba(0,179,255,0.4)",
      },
    },
  },
  plugins: [],
};
