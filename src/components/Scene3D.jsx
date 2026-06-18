import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  MeshDistortMaterial,
  Icosahedron,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function Token() {
  const inner = useRef();
  const wire = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.y += delta * 0.18;
      inner.current.rotation.x = Math.sin(t * 0.2) * 0.12;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.1;
      wire.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      {/* glossy distorted core */}
      <Icosahedron ref={inner} args={[1.35, 12]}>
        <MeshDistortMaterial
          color="#0c0e12"
          roughness={0.05}
          metalness={1}
          distort={0.32}
          speed={1.6}
          envMapIntensity={1.4}
        />
      </Icosahedron>

      {/* lime wireframe shell */}
      <Icosahedron ref={wire} args={[1.85, 1]}>
        <meshBasicMaterial color="#cdfd50" wireframe transparent opacity={0.18} />
      </Icosahedron>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 700;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3 + Math.random() * 4;
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
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#cdfd50"
          size={0.035}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.4;
    const y = state.pointer.y * 0.3;
    state.camera.position.x += (x - state.camera.position.x) * 0.04;
    state.camera.position.y += (y - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#cdfd50" />
      <pointLight position={[-6, -3, -2]} intensity={30} color="#7c5cff" />

      <Suspense fallback={null}>
        <Token />
        <ParticleField />
        {/* local env map (no external HDR fetch) for clean metallic reflections */}
        <Environment resolution={256}>
          <Lightformer
            intensity={2}
            position={[0, 4, -6]}
            scale={[10, 6, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={3}
            position={[-5, 1, 1]}
            scale={[6, 6, 1]}
            color="#cdfd50"
          />
          <Lightformer
            intensity={2}
            position={[5, -2, 2]}
            scale={[6, 6, 1]}
            color="#7c5cff"
          />
        </Environment>
      </Suspense>

      <Rig />
    </Canvas>
  );
}
