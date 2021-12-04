import { Texture, TextureLoader } from "three";

const textureLoader: TextureLoader = new TextureLoader()

export const pictureTexture: Texture = textureLoader.load('/1.jpg')

export const frameColorTexture = textureLoader.load('/WoodFloor024_1K_Color.jpg')
export const frameRoughnessTexture = textureLoader.load('/WoodFloor024_1K_Roughness.jpg')
export const frameDispTexture = textureLoader.load('/WoodFloor024_1K_Displacement.jpg')