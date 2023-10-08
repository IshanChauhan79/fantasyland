import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import { MOVING, RESTING } from "../../Constants/animtions";
// import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Cart = ({ position = [0, 0, 0], scale = 0.4, ...rest }) => {
  const { animations, scene } = useGLTF("/fantasy/cart.gltf");

  scene.traverse((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  const workingAnimations = useAnimations(animations, scene);
  const { cart } = useControls("Animation Name", {
    cart: {
      options: [MOVING, RESTING],
    },
  });

  useEffect(() => {
    if (!workingAnimations || !cart) return;
    let person = workingAnimations.actions[workingAnimations.names[0]];
    let horse = workingAnimations.actions[workingAnimations.names[2]];
    let cartWheel = workingAnimations.actions[workingAnimations.names[4]];

    if (cart === RESTING) {
      person = workingAnimations.actions[workingAnimations.names[1]];
      horse = workingAnimations.actions[workingAnimations.names[3]];
      cartWheel = workingAnimations.actions[workingAnimations.names[5]];
    }

    person.reset().fadeIn(0.5).play();
    cartWheel.reset().fadeIn(0.5).play();
    horse.reset().fadeIn(0.5).play();
    return () => {
      person.fadeOut(0.5);
      cartWheel.fadeOut(0.5);
      horse.fadeOut(0.5);
    };
  }, [workingAnimations, cart]);

  return (
    <>
      <group position={position} scale={scale} {...rest}>
        {/* <RigidBody type="fixed" colliders={false} friction={0}> */}
        {/* <CuboidCollider args={[1, 1, 1.2]} position={[0, 1, -0.5]} /> */}
        {/* <CuboidCollider args={[0.5, 0.7, 1.2]} position={[0, 0.7, 1.6]} /> */}
        <primitive object={scene} />
        {/* </RigidBody> */}
      </group>
    </>
  );
};

export default Cart;

useGLTF.preload("/fantasy/cart.gltf");
