import { Group, Mesh, MeshStandardMaterial, PlaneBufferGeometry } from "three";
import { pictureTexture } from "./TTextures";
import { framePromise } from "./TLoadModel";

export const groupPromise = new Promise<Group>((resolve, reject) => {
  const group = new Group();

  // 图片
  const picture: Mesh = new Mesh(
    new PlaneBufferGeometry(192, 108),
    new MeshStandardMaterial({
      map: pictureTexture,
    })
  );

  picture.scale.set(0.3, 0.3, 0.3);

  group.add(picture);

  framePromise
    .then((frame) => {
      group.add(frame);

      group.position.y = 120;
      group.position.z = -70;
      resolve(group);
    })
    .catch((err) => {
      reject(err);
    });
});
