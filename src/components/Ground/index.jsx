import { useEffect } from "react";
import { Color } from "three";
import { useControls } from "leva";
// import { RigidBody } from "@react-three/rapier";
import Boundary from "./Boundary";
import RoadTrees from "./RoadTrees";
import GroundRocks from "./GroundRocks";
import RandomItems from "./RandomItems";
import {
  STANDARD_MATERIAL_GRASS,
  STANDARD_MATERIAL_ROAD,
} from "../../Constants/Materials";
import {
  GROUND_SCALE,
  ROAD_LENGTH_DISPLACEMENT,
} from "../../Constants/renderRelated";
import { PLANE_GEOMETRY_ROAD_1_1 } from "../../Constants/Geometries";

const Ground = ({ position = [0, 0, 0], scale = GROUND_SCALE }) => {
  const { grassColor } = useControls("Color", {
    grassColor: {
      value: "#45be6b",
    },
  });
  useEffect(() => {
    STANDARD_MATERIAL_GRASS.color = new Color(grassColor);
  }, [grassColor]);
  return (
    <group position={position}>
      <mesh
        // scale={scale}
        material={STANDARD_MATERIAL_GRASS}
        rotation-x={-Math.PI * 0.5}
        receiveShadow
        castShadow
        position-y={-0.2 / 2}
      >
        <boxGeometry args={[scale, scale, 0.2]} />
      </mesh>
      <mesh
        geometry={PLANE_GEOMETRY_ROAD_1_1}
        material={STANDARD_MATERIAL_ROAD}
        rotation-x={-Math.PI * 0.5}
        receiveShadow
        castShadow
        position={[-ROAD_LENGTH_DISPLACEMENT, 0.001, 7]}
      ></mesh>
      <RoadTrees />

      <GroundRocks />
      <RandomItems />
      <Boundary scale={scale} />
    </group>
  );
};

export default Ground;
