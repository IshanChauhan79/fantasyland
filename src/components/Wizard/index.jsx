import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

export default function Wizard(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/fantasy/wizard.gltf");
  const { actions, names } = useAnimations(animations, group);
  const { wizard } = useControls("Animation Name", {
    wizard: {
      options: names,
      value: "Waiting",
    },
  });

  useEffect(() => {
    let animate = actions[wizard];
    animate.reset().fadeIn(0.5).play();

    return () => {
      animate.fadeOut(0.5);
    };
  }, [actions, wizard]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.druid.geometry}
          material={materials.color_main}
          skeleton={nodes.druid.skeleton}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fantasy/wizard.gltf");
