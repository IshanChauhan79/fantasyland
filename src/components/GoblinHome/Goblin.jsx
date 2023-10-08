import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { useControls } from "leva";

export default function Goblin(props) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("/fantasy/goblin.gltf");
  const { actions, names } = useAnimations(animations, group);
  const cloned = useMemo(() => clone(scene), [scene]);
  const { nodes } = useGraph(cloned);

  const { goblin } = useControls("Goblin Animation Name", {
    goblin: {
      options: names,
      value: "pose_jeune",
    },
  });

  useEffect(() => {
    let animate = actions[goblin];

    animate.reset().fadeIn(0.5).play();
    return () => {
      animate.fadeOut(0.5);
    };
  }, [names, goblin, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.03, 0]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Jeune.geometry}
          material={materials["color_main.003"]}
          skeleton={nodes.Jeune.skeleton}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fantasy/goblin.gltf");

useGLTF.preload("/fantasy/goblin.gltf");
