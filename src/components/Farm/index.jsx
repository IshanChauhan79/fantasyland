import { useGLTF } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import Horse from "../Horse";
import { STANDARD_MATERIAL_ROAD } from "../../Constants/Materials";

const Farm = ({ position = [0, 0, 0], scale = 1, ...rest }) => {
  const { scene, nodes } = useGLTF("/fantasy/farm.gltf");
  scene.traverse((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });
  useEffect(() => {
    nodes.Circle.material = STANDARD_MATERIAL_ROAD;
  }, []);

  return (
    <>
      <group position={position} scale={scale} {...rest}>
        {/* <RigidBody type="fixed" friction={0}> */}
        {/* <CuboidCollider args={[1, 1, 1.2]} position={[0, 1, -0.5]} /> */}
        {/* <CuboidCollider args={[0.5, 0.7, 1.2]} position={[0, 0.7, 1.6]} /> */}
        <primitive object={scene} />
        {/* </RigidBody> */}
        <Horse position={[1.5, 0.01, -1.2]} rotation-y={-Math.PI * 0.1} />
        <Horse position={[2.5, 0.01, -1.2]} rotation-y={-Math.PI * 0.25} />
      </group>
    </>
  );
};

export default Farm;

useGLTF.preload("/fantasy/farm.gltf");
