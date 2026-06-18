import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Edges, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { AdditiveBlending, Color, Vector2 } from "three";

// shared pointer (canvas wrapper is pointer-events-none, so track window)
const pointer = { x: 0, y: 0 };

const PURPLE = "#8b5cff";
const LILAC = "#c4b5fd";
const PINK = "#ff4ecd";
const CYAN = "#22d3ee";

function OrbitRing({ radius = 2.4, tilt = 0, spin = 0.4, color = PURPLE, thickness = 0.012 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * spin;
  });
  return (
    <group rotation={[tilt, tilt * 0.6, 0]}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, thickness, 16, 180]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Crystal() {
  const shell = useRef();
  const inner = useRef();
  const core = useRef();
  const coreMat = useRef();
  const halo = useRef();
  const haloMat = useRef();
  const tmp = useRef(new Color());

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (shell.current) {
      shell.current.rotation.y += delta * 0.2;
      shell.current.rotation.x = Math.sin(t * 0.2) * 0.16;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.34;
      inner.current.rotation.z += delta * 0.1;
    }
    if (core.current) core.current.scale.setScalar(1 + Math.sin(t * 1.8) * 0.1);
    if (halo.current) halo.current.scale.setScalar(1 + Math.sin(t * 1.8) * 0.18);

    // cycle the core + halo through the vibrant palette
    const hue = (t * 0.06) % 1;
    if (coreMat.current) coreMat.current.color.setHSL(hue, 0.85, 0.78);
    if (haloMat.current) haloMat.current.color.setHSL(hue, 0.9, 0.6);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={1.15}>
      {/* outer glowing wireframe shell */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.02} />
        <Edges color={PURPLE} threshold={1} />
      </mesh>

      {/* inner counter-rotating frame */}
      <mesh ref={inner}>
        <dodecahedronGeometry args={[1.12, 0]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.03} />
        <Edges color={CYAN} threshold={1} />
      </mesh>

      {/* bright pulsing core (blooms, cycles color) */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshBasicMaterial ref={coreMat} color="#e7ddff" toneMapped={false} />
      </mesh>

      {/* soft additive halo */}
      <mesh ref={halo}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial
          ref={haloMat}
          color={PURPLE}
          transparent
          opacity={0.26}
          blending={AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* vibrant orbital rings at different tilts */}
      <OrbitRing radius={2.35} tilt={Math.PI / 2.2} spin={0.5} color={PURPLE} thickness={0.014} />
      <OrbitRing radius={2.65} tilt={Math.PI / 3.4} spin={-0.34} color={PINK} thickness={0.01} />
      <OrbitRing radius={2.05} tilt={Math.PI / 1.8} spin={0.42} color={CYAN} thickness={0.009} />
    </Float>
  );
}

function ParticleField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 520;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3.2 + Math.random() * 5;
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
      ref.current.rotation.y += delta * 0.022;
      ref.current.rotation.x += delta * 0.009;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color={CYAN}
          size={0.024}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
          blending={AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x += (pointer.x * 0.7 - state.camera.position.x) * 0.045;
    state.camera.position.y += (pointer.y * 0.45 - state.camera.position.y) * 0.045;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  const caOffset = useMemo(() => new Vector2(0.0016, 0.0016), []);
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
      camera={{ position: [0, 0, 6.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Crystal />
        <ParticleField />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1.6}
            luminanceThreshold={0.12}
            luminanceSmoothing={0.35}
            radius={0.85}
          />
          <ChromaticAberration offset={caOffset} radialModulation modulationOffset={0.4} />
        </EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  );
}
