import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export function CameraControls() {
  const { camera, gl: { domElement } } = useThree();

  const controls = useRef();

  useFrame(() => controls.current.update());

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
}
