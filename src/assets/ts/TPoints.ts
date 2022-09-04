import {
  BoxBufferGeometry,
  CanvasTexture,
  Points,
  PointsMaterial,
} from "three";
import { TCanvasEditor } from "./TCanvasEditor";

const canvasEditor = new TCanvasEditor().draw((ctx) => {
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.arc(256, 256, 200, 0, Math.PI * 2);
  ctx.fill();
});
// .preview();

const mapTexture = new CanvasTexture(canvasEditor.canvas);

export const pointsPartical: Points = new Points(
  new BoxBufferGeometry(20, 20, 20, 10, 10, 10),
  new PointsMaterial({
    color: "rgb(0, 200, 200)",
    alphaMap: mapTexture,
    transparent: true,
    sizeAttenuation: false,
    size: 5,
  })
);

pointsPartical.position.set(0, 15, 0);
