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
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Canvas for 3D content */}
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 100 } }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableRotate={false} // Disables manual rotation
            enableZoom={false} // Disables zooming
            maxPolarAngle={Math.PI / 2} // Optional: keep the camera within a certain vertical angle
            minPolarAngle={Math.PI / 2} // Optional: prevent the camera from rotating too much
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Red rectangle overlay so that phones can scroll past*/}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          zIndex: 10, // Ensure it is above the canvas
          opacity: 0.0, // Optional: control transparency of the red overlay
        }}
      ></div>
    </div>
  );
};

export default EarthCanvas;






// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// import { useState, useEffect } from "react"; // chatgpt

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   // chatgpt
//   const [scale, setScale] = useState(2.5);
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 800) {
//         setScale(1.5); // Smaller scale for narrower screens
//       } else {
//         setScale(2.5); // Normal scale for wider screens
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial scale
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <primitive object={earth.scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//       resize={{ scroll: true, debounce: { scroll: 50, resize: 100 } }} // chatgpt Responsive resizing
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableRotate={false}  // Disables manual rotation
//           enableZoom={false}    // Disables zooming
//           maxPolarAngle={Math.PI / 2}  // Optional: keep the camera within a certain vertical angle
//           minPolarAngle={Math.PI / 2}  // Optional: prevent the camera from rotating too much
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;