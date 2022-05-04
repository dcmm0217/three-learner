import {
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  Sprite,
  SpriteMaterial,
} from "three";
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
  // const tips: Mesh = new Mesh(
  //   new PlaneBufferGeometry(16, 9),
  //   new MeshBasicMaterial({
  //     map: tipsTexture,
  //   })
  // );

  const tips: Sprite = new Sprite(
    new SpriteMaterial({
      map: tipsTexture,
      // sizeAttenuation: false,
      // depthWrite: false,
      // depthTest: false,
    })
  );

  tips.position.set(0, 45, 0);
  tips.scale.set(16, 9, 1);

  // tips.onBeforeRender = (render, scene, camera) => {
  //   tips.lookAt(camera.position);
  // };

  group.add(tips);

  framePromise
    .then((frame) => {
      // 相框
      group.add(frame);

      group.position.y = 140;
      group.position.z = -70;

      group.scale.set(2, 2, 2);
      resolve(group);
    })
    .catch((err) => {
      reject(err);
    });
});
