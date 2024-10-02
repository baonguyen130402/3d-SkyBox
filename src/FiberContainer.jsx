import { Canvas } from "@react-three/fiber";

import { Scene } from "./Scene";
import { CameraControls } from "./CameraControls";

export function FiberContainer() {
  return (
    <Canvas shadows className="overflow-hidden">
      <CameraControls />
      <Scene />
    </Canvas>
  );
}
