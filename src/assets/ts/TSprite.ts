import { Sprite, SpriteMaterial } from "three";

export const testSprite = new Sprite(
  new SpriteMaterial({
    color: "red",
  })
);

testSprite.position.set(30, 15, 0);
