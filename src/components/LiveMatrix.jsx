import React, { useEffect, useRef } from "react";

export default function LiveMatrix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(Math.ceil(canvas.width / 10)).fill(0);

    function draw() {
      ctx.fillStyle = "rgba(15,15,20,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00F5A0";

      letters.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = index * 10;
        ctx.fillText(text, x, y);
        letters[index] = y > canvas.height + Math.random() * 1e4 ? 0 : y + 10;
      });
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none"
    />
  );
}
