import {
  AxesHelper,
  GridHelper,
  Object3D,
  PointLightHelper,
  SpotLightHelper
} from 'three'

import { pointLight, spotLight } from './Tlights'

export const helperList: Object3D[] = []

const axesHelper: AxesHelper = new AxesHelper(500)
axesHelper.raycast = () => {}

const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)')
gridHelper.raycast = () => {}

const pointLightHelper: PointLightHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color)
pointLightHelper.raycast = () => {}

const spotLightHelper: SpotLightHelper = new SpotLightHelper(spotLight, spotLight.color)
spotLightHelper.raycast = () => {}

helperList.push(axesHelper, spotLightHelper, gridHelper)