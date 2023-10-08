import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import { useGraph } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function Squirrel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("fantasy/animal.gltf");
  const cloned = useMemo(() => clone(scene), [scene]);
  const { nodes } = useGraph(cloned);
  const { actions, names } = useAnimations(animations, group);

  const { squirrel } = useControls("Animation Name", {
    squirrel: {
      options: names,
    },
  });

  useEffect(() => {
    let animate = actions[squirrel];
    animate.reset().fadeIn(0.5).play();

    return () => {
      animate.fadeOut(0.5);
    };
  }, [names, squirrel]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[1.48, 0.12, -0.95]}>
        <primitive object={nodes.back} />
        <primitive object={nodes.hips} />
        <skinnedMesh
          geometry={nodes.Hermine.geometry}
          material={nodes.Hermine.material}
          skeleton={nodes.Hermine.skeleton}
          castShadow
          receiveShadow
        />
      </group>
      <mesh
        geometry={nodes.Terrier.geometry}
        material={nodes.Terrier.material}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload("/fantasy/animal.gltf");
