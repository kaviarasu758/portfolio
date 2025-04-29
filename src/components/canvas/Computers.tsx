import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile = false }: { isMobile?: boolean }) => {
  const scale = isMobile ? 0.6 : 1;
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      <group position={[0, -1.5, 0]} scale={scale}>
        {/* Base */}
        <mesh receiveShadow castShadow position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.1, 1]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        
        {/* Monitor stand */}
        <mesh position={[0, 0.3, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        
        {/* Monitor */}
        <group position={[0, 0.7, 0]}>
          {/* Frame */}
          <mesh receiveShadow castShadow>
            <boxGeometry args={[1.5, 0.8, 0.05]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          
          {/* Screen */}
          <mesh position={[0, 0, 0.03]} receiveShadow>
            <boxGeometry args={[1.4, 0.7, 0.01]} />
            <meshStandardMaterial 
              color="#6366f1" 
              emissive="#6366f1" 
              emissiveIntensity={0.2} 
            />
          </mesh>
        </group>
        
        {/* Keyboard */}
        <mesh position={[0, 0.05, 0.3]} receiveShadow castShadow>
          <boxGeometry args={[1, 0.05, 0.3]} />
          <meshStandardMaterial color="#555" />
        </mesh>
        
        {/* Mouse */}
        <mesh position={[0.6, 0.03, 0.3]} receiveShadow castShadow rotation={[0, 0, 0]}>
          <boxGeometry args={[0.06, 0.03, 0.1]} />
          <meshStandardMaterial color="#555" />
        </mesh>
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="canvas-loader"></div>
    </div>
  );
};

export default ComputersCanvas;