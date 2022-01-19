import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

class Viewer {
  constructor() {
    this.data = {}
  }

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

    const camera = new BABYLON.ArcRotateCamera(
      'Camera',
      0,
      0,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene,
    )
    camera.attachControl(this.canvas, false)
    camera.inputs.remove(camera.inputs.attached.mousewheel)
    camera.alpha = Math.PI * 0.25
    camera.lowerAlphaLimit = -Math.PI * 0.25
    camera.upperAlphaLimit = Math.PI * 0.25

    camera.beta = Math.PI * 0.45
    camera.lowerBetaLimit = Math.PI * 0.3
    camera.upperBetaLimit = Math.PI * 0.45

    camera.radius = 4.5
    camera.lowerRadiusLimit = 4.5
    camera.upperRadiusLimit = 4.5

    const light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      scene,
    )
    light.position = BABYLON.Vector3(0, 0, 1)
    light.intensity = 0.45

    this.scene = scene

    return { light, camera }
  }

  laodModel(key, modelUrl) {
    return new Promise((resolve) => {
      if (key === this.key) {
        resolve()
        return
      }

      if (this.data[this.key]) {
        this.hideModel(this.key)
      }

      this.key = key
      this.modelUrl = modelUrl
      // this.modelUrl =
      // 'http://storage.googleapis.com/nst_media/GLB/3098_Mountain_v11.glb'
      // 'http://storage.googleapis.com/nst_media/GLB/3098_Mountain_v08.glb'
      // 'https://storage.googleapis.com/nst_media/GLB/3098_Mountain_v12.glb'

      if (this.data[this.key] !== undefined) {
        this.showModel(this.key)
        resolve()
      } else {
        const SELF = this
        BABYLON.SceneLoader.ImportMesh(
          '',
          '',
          this.modelUrl,
          this.scene,
          function (scene) {
            SELF.COT = new BABYLON.TransformNode('COT')
            scene[0].parent = SELF.COT

            // const MTN = scene[0]
            const SCALE = 0.005
            SELF.COT.rotationQuaternion = null
            SELF.COT.position = new BABYLON.Vector3(0, 0.7, 0)
            SELF.COT.rotation = new BABYLON.Vector3(0, Math.PI * 0.75, 0)
            SELF.COT.scaling = new BABYLON.Vector3(SCALE, SCALE, SCALE)
            SELF.data[SELF.key] = SELF.COT
            resolve()
          },
        )
      }
    })
  }

  showModel(key) {
    // show model
    // reset camera
  }

  hideModel(key) {
    // hide model
  }
}

export default new Viewer()
