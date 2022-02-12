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
  Color
} from 'three'

import { pictureTexture } from './TTextures'

export const basicObjectList: Object3D[] = []

// 地面
const stage: Mesh = new Mesh(
  new BoxBufferGeometry(600, 10, 400),
  new MeshStandardMaterial({
    color: 'rgb(0, 75, 75)',
    roughness: 0
  })
)
stage.raycast = () => {}
stage.castShadow = true
stage.receiveShadow = true

stage.position.y = -5


// 图片
const prcture: Mesh = new Mesh(
  new PlaneBufferGeometry(192, 108),
  new MeshStandardMaterial({
    map: pictureTexture
  })
)

prcture.position.y = 120
prcture.position.z = -70
prcture.scale.set(0.3, 0.3, 0.3)

// 墙面
export const wall: Mesh = new Mesh(
  new BoxBufferGeometry(600, 200, 10),
  new MeshStandardMaterial({
    color: 'white'
  })
)
wall.position.y = 100
wall.position.z = -80

wall.updateMatrix()
wall.updateMatrixWorld()

wall.addEventListener('mouseenter', () => {
  (wall.material as MeshStandardMaterial).color = new Color('red')
})

wall.addEventListener('mouseleave', () => {
  (wall.material as MeshStandardMaterial).color = new Color('white')
})

basicObjectList.push(stage, wall, prcture)