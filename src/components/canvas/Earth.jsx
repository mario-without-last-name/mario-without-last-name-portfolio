import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import { useState, useEffect } from "react"; // chatgpt

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // chatgpt
  const [scale, setScale] = useState(2.5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(1.5); // Smaller scale for narrower screens
      } else {
        setScale(2.5); // Normal scale for wider screens
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial scale
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <primitive object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      resize={{ scroll: true, debounce: { scroll: 50, resize: 100 } }} // chatgpt Responsive resizing
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onUpdate={(self) => self.update()} // chatgpt
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;