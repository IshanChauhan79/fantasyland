import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

export default function RestingGoblin(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/fantasy/restingGoblin.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  const { restingGoblin } = useControls("Goblin Animation Name", {
    restingGoblin: {
      options: names,
      //   value: "pose_jeune",
    },
  });

  useEffect(() => {
    let animate = actions[restingGoblin];

    animate.reset().fadeIn(0.5).play();
    return () => {
      animate.fadeOut(0.5);
    };
  }, [names, restingGoblin, actions]);
  return (
    <group
      ref={group}
      {...props}
      rotation={[Math.PI, Math.PI, Math.PI]}
      dispose={null}
    >
      <group rotation={[0.12, -0.06, -0.04]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Femme.geometry}
          material={materials["color_main.004"]}
          skeleton={nodes.Femme.skeleton}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fantasy/restingGoblin.gltf");
