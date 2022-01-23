import { 
  AmbientLight,
  AxesHelper,
  BoxBufferGeometry,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
  MOUSE, 
  Object3D,
  Vector2,
  Raycaster} from "three"

  import Stats from 'three/examples/jsm/libs/stats.module'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { TransformControls } from 'three/examples/jsm/controls/TransformControls'

export class TEngine {

  private dom: HTMLElement
  private renderer: WebGLRenderer
  private transformControls: TransformControls

  private raycaster: Raycaster

  private mouse: Vector2

  private scene: Scene
  private camera: PerspectiveCamera

  constructor (dom: HTMLElement) {
    this.dom = dom
    const renderer = new WebGLRenderer({
      antialias: true
    })

    renderer.shadowMap.enabled = true

    const scene = new Scene()
    this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)

    this.camera.position.set(200, 200 ,200)
    this.camera.lookAt(new Vector3(0, 0, 0))
    this.camera.up = new Vector3(0, 1, 0)

    
    renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)
    
    // 初始性能监视器
    const stats = Stats()
    const statsDom = stats.domElement
    statsDom.style.position = 'fixed'
    statsDom.style.top = '0'
    statsDom.style.right = '5px'
    statsDom.style.left = 'unset'

    // 初始orbitControls
    const orbitControls: OrbitControls = new OrbitControls(this.camera, renderer.domElement)
    orbitControls.mouseButtons = {
      LEFT: null as unknown as MOUSE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.ROTATE
    }

    // 初始变换控制器
    const transformControls = new TransformControls(this.camera, renderer.domElement)
    scene.add(transformControls)

    let transing = false // 判断此次鼠标事件是否是变换事件

    transformControls.addEventListener('mouseDown', event => {
      console.log('mousedown')
      transing = true
    })

    // 初始射线发射器
    const raycaster = new Raycaster()

    // 给renderer的canvas对象添加鼠标事件
    const mouse = new Vector2()
    let x = 0
    let y = 0
    let width = 0
    let height = 0
    renderer.domElement.addEventListener('mousemove', (event) => {
      x = event.offsetX
      y = event.offsetY
      width = renderer.domElement.offsetWidth
      height = renderer.domElement.offsetHeight
      mouse.x = x / width * 2 - 1
      mouse.y = -y * 2 / height + 1
    })

    renderer.domElement.addEventListener('click', event => {
      
      if (transing) {
        transing = false
        return false
      }
      console.log('click')
      raycaster.setFromCamera(mouse, this.camera)

      const intersection = raycaster.intersectObjects(scene.children)

      if (intersection.length) {
       const object = intersection[0].object
       transformControls.attach(object)
      }
    })

    const renderFun = () => {
      orbitControls.update()

      renderer.render(scene, this.camera)
      stats.update()
      requestAnimationFrame(renderFun)
    }

    renderFun()

    dom.appendChild(renderer.domElement)
    dom.appendChild(statsDom)


    this.renderer = renderer
    this.scene = scene
    this.transformControls = transformControls
    this.mouse = mouse
  }

  addObject (...object: Object3D[]) {
    object.forEach(elem => {
      this.scene.add(elem)
    })
  }
}