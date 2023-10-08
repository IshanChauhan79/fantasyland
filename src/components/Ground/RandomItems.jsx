import { memo, useMemo } from "react";
import Tree from "../Trees";
import Rocks from "../Rocks";
import { useControls } from "leva";
import Squirrel from "../Squirrel";

const RandomItems = () => {
  const {
    treesCount,
    smallStoneCount,
    bigRockcount,

    squirrelCount,
  } = useControls("Forrest items", {
    squirrelCount: {
      value: 10,
      min: 0,
      max: 30,
      step: 1,
    },
    treesCount: {
      value: 110,
      min: 100,
      max: 500,
      step: 10,
    },
    smallStoneCount: {
      value: 30,
      min: 0,
      step: 5,
      max: 100,
    },
    bigRockcount: {
      value: 20,
      min: 0,
      max: 50,
      step: 1,
    },
  });
  const randomTrees = useMemo(() => {
    const array = [];
    for (let i = 0; i < treesCount; i++) {
      const random = Math.random();
      array.push({
        fileName: random > 0.7 ? "tree1.gltf" : "tree2.gltf",
        scale: (Math.random() * 25 + 35) / 1000,
        "rotation-y": Math.PI * Math.random(),
        position: [Math.random() * 20 - 10, 0.001, Math.random() * 12 - 7],
      });
    }
    return array;
  }, [treesCount]);

  const randomStones = useMemo(() => {
    const array = [];
    for (let i = 0; i < smallStoneCount; i++) {
      array.push({
        fileName: "rock.gltf",
        scale: (Math.random() * 20 + 20) / 100,
        "rotation-y": Math.PI * Math.random(),
        position: [Math.random() * 20 - 10, 0.001, Math.random() * 12 - 7],
      });
    }
    return array;
  }, [smallStoneCount]);

  const randomRocks = useMemo(() => {
    const array = [];
    for (let i = 0; i < bigRockcount; i++) {
      const random = Math.random();
      let fileName = "rock.gltf";
      if (random > 0.75) fileName = "rock1.gltf";
      if (random > 0.5) fileName = "rock2.gltf";
      if (random > 0.25) fileName = "rock3.gltf";

      array.push({
        fileName,
        scale: (Math.random() + 1.3) / 10,
        rotation: [
          fileName === "rock.gltf" ? 0 : Math.PI * Math.random(),
          Math.PI * Math.random(),
          fileName === "rock.gltf" ? 0 : Math.PI * Math.random(),
        ],
        position: [Math.random() * 20 - 10, 0.02, Math.random() * 12 - 7],
      });
    }
    return array;
  }, [bigRockcount]);

  const randomSquirrels = useMemo(() => {
    const array = [];
    for (let i = 0; i < squirrelCount; i++) {
      array.push({
        scale: (Math.random() * 2) / 10 + 1,
        "rotation-y": Math.PI * Math.random(),
        position: [Math.random() * 20 - 10, 0.001, Math.random() * 12 - 7],
      });
    }
    return array;
  }, [squirrelCount]);

  const randomTreesBehindStatue = useMemo(() => {
    const array = [];
    for (let i = 0; i < 20; i++) {
      const random = Math.random();
      array.push({
        fileName: random > 0.7 ? "tree1.gltf" : "tree2.gltf",
        scale: (Math.random() * 25 + 35) / 1000,
        "rotation-y": Math.PI * Math.random(),
        position: [Math.random() * 15 - 5, 0.001, Math.random() * 2 - 9.5],
      });
    }
    return array;
  }, []);

  /**
   * Behined statue tree
   * near goblin home
   */

  const randomRocksBehindStatue = useMemo(() => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      const random = Math.random();
      let fileName = "rock.gltf";
      if (random > 0.75) fileName = "rock1.gltf";
      if (random > 0.5) fileName = "rock2.gltf";
      if (random > 0.25) fileName = "rock3.gltf";

      array.push({
        fileName,
        scale: (Math.random() + 1.3) / 10,
        rotation: [
          fileName === "rock.gltf" ? 0 : Math.PI * Math.random(),
          Math.PI * Math.random(),
          fileName === "rock.gltf" ? 0 : Math.PI * Math.random(),
        ],
        position: [Math.random() * 15 - 5, 0.02, Math.random() * 2 - 9.5],
      });
    }
    return array;
  }, []);

  return (
    <>
      {randomTrees.map((data, i) => (
        <Tree key={`tree-${i}`} {...data} />
      ))}
      {randomStones.map((data, i) => (
        <Rocks key={`stone-${i}`} {...data} />
      ))}
      {randomRocks.map((data, i) => (
        <Rocks key={`rock-${i}`} {...data} />
      ))}
      {randomSquirrels.map((data, i) => (
        <Squirrel key={`squirrel-${i}`} {...data} />
      ))}
      {/**
       * Behined statue tree
       * near goblin home
       */}
      {randomTreesBehindStatue.map((data, i) => (
        <Tree key={`tree-${i}`} {...data} />
      ))}
      {randomRocksBehindStatue.map((data, i) => (
        <Rocks key={`rock-${i}`} {...data} />
      ))}
    </>
  );
};

export default memo(RandomItems);
