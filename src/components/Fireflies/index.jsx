import { Sparkles } from "@react-three/drei";
import { useControls } from "leva";
const Fireflies = () => {
  const { count, color } = useControls("Fireflies", {
    count: {
      value: 100,
      min: 0,
      max: 300,
      step: 10,
    },
    color: "#94ddff",
  });
  return (
    <Sparkles
      count={count}
      scale={[22, 2, 22]}
      position-y={1}
      color={color}
      size={6}
      speed={0.2}
      noise={0.1}
    />
  );
};

export default Fireflies;
