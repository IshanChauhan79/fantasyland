import Rocks from "../Rocks";

const GroundRocks = () => {
  return (
    <>
      {/* road stones and rock */}
      <Rocks position={[-9.6, 0.001, 6.3]} scale={0.2} />
      <Rocks position={[-7.6, 0.001, 6.1]} scale={0.2} />
      <Rocks position={[-9.6, 0.001, 6.3]} scale={0.2} />
      <Rocks position={[-3.6, 0.001, 6]} scale={0.2} />
      <Rocks position={[-8.2, 0.001, 9]} scale={0.7} rotation-y={Math.PI} />
      <Rocks
        fileName="rock1.gltf"
        position={[-4.7, 0.15, 8.7]}
        rotation-x={Math.PI * 0.5}
        rotation-z={Math.PI * 0.2}
      />

      <Rocks position={[-3, 0.001, 7.3]} />
      <Rocks position={[-9, 0.001, 7]} />

      <Rocks position={[8.01, 0.001, 6.2]} />
      <Rocks position={[1.03, 0.001, 6.4]} />
      <Rocks position={[2.5, 0.001, 9]} scale={0.5} />
      <Rocks position={[2.34, 0.001, 7]} />

      <Rocks fileName="rock2.gltf" position={[9, 0, 9]} />
      <Rocks fileName="rock1.gltf" position={[2, 0, 2]} />
      <Rocks fileName="rock3.gltf" position={[2, 0, 4]} />
    </>
  );
};

export default GroundRocks;
