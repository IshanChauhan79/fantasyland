import { Clone, useGLTF } from "@react-three/drei";
// import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Tree = ({
  fileName = "tree1.gltf",
  position = [0, 0, 0],
  scale = 0.1,
  ...rest
}) => {
  const { scene } = useGLTF(`/fantasy/${fileName}`);
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

export default Tree;

useGLTF.preload("/fantasy/tree1.gltf");
useGLTF.preload("/fantasy/tree2.gltf");
