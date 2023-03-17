// three
import * as THREE from "three";
import { useGLTF, OrthographicCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { SMain } from "./styles";
import F03 from "../../Flowers/F03";
import F10 from "../../Flowers/F10";
import NewF10 from "../../Flowers/Newf10";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        {/* <Tulip2 /> */}
        {/* <F03 /> */}
        {/* <F10 /> */}
        <NewF10 />
      </Suspense>
    </>
  );
};

const DiaryFlower = () => {
  return (
    <SMain style={{}}>
      <Canvas shadows={true}>
        {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
        <OrbitControls
          maxPolarAngle={Math.PI / 2.8}
          minPolarAngle={Math.PI / 2.8}
          // minZoom={20}
          // maxZoom={20}
        />

        <Scene></Scene>
      </Canvas>
    </SMain>
  );
};
export default DiaryFlower;
