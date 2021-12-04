import { Group, Mesh } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

const objLoader: OBJLoader = new OBJLoader()
const mtlLoader: MTLLoader = new MTLLoader()

export const framePromise = new Promise<Group>((resolve, reject) => {
  mtlLoader.loadAsync('/frame.mtl').then(materialCreator => {
    objLoader
    .setMaterials(materialCreator)
    .loadAsync('/frame.obj')
    .then(group => {
      resolve(group)
    }).catch(err => {
      reject(err)
    })
  }).catch(err => {
    reject(err)
  })
})

