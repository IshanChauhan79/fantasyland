import Tree from "../Trees";

const RoadTrees = () => {
  return (
    <>
      {/* one side of road */}
      <Tree fileName="tree2.gltf" position={[-9, 0.001, 5.9]} scale={0.05} />
      <Tree fileName="tree2.gltf" position={[-7.9, 0.001, 5.5]} scale={0.034} />
      <Tree fileName="tree2.gltf" position={[-7.4, 0.001, 6]} scale={0.04} />
      <Tree fileName="tree2.gltf" position={[-6, 0.001, 6]} scale={0.05} />
      <Tree fileName="tree2.gltf" position={[-5.1, 0.001, 5.7]} scale={0.04} />
      <Tree fileName="tree2.gltf" position={[-2.1, 0.001, 5.8]} scale={0.058} />
      <Tree fileName="tree2.gltf" position={[-1, 0.001, 6]} scale={0.042} />
      <Tree fileName="tree2.gltf" position={[1.3, 0.001, 6.1]} scale={0.056} />
      <Tree fileName="tree2.gltf" position={[3.7, 0.001, 6]} scale={0.041} />

      {/* other side of road */}
      <Tree fileName="tree2.gltf" position={[-9.3, 0.001, 8.7]} scale={0.06} />
      <Tree fileName="tree2.gltf" position={[-8.3, 0.001, 8]} scale={0.05} />
      <Tree fileName="tree2.gltf" position={[-7.4, 0.001, 8.6]} scale={0.041} />
      <Tree fileName="tree2.gltf" position={[-5, 0.001, 8]} scale={0.053} />
      <Tree fileName="tree2.gltf" position={[-3.2, 0.001, 8]} scale={0.048} />
      <Tree fileName="tree2.gltf" position={[-1, 0.001, 8.2]} scale={0.055} />
      <Tree fileName="tree2.gltf" position={[1.1, 0.001, 7.8]} scale={0.046} />
      <Tree fileName="tree2.gltf" position={[3.3, 0.001, 8]} scale={0.057} />

      <Tree position={[4, 0.001, 9]} scale={0.12} />
      <Tree position={[0.8, 0.001, 9.2]} scale={0.11} />
      <Tree position={[-0.9, 0.001, 9.8]} scale={0.13} />
      <Tree position={[-3.4, 0.001, 9.2]} scale={0.11} />
      <Tree position={[-6.2, 0.001, 9.6]} scale={0.07} />
    </>
  );
};

export default RoadTrees;
