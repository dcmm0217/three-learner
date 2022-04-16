import {
  Camera,
  EventDispatcher,
  Object3D,
  Raycaster,
  Scene,
  Vector2,
  Intersection,
} from "three";

export interface TEventManagerParameters {
  dom: HTMLCanvasElement;
  scene: Scene;
  camera: Camera;
}

export class TEventManager extends EventDispatcher {
  private raycaster: Raycaster = new Raycaster();
  private mouse: Vector2 = new Vector2();
  private dom: HTMLCanvasElement;
  private scene: Scene;
  private camera: Camera;
  constructor(params: TEventManagerParameters) {
    super();

    this.dom = params.dom;
    this.scene = params.scene;
    this.camera = params.camera;

    const mouse = this.mouse;
    const raycaster = this.raycaster;
    const dom = params.dom;

    let cacheObject: Object3D | null = null;

    dom.addEventListener("mousedown", (event) => {
      // 选取物体的操作
      raycaster.setFromCamera(mouse, this.camera);
      const intersection = raycaster.intersectObjects(this.scene.children);
      this.dispatchEvent({
        type: "mousedown",
        intersection,
      });
      if (intersection.length) {
        const object = intersection[0].object;
        object.dispatchEvent({
          type: "mousedown",
        });
      }
    });

    dom.addEventListener("mousemove", (event) => {
      mouse.x = (event.offsetX / dom.offsetWidth) * 2 - 1;
      mouse.y = (-event.offsetY * 2) / dom.offsetHeight + 1;

      // 选取物体的操作
      raycaster.setFromCamera(mouse, this.camera);

      const intersection = raycaster.intersectObjects(this.scene.children);

      this.dispatchEvent({
        type: "mousemove",
        intersection,
      });
      if (intersection.length) {
        const object = intersection[0].object;

        if (object !== cacheObject) {
          if (cacheObject) {
            cacheObject.dispatchEvent({
              type: "mouseleave",
            });
          }
          object.dispatchEvent({
            type: "mouseenter",
          });
        } else if (object === cacheObject) {
          object.dispatchEvent({
            type: "mousemove",
          });
        }
        cacheObject = object;
      } else {
        if (cacheObject) {
          cacheObject.dispatchEvent({
            type: "mouseleave",
          });
        }
        cacheObject = null;
      }
    });

    dom.addEventListener("mouseup", (event) => {
      // 选取物体的操作
      raycaster.setFromCamera(mouse, this.camera);
      const intersection = raycaster.intersectObjects(this.scene.children);

      this.dispatchEvent({
        type: "mouseup",
        intersection,
      });
      if (intersection.length) {
        const object = intersection[0].object;
        object.dispatchEvent({
          type: "mouseup",
        });
      }
    });

    dom.addEventListener("click", (event) => {
      // 选取物体的操作
      raycaster.setFromCamera(mouse, this.camera);
      const intersection = raycaster.intersectObjects(this.scene.children);

      this.dispatchEvent({
        type: "click",
        intersection,
      });
      if (intersection.length) {
        const object = intersection[0].object;
        object.dispatchEvent({
          type: "click",
        });
      }
    });
  }
}
