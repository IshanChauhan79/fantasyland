import { Clone, useGLTF } from "@react-three/drei";

// also used for importing furneture for goblin home

// files - sword , bow, axe, target
const Weapons = ({
  fileName = "sword.gltf",
  position = [0, 0, 0],
  scale = 1,
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
        <Clone object={scene} />
      </group>
    </>
  );
};

export default Weapons;

useGLTF.preload("/fantasy/sword.gltf");
useGLTF.preload("/fantasy/bow.gltf");
useGLTF.preload("/fantasy/axe.gltf");
useGLTF.preload("/fantasy/target.gltf");
useGLTF.preload("/fantasy/barrel.gltf");
useGLTF.preload("/fantasy/chair.gltf");
useGLTF.preload("/fantasy/table.gltf");
