/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/park_map.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CameraAndLight from "./CameraAndLight";
import FlowersWrapper from "../../Flowers/FlowersWrapper";

type GLTFResult = GLTF & {
  nodes: {
    Water: THREE.Mesh;
    Base_Ground: THREE.Mesh;
    Rock: THREE.Mesh;
    Grass004: THREE.Mesh;
    Bench: THREE.Mesh;
    Vert001: THREE.Mesh;
    Vert002: THREE.Mesh;
    Vert004: THREE.Mesh;
    Vert005: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Tree1: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube035: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube037: THREE.Mesh;
    Cube038: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube040: THREE.Mesh;
    Cube041: THREE.Mesh;
    Cube042: THREE.Mesh;
    Cube043: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle001_3: THREE.Mesh;
    Rock004: THREE.Mesh;
    Grass005: THREE.Mesh;
    Grass006: THREE.Mesh;
    Bg: THREE.Mesh;
    Base_Grass: THREE.Mesh;
    Rock006: THREE.Mesh;
    Grass012: THREE.Mesh;
    Grass014: THREE.Mesh;
    Grass015: THREE.Mesh;
    Tree1001: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube019: THREE.Mesh;
    Tree1002: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube029: THREE.Mesh;
    Tree1003: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube034: THREE.Mesh;
    Cube044: THREE.Mesh;
    Cube045: THREE.Mesh;
    Cube046: THREE.Mesh;
    Cube047: THREE.Mesh;
    Cube048: THREE.Mesh;
    Cube049: THREE.Mesh;
    Tree1004: THREE.Mesh;
    Cube050: THREE.Mesh;
    Cube051: THREE.Mesh;
    Cube052: THREE.Mesh;
    Cube053: THREE.Mesh;
    Cube054: THREE.Mesh;
    Cube055: THREE.Mesh;
    Cube056: THREE.Mesh;
    Cube057: THREE.Mesh;
    Cube058: THREE.Mesh;
    Cube059: THREE.Mesh;
    Bench002: THREE.Mesh;
  };
  materials: {
    Water: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
    ["Rock.001"]: THREE.MeshStandardMaterial;
    ["Grass.003"]: THREE.MeshStandardMaterial;
    Wood: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    Light: THREE.MeshStandardMaterial;
    Tree: THREE.MeshStandardMaterial;
    leaf2: THREE.MeshStandardMaterial;
    Rock: THREE.MeshStandardMaterial;
    ["Grass.001"]: THREE.MeshStandardMaterial;
    Bg: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
  };
};

export function BaseGrass(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    `${process.env.PUBLIC_URL}/models/park_map.glb`
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Base_Grass.geometry}
        material={materials.Grass}
        position={[-0.31, -0.15, 4.52]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 2.09]}
        // castShadow={true}
        receiveShadow={true}
        userData={{ ground: true }}
      />
    </group>
  );
}

function BaseGrassAndFlowers({
  page,
  otherUserId,
}: {
  page?: string;
  otherUserId?: number;
}) {
  return (
    <>
      <BaseGrass />
      <FlowersWrapper page={page} otherUserId={otherUserId} />
    </>
  );
}

export default BaseGrassAndFlowers;
