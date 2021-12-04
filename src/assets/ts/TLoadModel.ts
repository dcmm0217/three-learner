import { Group, Mesh, MeshStandardMaterial } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { frameColorTexture, frameDispTexture, frameRoughnessTexture } from './TTextures'

const objLoader: OBJLoader = new OBJLoader()

export const framePromise = objLoader.loadAsync('/frame.obj')

export const frameMaterail: MeshStandardMaterial = new MeshStandardMaterial({
  map: frameColorTexture,
  roughnessMap: frameRoughnessTexture,
  bumpMap: frameDispTexture
})

