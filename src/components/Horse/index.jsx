import { Clone, useGLTF } from "@react-three/drei";
// import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Horse = ({ position = [0, 0, 0], scale = 0.2, ...rest }) => {
  const { scene } = useGLTF("/fantasy/horse.gltf");
  scene.traverse((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  return (
    <>
      <group position={position} scale={scale} {...rest}>
        {/* <RigidBody type="fixed" friction={0} colliders={false}> */}
        {/* <CuboidCollider args={[0.4, 1, 1.5]} position={[0, 1, 0.2]} /> */}
        <Clone object={scene} />
        {/* </RigidBody> */}
      </group>
    </>
  );
};

export default Horse;

useGLTF.preload("/fantasy/horse.gltf");
