import React, { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import DevsonConsole from "../components/DevsonConsole";

/** Utilidad: lat/lon → vector 3D sobre esfera */
function latLonToVec3(lat, lon, r = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -r * Math.sin(phi) * Math.cos(theta);
  const z = r * Math.sin(phi) * Math.sin(theta);
  const y = r * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

/** Planeta translúcido con textura y wireframe táctico */
function MilitaryGlobe() {
  const ref = useRef();
  const mapTexture = useLoader(
    THREE.TextureLoader,
    "https://unpkg.com/three-globe/example/img/earth-dark.jpg"
  );

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0008;
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhysicalMaterial
          color={"#0a0f14"}
          metalness={0.1}
          roughness={0.2}
          transmission={0.7}
          thickness={0.5}
          ior={1.1}
          clearcoat={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh scale={[1.001, 1.001, 1.001]}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshBasicMaterial
          map={mapTexture}
          transparent
          opacity={0.25}
          color={"#00d8ff"}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh scale={[1.002, 1.002, 1.002]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color={"#19c2d8"}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

/** Beacon efímero (punto pulsante que nace y muere) */
function Beacon({ lat, lon, color, lifetime = 5 }) {
  const ref = useRef();
  const pos = useMemo(() => latLonToVec3(lat, lon, 1.01), [lat, lon]);
  const start = useRef(Date.now());

  useFrame(({ clock }) => {
    const t = (Date.now() - start.current) / 1000;
    const pulse = 0.015 + Math.abs(Math.sin(clock.elapsedTime * 3)) * 0.018;
    if (ref.current) {
      ref.current.scale.setScalar(pulse * 60);
      ref.current.material.opacity = Math.max(0, 1 - t / lifetime);
    }
  });

  return (
    <mesh position={pos.toArray()} ref={ref}>
      <sphereGeometry args={[0.012, 10, 10]} />
      <meshBasicMaterial color={color} transparent opacity={1} />
    </mesh>
  );
}

/** Gestor de todos los beacons dinámicos */
function BeaconsDynamic() {
  const [beacons, setBeacons] = useState([]);

  useEffect(() => {
    const colors = ["#22d3ee", "#14b8a6", "#06b6d4", "#67e8f9", "#a5f3fc", "#5eead4"];
    const interval = setInterval(() => {
      const lat = (Math.random() - 0.5) * 180;
      const lon = (Math.random() - 0.5) * 360;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const id = Math.random().toString(36).substr(2, 9);
      setBeacons((prev) => [...prev, { id, lat, lon, color }]);
      // eliminar viejos
      setTimeout(() => {
        setBeacons((prev) => prev.filter((b) => b.id !== id));
      }, 6000);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <group>
      {beacons.map((b) => (
        <Beacon key={b.id} {...b} />
      ))}
    </group>
  );
}

/** Paquetes (esferas) viajando por curvas */
function MovingPacket({ curve, color = "#22d3ee", speed = 0.25, offset = 0 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed + offset) % 1;
    const pos = curve.getPointAt(t);
    ref.current.position.copy(pos);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/** Trayectorias aleatorias entre puntos del planeta */
function TrafficDynamic() {
  const [routes, setRoutes] = useState([]);
  const colors = ["#22d3ee", "#67e8f9", "#14b8a6", "#06b6d4", "#5eead4"];

  // genera rutas constantemente
  useEffect(() => {
    const interval = setInterval(() => {
      const from = {
        lat: (Math.random() - 0.5) * 180,
        lon: (Math.random() - 0.5) * 360,
      };
      const to = {
        lat: (Math.random() - 0.5) * 180,
        lon: (Math.random() - 0.5) * 360,
      };
      const color = colors[Math.floor(Math.random() * colors.length)];
      const id = Math.random().toString(36).substr(2, 9);
      setRoutes((prev) => [...prev.slice(-10), { id, from, to, color }]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group>
      {routes.map((r, i) => {
        const start = latLonToVec3(r.from.lat, r.from.lon, 1.01);
        const end = latLonToVec3(r.to.lat, r.to.lon, 1.01);
        const mid = start
          .clone()
          .add(end)
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(1.3);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const points = curve.getPoints(64).map((v) => v.toArray());
        return (
          <group key={r.id}>
            <Line
              points={points}
              color={r.color}
              linewidth={1}
              dashed
              dashSize={0.15}
              gapSize={0.1}
              transparent
              opacity={0.7}
            />
            <MovingPacket curve={curve} color={r.color} speed={0.22} offset={i * 0.1} />
          </group>
        );
      })}
    </group>
  );
}

/** Radar principal */
export default function DevsonRadar() {
  const [mode, setMode] = useState("cyber");

  return (
    <section className="py-16 md:py-24 bg-slate-900/50 border-b border-cyan-900/30 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          DEVSON GLOBAL INTEL RADAR — Satélite Vivo
        </h2>
        <p className="text-base md:text-lg text-cyan-300/80 mb-8">
          Pulsos, rutas y tráfico global simulando actividad de red en tiempo real.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Radar */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden border border-cyan-700/50 bg-slate-950 h-[420px] md:h-[500px] relative">
            <Canvas style={{ position: "absolute", top: 0, left: 0 }} camera={{ position: [0, 0, 2.7], fov: 50 }}>
              <Stars radius={60} depth={40} count={6000} factor={2} fade />
              <ambientLight intensity={0.35} />
              <pointLight position={[3, 3, 3]} intensity={1.1} />
              <MilitaryGlobe />
              <BeaconsDynamic />
              <TrafficDynamic />
              <OrbitControls
                enablePan={false}
                minDistance={2}
                maxDistance={4}
                autoRotate
                autoRotateSpeed={0.6}
              />
            </Canvas>
          </div>

          {/* Consola lateral */}
          <div className="w-full lg:w-[380px]">
            <div className="flex justify-center gap-2 mb-3">
              <button
                onClick={() => setMode("cyber")}
                className={`px-3 py-1 text-xs font-semibold rounded ${
                  mode === "cyber"
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-cyan-300"
                }`}
              >
                🛡️ Cyber Defense
              </button>
              <button
                onClick={() => setMode("ai")}
                className={`px-3 py-1 text-xs font-semibold rounded ${
                  mode === "ai"
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-cyan-300"
                }`}
              >
                🤖 AI Ops
              </button>
            </div>
            <DevsonConsole mode={mode} />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Demo global dinámica — simulación de red distribuida, conexiones activas y alertas tácticas.
        </p>
      </div>
    </section>
  );
}
