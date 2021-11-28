import { BufferAttribute, BufferGeometry, Color, DoubleSide, Mesh, MeshStandardMaterial, Object3D } from "three";
import { pictureTexture } from "./TTextures";
import {VertexNormalsHelper} from 'three/examples/jsm/helpers/VertexNormalsHelper'

export const codeModelList: Object3D[] = []

const size: number = 10

const points: Float32Array = new Float32Array([
  -size, size, size,
  size, size, size,
  size, size, -size,
  -size, size, -size,

  -size, -size, size,
  size, -size, size,
  size, -size, -size,
  -size, -size, -size,
])

const index: number[] = [
  0, 1, 2,
  2, 3, 0,

  0, 4, 5,
  5, 1, 0,

  1, 5, 6,
  6, 2, 1,

  2, 6, 7,
  7, 3, 2,

  0, 7, 4,
  0, 3, 7,

  4, 6, 5,
  7, 6, 4
]

const uv: Float32Array = new Float32Array([
  0, 0,
  1, 0,
  1, 1,
  0, 1,

  0, 0,
  1, 0,
  1, 1,
  0, 1,
])

const geometry: BufferGeometry = new BufferGeometry()

geometry.setAttribute('position', new BufferAttribute(points, 3))
geometry.setAttribute('normal', new BufferAttribute(points, 3))
geometry.setAttribute('uv', new BufferAttribute(uv, 2))

geometry.setIndex(index)

const material: MeshStandardMaterial = new MeshStandardMaterial({
  color: 'white',
  // map: pictureTexture
})

const codeBox: Mesh = new Mesh(geometry, material)

codeBox.position.y = 10

// codeBox.rotation.x = Math.PI / 180 * 90

const boxNormalHelper = new VertexNormalsHelper(codeBox, 10, new Color('blue').getHex())

codeModelList.push(codeBox, boxNormalHelper)