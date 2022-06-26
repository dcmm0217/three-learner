import { Group, Material, Mesh, MeshStandardMaterial } from "three";
import { DefaultLoaderManager } from "./TLoaderManager";

export const framePromise = new Promise<Mesh>((resolve, reject) => {
  DefaultLoaderManager.addEventListener("loaded", (event) => {
    const scourceMap = event.sourceMap;
    const group = scourceMap["/frame.obj"];
    const frame: Mesh = group.children[0] as Mesh;
    (frame.material as Material).dispose();

    frame.material = new MeshStandardMaterial({
      map: scourceMap["/WoodFloor024_1K_Color.jpg"],
      roughnessMap: scourceMap["/WoodFloor024_1K_Roughness.jpg"],
      bumpMap: scourceMap["/WoodFloor024_1K_Displacement.jpg"],
    });

    frame.rotation.y = (Math.PI / 180) * -90;
    frame.scale.set(2, 2, 2);

    resolve(frame);
  });
});

// export const getFrame = async function (): Promise<Mesh | null> {
//   const group = await objLoader.loadAsync("/frame.obj");

//   if (group instanceof Group) {
//     const frame: Mesh = group.children[0] as Mesh;
//     (frame.material as Material).dispose();

//     frame.material = new MeshStandardMaterial({
//       map: frameColorTexture,
//       roughnessMap: frameRoughnessTexture,
//       bumpMap: frameDispTexture,
//     });

//     frame.position.y = 45;
//     frame.position.z = -1;
//     frame.rotation.y = (Math.PI / 180) * -90;
//     frame.scale.set(2, 2, 2);

//     return frame;
//   } else {
//     console.error(group);
//     return null;
//   }
// };
