import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { AdditiveBlending } from "three";

// shared pointer (canvas wrapper is pointer-events-none, so track window)
const pointer = { x: 0, y: 0 };

const GOLD = "#c9a24b";
const CHAMPAGNE = "#e7d6ae";

function GoldForm() {
  const knot = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (knot.current) {
      knot.current.rotation.y += delta * 0.18;
      knot.current.rotation.x = Math.sin(t * 0.18) * 0.12;
    }
    if (ring1.current) ring1.current.rotation.z += delta * 0.22;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.16;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.9}>
      {/* sculptural polished-gold knot */}
      <mesh ref={knot}>
        <torusKnotGeometry args={[0.92, 0.3, 240, 36]} />
        <meshStandardMaterial
          color={GOLD}
          metalness={1}
          roughness={0.22}
          envMapIntensity={1.6}
        />
      </mesh>

      {/* slim gilded orbit rings */}
      <group rotation={[Math.PI / 2.3, 0.3, 0]}>
        <mesh ref={ring1}>
          <torusGeometry args={[2.05, 0.012, 24, 200]} />
          <meshStandardMaterial color={CHAMPAGNE} metalness={1} roughness={0.25} envMapIntensity={1.4} />
        </mesh>
      </group>
      <group rotation={[Math.PI / 3, -0.4, 0.2]}>
        <mesh ref={ring2}>
          <torusGeometry args={[2.45, 0.008, 24, 200]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} envMapIntensity={1.3} />
        </mesh>
      </group>
    </Float>
  );
}

function GoldDust() {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 300;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3 + Math.random() * 5;
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
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color={CHAMPAGNE}
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.5}
          blending={AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x += (pointer.x * 0.5 - state.camera.position.x) * 0.04;
    state.camera.position.y += (pointer.y * 0.34 - state.camera.position.y) * 0.04;
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
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} color="#fff4dc" />
      <Suspense fallback={null}>
        <GoldForm />
        <GoldDust />
        {/* warm studio environment (local, no external HDR) for rich gold reflections */}
        <Environment resolution={256}>
          <Lightformer intensity={3} position={[0, 5, -6]} scale={[12, 8, 1]} color="#fff6e2" />
          <Lightformer intensity={2.2} position={[-6, 1, 2]} scale={[5, 8, 1]} color="#e7d6ae" />
          <Lightformer intensity={1.8} position={[6, -2, 3]} scale={[6, 6, 1]} color="#c9a24b" />
          <Lightformer intensity={1} position={[0, -6, 2]} scale={[10, 6, 1]} color="#3a2f1a" />
        </Environment>
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.6} luminanceSmoothing={0.4} radius={0.6} />
        </EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  );
}
