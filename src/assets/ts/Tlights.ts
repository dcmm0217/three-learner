import {
  AmbientLight,
  Object3D,
  PointLight
} from 'three'

export const LightsList: Object3D[] = []

const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 0.3)

export const pointLight: PointLight = new PointLight(
  'rgb(255, 0, 0)',
  0.7,
  50,
  0.1
)

pointLight.position.set(20, 20, 20)

LightsList.push(ambientLight, pointLight)