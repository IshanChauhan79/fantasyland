import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

export default function OldGoblin(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/fantasy/oldGoblin.gltf");

  const { actions, names } = useAnimations(animations, group);
  const { oldGoblin } = useControls("Goblin Animation Name", {
    oldGoblin: {
      options: names,
      value: "pose_vieux",
    },
  });

  useEffect(() => {
    let animate = actions[oldGoblin];

    animate.reset().fadeIn(0.5).play();
    return () => {
      animate.fadeOut(0.5);
    };
  }, [names, oldGoblin, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Vieux.geometry}
          material={materials["color_main.001"]}
          skeleton={nodes.Vieux.skeleton}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fantasy/oldGoblin.gltf");
