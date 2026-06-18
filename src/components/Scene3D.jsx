import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Edges, Torus, Points, PointMaterial } from "@react-three/drei";
import { AdditiveBlending } from "three";

// shared pointer (canvas wrapper is pointer-events-none, so track window)
const pointer = { x: 0, y: 0 };

function Token() {
  const outer = useRef();
  const mid = useRef();
  const core = useRef();
  const glow = useRef();
  const ring = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.y += delta * 0.16;
      outer.current.rotation.x = Math.sin(t * 0.2) * 0.12;
    }
    if (mid.current) {
      mid.current.rotation.y -= delta * 0.26;
      mid.current.rotation.z += delta * 0.06;
    }
    if (core.current) {
      const s = 1 + Math.sin(t * 1.8) * 0.06;
      core.current.scale.setScalar(s);
    }
    if (glow.current) {
      const s = 1 + Math.sin(t * 1.8) * 0.1;
      glow.current.scale.setScalar(s);
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.45;
      ring.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.4) * 0.18;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={1.2}>
      {/* outer glowing wireframe shell */}
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#cdfd50" transparent opacity={0.03} />
        <Edges color="#cdfd50" threshold={1} />
      </mesh>

      {/* inner counter-rotating frame */}
      <mesh ref={mid}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color="#7c5cff" transparent opacity={0.04} />
        <Edges color="#9d86ff" threshold={1} />
      </mesh>

      {/* bright pulsing core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshBasicMaterial color="#eaffb0" toneMapped={false} />
      </mesh>

      {/* soft additive glow halo around the core */}
      <mesh ref={glow}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshBasicMaterial
          color="#cdfd50"
          transparent
          opacity={0.16}
          blending={AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* elegant thin orbiting ring */}
      <Torus ref={ring} args={[2.45, 0.008, 16, 160]}>
        <meshBasicMaterial color="#cdfd50" toneMapped={false} />
      </Torus>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 460;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3.2 + Math.random() * 4.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.025;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#aeb4be"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x += (pointer.x * 0.6 - state.camera.position.x) * 0.04;
    state.camera.position.y += (pointer.y * 0.4 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  useEffect(() => {
    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <Suspense fallback={null}>
        <Token />
        <ParticleField />
      </Suspense>
      <Rig />
    </Canvas>
  );
}
