import {
  Mesh,
  BoxBufferGeometry,
  MeshStandardMaterial,
  SphereBufferGeometry,
  CylinderBufferGeometry,
  Object3D
} from 'three'

export const basicObjectList: Object3D[] = []

export const box: Mesh = new Mesh(
  new BoxBufferGeometry(10, 10, 10),
  new MeshStandardMaterial({ color: 'rgb(255, 0, 0)'})
)

box.position.x = -10

export const sphere: Mesh = new Mesh(
  new SphereBufferGeometry(5),
  new MeshStandardMaterial()
)

sphere.position.x = 10

export const cylinder: Mesh = new Mesh(
  new CylinderBufferGeometry(5, 5, 10, 32, 5),
  new MeshStandardMaterial()
)

cylinder.position.z = 10

export const cylinder2: Mesh = new Mesh(
  new CylinderBufferGeometry(5, 5, 10, 32, 5),
  new MeshStandardMaterial()
)

cylinder2.position.z = -10

basicObjectList.push(box, sphere, cylinder, cylinder2)