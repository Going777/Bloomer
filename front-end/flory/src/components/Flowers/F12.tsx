/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/flowers/f12.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PositionType } from "../../models/garden/gardenType";
import { useLocation } from "react-router-dom";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    f12_1: THREE.Mesh;
    f12_2: THREE.Mesh;
    f12_3: THREE.Mesh;
    f12_4: THREE.Mesh;
  };
  materials: {
    stem: THREE.MeshStandardMaterial;
    ["Material.046"]: THREE.MeshStandardMaterial;
    ["Material.047"]: THREE.MeshStandardMaterial;
    ["Material.048"]: THREE.MeshStandardMaterial;
  };
};

export function F12(props: JSX.IntrinsicElements["group"] & PositionType) {
  const { x, y, z } = props.flowerPosition;
  const location = useLocation();
  const modelRef = useRef<any>();
  useFrame(() => {
    if (!location.pathname.includes("garden")) {
      const worldYAxis = new THREE.Vector3(0, 1, 0);
      modelRef.current!.rotateOnWorldAxis(worldYAxis, 0.01);
    }
  });

  const { nodes, materials } = useGLTF("/models/flowers/f12.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[x, y, z]}
        rotation={[-0.73, 0.83, 0.55]}
        scale={0.17}
        ref={location.pathname.includes("garden") ? undefined : modelRef}
      >
        <mesh geometry={nodes.f12_1.geometry} material={materials.stem} />
        <mesh
          geometry={nodes.f12_2.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          geometry={nodes.f12_3.geometry}
          material={materials["Material.047"]}
        />
        <mesh
          geometry={nodes.f12_4.geometry}
          material={materials["Material.048"]}
        />
      </group>
    </group>
  );
}

export default F12;
