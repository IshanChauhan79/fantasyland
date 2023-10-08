import { useGLTF } from "@react-three/drei";
import Wizard from "../Wizard";
// import { RigidBody } from "@react-three/rapier";

const Statue = ({ position = [0, 0.5, 0], scale = 1, ...rest }) => {
  const { scene, nodes } = useGLTF("/fantasy/statue.gltf");
  scene.traverse((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  return (
    <>
      <group position={position} scale={scale} {...rest}>
        {/* <RigidBody type="fixed" friction={0}> */}
        {/* <CuboidCollider args={[1, 1, 1.2]} position={[0, 1, -0.5]} /> */}
        {/* <CuboidCollider args={[0.5, 0.7, 1.2]} position={[0, 0.7, 1.6]} /> */}
        <primitive object={scene} />
        <Wizard scale={0.2} position={[0, -position[1] / 2 + 0.3, 0.4]} />
        {/* </RigidBody> */}
      </group>
    </>
  );
};

export default Statue;

useGLTF.preload("/fantasy/statue.gltf");
