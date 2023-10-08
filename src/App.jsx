import {
  BakeShadows,
  // CameraControls,
  MapControls,
  Sky,
} from "@react-three/drei";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
// import { Physics } from "@react-three/rapier";
import Ground from "./components/Ground";
import { Suspense, useRef } from "react";
import Cart from "./components/Cart";
import Farm from "./components/Farm";
import Statue from "./components/Statue";
import GoblinHome from "./components/GoblinHome";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import Fireflies from "./components/Fireflies";

export function PanLimits(camera, mapControls) {
  const minPan = new Vector3(-8, 0, -8);
  const maxPan = new Vector3(8, 15, 8);
  const _v = new Vector3();

  _v.copy(mapControls.target);
  mapControls.target.clamp(minPan, maxPan);
  _v.sub(mapControls.target);
  camera.position.sub(_v);
}

const App = () => {
  const orbit = useRef();
  const { camera } = useThree();

  // for camera controls boundary
  // useEffect(() => {
  //   orbit.current.setBoundary(
  //     new Box3(new Vector3(-8, 0, -8), new Vector3(8, 15, 8))
  //   );
  // }, []);

  return (
    <>
      {/* performance */}
      <Perf position="top-left" />

      {/* lights for the scene */}
      <Lights />
      <MapControls
        ref={orbit}
        onChange={(e) => PanLimits(camera, e.target)}
        maxPolarAngle={Math.PI * 0.46}
        minDistance={1}
        maxDistance={20}
      />
      {/* <CameraControls
        ref={orbit}
        // boundaryEnclosesCamera={true}
        maxPolarAngle={Math.PI * 0.46}
        minDistance={1}
        maxDistance={20}
      /> */}

      <Sky sunPosition={[100, 80, 100]} />
      <fog attach="fog" args={["#8e9eac", 7, 20]} />

      <Suspense fallback={null}>
        {/* <Physics debug> */}
        <BakeShadows />
        <Ground />
        <Cart position={[-7, 0.001, 7]} rotation-y={Math.PI * 0.5} />
        <Farm position={[6.5, 0.002, 6.5]} rotation-y={-Math.PI * 0.5} />
        <Statue
          scale={3}
          position={[7, 1.75, -7]}
          rotation-y={-Math.PI * 0.25}
        />
        <GoblinHome position={[-9, 0.001, -9]} />
        <Fireflies />

        {/* </Physics> */}
      </Suspense>

      {/* <PointerLockControls makeDefault /> */}
      {/* <axesHelper scale={5} /> */}
    </>
  );
};

export default App;
