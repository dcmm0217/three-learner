import {
  Mesh,
  BoxBufferGeometry,
  MeshStandardMaterial,
  SphereBufferGeometry,
  CylinderBufferGeometry,
  Object3D,
  Line,
  Points,
  PointsMaterial
} from 'three'

export const basicObjectList: Object3D[] = []

const material = new MeshStandardMaterial({color: 'blue'})
const geometry = new BoxBufferGeometry(10, 10, 10)

export const box: Mesh = new Mesh(
  geometry,
  material
)

box.position.x = -10

export const sphere: Line = new Line( // 网格物体
  geometry, // 几何
  material
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