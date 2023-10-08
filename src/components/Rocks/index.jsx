import { Clone, useGLTF } from "@react-three/drei";
// import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Rocks = ({
  fileName = "rock.gltf",
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
        {/* <RigidBody type="fixed" friction={0}> */}
        <Clone object={scene} />
        {/* </RigidBody> */}
      </group>
    </>
  );
};

export default Rocks;

useGLTF.preload("/fantasy/rock.gltf");
useGLTF.preload("/fantasy/rock1.gltf");
useGLTF.preload("/fantasy/rock2.gltf");
useGLTF.preload("/fantasy/rock3.gltf");
