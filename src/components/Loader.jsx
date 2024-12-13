import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 12,
          color: "#f1f1f1",
          fontWeight: 800,
          // marginTop: 40,
          textAlign: "left",
        }}
      >
        {/* The percent loading the 2d assets */}
        Loading<br/>
        3D&nbsp;Asset...<br/>
        {progress.toFixed(2)}% {/* 2 = decimal places */}
      </p>
    </Html>
  );
}

export default Loader