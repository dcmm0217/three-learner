import {
  Mesh,
  BoxBufferGeometry,
  MeshStandardMaterial,
  SphereBufferGeometry,
  CylinderBufferGeometry,
  Object3D,
  Line,
  Points,
  PointsMaterial,
  Material,
  PlaneBufferGeometry,
  Color,
} from "three";

export const basicObjectList: Object3D[] = [];

// 地面
const stage: Mesh = new Mesh(
  new BoxBufferGeometry(1000, 10, 400),
  new MeshStandardMaterial({
    color: "rgb(0, 75, 75)",
    roughness: 0,
  })
);

stage.castShadow = true;
stage.receiveShadow = true;

stage.position.y = -5;

// 墙面
export const wall: Mesh = new Mesh(
  new BoxBufferGeometry(1000, 200, 10),
  new MeshStandardMaterial({
    color: "white",
  })
);
wall.position.y = 100;
wall.position.z = -80;

wall.updateMatrix();
wall.updateMatrixWorld();

wall.addEventListener("click", () => {
  console.log("wall click");
});

basicObjectList.push(stage, wall);
