import Weapons from "../Weapons";
import Goblin from "./Goblin";
import OldGoblin from "./OldGoblin";
import RestingGoblin from "./RestingGoblin";

const GoblinHome = ({ position = [0, 0, 0], scale = 1, ...rest }) => {
  return (
    <>
      <group position={position} scale={scale} {...rest}>
        <Weapons
          fileName="target.gltf"
          position={[-0.5, 0, -0.5]}
          scale={0.2}
          rotation-y={Math.PI * 0.25}
        />
        <Weapons
          fileName="bow.gltf"
          position={[-0.5, 0.04, -0.2]}
          scale={0.3}
          rotation-x={-Math.PI * 0.7}
          rotation-z={-Math.PI}
        />
        <Weapons
          fileName="axe.gltf"
          scale={0.15}
          position={[-0.4, 0.04, 0.1]}
          rotation-z={Math.PI * 0.35}
          rotation-y={-Math.PI * 0.2}
        />
        <Weapons
          scale={0.3}
          position={[-0.8, 0.01, 0.2]}
          rotation-z={-Math.PI * 0.1}
          rotation-x={-Math.PI * 0.5}
          // rotation-x={-Math.PI * 0.5}
        />
        <Weapons
          fileName="barrel.gltf"
          scale={0.3}
          position={[2.5, 0.1, -0.5]}
        />
        <Weapons
          fileName="barrel.gltf"
          scale={0.3}
          position={[2.8, 0.1, -0.5]}
        />
        <Weapons
          fileName="barrel.gltf"
          scale={0.3}
          position={[2.65, 0.1, -0.25]}
        />

        <Weapons fileName="chair.gltf" scale={0.3} position={[2.4, 0, 0.66]} />
        <Weapons fileName="chair.gltf" scale={0.3} position={[2.9, 0, 0.65]} />
        <Weapons
          fileName="chair.gltf"
          scale={0.3}
          position={[2.4, 0, 1.4]}
          rotation-y={Math.PI * 1.1}
        />
        <Weapons
          fileName="chair.gltf"
          scale={0.3}
          position={[2.85, 0, 1.4]}
          rotation-y={Math.PI * 1.05}
        />

        <Weapons fileName="table.gltf" scale={0.3} position={[2.65, 0, 1]} />

        <OldGoblin position={[0, 0, 0]} rotation-y={Math.PI * 0.4} />
        <Goblin position={[1, 0, 0]} rotation-y={-Math.PI * 0.5} />
        <Goblin position={[0, 0, 1]} rotation-y={Math.PI} />
        <Goblin position={[0.7, 0, 0.7]} rotation-y={Math.PI * 1.2} />
        <RestingGoblin position={[1.7, 0, -0.2]} rotation-y={Math.PI * 1.25} />
      </group>
    </>
  );
};

export default GoblinHome;
