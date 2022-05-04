import { Group, Mesh, MeshStandardMaterial, PlaneBufferGeometry } from "three";
import { pictureTexture, tipsTexture } from "./TTextures";
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

  // 标签
  const tips: Mesh = new Mesh(
    new PlaneBufferGeometry(16, 9),
    new MeshStandardMaterial({
      map: tipsTexture,
    })
  );

  tips.position.set(0, -25, 0);

  group.add(tips);

  framePromise
    .then((frame) => {
      // 相框
      group.add(frame);

      group.position.y = 120;
      group.position.z = -70;

      group.scale.set(2, 2, 2);
      resolve(group);
    })
    .catch((err) => {
      reject(err);
    });
});
