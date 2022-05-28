import {
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  Sprite,
  SpriteMaterial,
} from "three";
import {
  pictureTexture,
  pricturesTextureList,
  tipsTexture,
  tipsTextureList,
} from "./TTextures";
import { framePromise } from "./TLoadModel";
import pirturesConfigure from "../json/pictures.json";

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

  // const tips: Sprite = new Sprite(
  //   new SpriteMaterial({
  //     map: tipsTexture,
  //     // sizeAttenuation: false,
  //     // depthWrite: false,
  //     // depthTest: false,
  //   })
  // );

  tips.position.set(0, -30, 0);
  // tips.scale.set(16, 9, 1);

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

export const groupListPromise = new Promise<Group[]>((resolve, reject) => {
  framePromise
    .then((frame) => {
      const groupList: Group[] = [];
      const spacing = 200;
      const distance = ((pricturesTextureList.length - 1) * spacing) / 2;
      const pictureGeometry = new PlaneBufferGeometry(192, 108);
      const tipsGeometry = new PlaneBufferGeometry(16, 9);

      pirturesConfigure.forEach((elem, i, arr) => {
        const pictureTexture = pricturesTextureList[i];
        const tipsTexture = tipsTextureList[i];
        const group = new Group();

        // 图片
        const picture: Mesh = new Mesh(
          pictureGeometry,
          new MeshStandardMaterial({
            map: pictureTexture,
          })
        );

        picture.scale.set(0.3, 0.3, 0.3);

        group.add(picture);

        // 标签
        const tips: Mesh = new Mesh(
          tipsGeometry,
          new MeshStandardMaterial({
            map: tipsTexture,
          })
        );

        tips.position.set(0, -30, 0);

        group.add(tips);

        // 相框
        const newFrame = frame.clone();

        group.add(newFrame);

        group.position.y = 140;
        group.position.z = -70;
        group.position.x = i * spacing - distance;

        group.scale.set(2, 2, 2);

        groupList.push(group);
      });

      resolve(groupList);
    })
    .catch((err) => {
      reject(err);
    });
});
