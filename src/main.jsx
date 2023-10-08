import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
// import { Loader } from "@react-three/drei";
import App from "./App.jsx";
import LoadingScreen from "./components/LoadingScreen/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Leva collapsed />
    <Canvas
      shadows={true}
      gl={{
        antialias: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 4, -8],
      }}
    >
      <App />
    </Canvas>
    {/* <Loader /> */}
    <LoadingScreen />
  </React.StrictMode>
);
