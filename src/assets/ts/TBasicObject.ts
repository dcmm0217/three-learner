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
  Material
} from 'three'

export const basicObjectList: Object3D[] = []

// 地面
const stage: Mesh = new Mesh(
  new BoxBufferGeometry(200, 10, 200),
  new MeshStandardMaterial({color: 'rgb(0, 75, 75)'})
)

console.log((stage.material as MeshStandardMaterial).color)

stage.position.y = -5

// 立方体
const box: Mesh = new Mesh(
  new BoxBufferGeometry(20, 20, 20),
  new MeshStandardMaterial({color: 'red'})
)

box.position.y = 10

basicObjectList.push(stage, box)