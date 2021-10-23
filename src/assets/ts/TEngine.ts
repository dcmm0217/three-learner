import { AmbientLight, AxesHelper, BoxBufferGeometry, GridHelper, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three"

export class TEngine {

  private dom: HTMLElement
  private renderer: WebGLRenderer

  private scene: Scene
  private camera: PerspectiveCamera

  constructor (dom: HTMLElement) {
    this.dom = dom
    this.renderer = new WebGLRenderer()
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)

    this.camera.position.set(20, 20 ,20)
    this.camera.lookAt(new Vector3(0, 0, 0))
    this.camera.up = new Vector3(0, 1, 0)

    dom.appendChild(this.renderer.domElement)
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)

    const box: Mesh = new Mesh(
      new BoxBufferGeometry(10, 10, 10),
      new MeshStandardMaterial({ color: 'rgb(255, 0, 0)'})
    )
    
    const ambientLight: AmbientLight = new AmbientLight('rgb(255, 255, 255)', 1)

    const axesHelper: AxesHelper = new AxesHelper(500)
    const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)')

    this.scene.add(box)
    this.scene.add(ambientLight)
    this.scene.add(axesHelper)
    this.scene.add(gridHelper)
    // this.renderer.setClearColor('rgb(255, 255, 255)')
    // this.renderer.clearColor()
    this.renderer.render(this.scene, this.camera)
  }
}