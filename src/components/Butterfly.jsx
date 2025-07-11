/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import FlayModel from "../models/Butterfly.glb";

const Butterfly = () => {
  const groupRef = useRef();
  const { nodes, materials, animations } = useGLTF(FlayModel);

  // Set initial position
const [initialX, initialY, initialZ] = useMemo(() => {
  const x = -1.7;  
  const y = 1;     
  const z = 0.5;   
  return [x, y, z];
}, []);
  const scale = useMemo(() => Math.random() * 0.04 + 0.06, []); // range ~0.03 to 0.06
  const colors = ["orange", "deeppink", "violet"];
const color = useMemo(() => colors[Math.floor(Math.random() * colors.length)], []);



  const clonedMaterials = useMemo(() => {
    const cloned = {};
    Object.keys(materials).forEach((key) => {
      cloned[key] = materials[key].clone();
    });
    return cloned;
  }, [materials]);

  useEffect(() => {
    if (clonedMaterials["Material_0.007"]) {
      clonedMaterials["Material_0.007"].color.set(color);
    }
  }, [clonedMaterials]);

  const { actions } = useAnimations(animations, groupRef);

useFrame(({ clock }) => {
  const t = clock.getElapsedTime();

  if (groupRef.current) {
    // Fixed position X with small natural drift side to side
    groupRef.current.position.x = initialX + Math.sin(t * 0.7) * 0.15;

    // Float up and down gently in a limited range
    groupRef.current.position.y = initialY + Math.sin(t * 0.3) * .7;

    // Fixed position Z with slight drifting for depth
    groupRef.current.position.z = initialZ + Math.cos(t * 0.5) * 0.15;

    // Always face forward (no rotation)
    groupRef.current.rotation.set(0, 0, 0);
  }
});

  useEffect(() => {
    if (actions?.hover) {
      actions.hover.play();
    }
  }, [actions]);

  return (
    <group ref={groupRef} dispose={null}>
      <group name="Scene">
        <group name="RootNode0" scale={scale}>
          <group name="geo1" />
          <group name="skeletal3">
            <skinnedMesh
              name="butterfly2"
              geometry={nodes.butterfly2.geometry}
              material={clonedMaterials["Material_0.007"]}
              skeleton={nodes.butterfly2.skeleton}
            />
            <primitive object={nodes.root_jnt4} />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(FlayModel);

export default Butterfly;
