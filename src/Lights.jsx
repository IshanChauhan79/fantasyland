import { useState } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const [directionalLight, setDirectionalLight] = useState(null);
  // useHelper({ current: directionalLight }, DirectionalLightHelper);
  return (
    <>
      <directionalLight
        ref={setDirectionalLight}
        castShadow
        position={[20, 25, 20]}
        intensity={1.5}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={20}
        shadow-camera-far={50}
        shadow-camera-top={10}
        shadow-camera-right={15}
        shadow-camera-bottom={-10}
        shadow-camera-left={-15}
        shadow-normalBias={0.03}
      />
      {/* {directionalLight && (
        <cameraHelper args={[directionalLight.shadow?.camera]} />
      )} */}

      <directionalLight
        castShadow={false}
        position={[-30, 15, -30]}
        intensity={0.3}
      />

      <ambientLight intensity={0.7} />
    </>
  );
};

export default Lights;
