import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Decal, Float, Preload, useTexture
} from '@react-three/drei'
import * as THREE from 'three'; // Import THREE for Math utilities

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // Ref to control the ball's mesh
  const ballRef = React.useRef();

  // Set the initial rotation explicitly
  React.useEffect(() => {
    if (ballRef.current) {
      ballRef.current.rotation.set(0, 0, 0); // Set the initial rotation to 0,0,0 (no randomization)
    }
  }, []);

  // useFrame to create a "wobble" effect
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Create a subtle wobble effect, rotating slightly on both X and Y axes
    ballRef.current.rotation.x = Math.sin(elapsedTime) * 0.07;  // Adjust the multiplier for how much wobble
    ballRef.current.rotation.y = Math.cos(elapsedTime) * 0.07;  // Adjust for Y axis wobble
  });

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={0}
          flatShading
        />
        <Decal
          position={[0, 0, 1]} // Keep the decal in the front of the ball
          rotation={[2 * Math.PI, 0, 6.25]} // Rotation to correct orientation
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;






// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import {
//   Decal, Float, OrbitControls, Preload, useTexture
// } from '@react-three/drei'

// import CanvasLoader from '../Loader'

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl])

//   return (
//     <Float speed={1} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]} // Without this, the balls and the images will be vertically mirrored
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   )
// }

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}> {/*<Suspense> */}
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   )
// }

// export default BallCanvas