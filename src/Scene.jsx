import { useFrame, useThree } from "@react-three/fiber";
import {
  CubeCamera,
  CubeTextureLoader,
  LinearMipMapLinearFilter,
  RGBFormat,
  WebGLCubeRenderTarget,
} from "three";

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ]);

  scene.background = texture;

  return null;
}

function Sphere() {
  const { scene, gl } = useThree();

  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipMapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1.5, 32, 32]} />
      <meshBasicMaterial
        envMap={cubeCamera.renderTarget.texture}
      />
    </mesh>
  );
}

export function Scene() {
  return (
    <>
      <Sphere />
      <SkyBox />
    </>
  );
}
