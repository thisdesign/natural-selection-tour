import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

class Viewer {
  init(canvas) {
    this.canvas = canvas
    this.engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    })
    this.objects = this.createScene()
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine)
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0)
    scene.imageProcessingConfiguration.toneMappingEnabled = true
    scene.imageProcessingConfiguration.contrast = 1
    scene.imageProcessingConfiguration.exposure = 3.5

    // scene.debugLayer.show({
    //   embedMode: true,
    //   globalRootSearch: document.getElementsByClassName('.app'),
    // })

    const camera = new BABYLON.ArcRotateCamera(
      'Camera',
      0,
      0,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene,
    )
    // camera.setPosition(new BABYLON.Vector3(0, Math.PI, 11))
    camera.attachControl(this.canvas, false)
    camera.inputs.remove(camera.inputs.attached.mousewheel)
    camera.alpha = 0
    camera.lowerAlphaLimit = -Math.PI * 0.25
    camera.upperAlphaLimit = Math.PI * 0.25

    camera.beta = Math.PI * 0.3
    camera.lowerBetaLimit = Math.PI * 0.2
    camera.upperBetaLimit = Math.PI * 0.45

    camera.radius = 8
    camera.lowerRadiusLimit = 8
    camera.upperRadiusLimit = 8

    const light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      scene,
    )
    light.position = BABYLON.Vector3(0, 0, 1)

    // const sphere = BABYLON.Mesh.CreateSphere(
    //   'sphere1',
    //   16,
    //   2,
    //   scene,
    //   false,
    //   BABYLON.Mesh.FRONTSIDE,
    // )
    // sphere.position.y = 1

    // const ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene)

    this.scene = scene

    return { light, camera }
  }

  laodModel(modelUrl) {
    return new Promise((resolve) => {
      this.modelUrl = modelUrl
      // this.modelUrl = 'http://localhost:8888/mountain.glb'

      const SCALE = 0.005

      BABYLON.SceneLoader.ImportMesh(
        '',
        '',
        this.modelUrl,
        this.scene,
        function (scene) {
          const MTN = scene[1]
          MTN.rotationQuaternion = null
          // MTN.position = new BABYLON.Vector3(0, -1, 0)
          MTN.rotation = new BABYLON.Vector3(-Math.PI * 0.5, Math.PI * 1.25, 0)
          MTN.scaling = new BABYLON.Vector3(SCALE, SCALE, SCALE)
          resolve()
        },
      )
    })
  }
}

export default new Viewer()
