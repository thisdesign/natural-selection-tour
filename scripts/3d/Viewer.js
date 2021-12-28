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
    scene.imageProcessingConfiguration.contrast = 1.2
    scene.imageProcessingConfiguration.exposure = 3

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
    light.position = BABYLON.Vector3(0, 0, 10)

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
      this.modelUrl =
        'https://prismic-io.s3.amazonaws.com/naturalselectiontour/86e0915e-fe1f-40ef-b6b5-f4a4eeb64a47_3098_Mountain_v03.glb' // modelUrl

      const self = this
      BABYLON.SceneLoader.ImportMesh(
        '',
        '',
        this.modelUrl,
        this.scene,
        function (scene) {
          const MTN = self.scene.meshes[1]
          MTN.rotationQuaternion = null
          // MTN.position = new BABYLON.Vector3(0, -1, 0)
          MTN.rotation = new BABYLON.Vector3(0, 0, Math.PI * 1.25)
          MTN.scaling = new BABYLON.Vector3(0.005, 0.005, 0.005)
          resolve()
        },
      )
    })
  }
}

export default new Viewer()
