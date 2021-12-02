import * as BABYLON from 'babylonjs'

class Viewer {
  init(canvas) {
    this.canvas = canvas
    this.engine = new BABYLON.Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    })
    this.objects = this.createScene()
    this.engine.runRenderLoop(() => {
      this.objects.scene.render()
    })
  }

  createScene() {
    const scene = new BABYLON.Scene(this.engine)
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0)

    // const camera = new BABYLON.FreeCamera(
    //   'camera1',
    //   new BABYLON.Vector3(0, 5, -10),
    //   scene,
    // )
    // camera.setTarget(BABYLON.Vector3.Zero())
    // camera.attachControl(this.canvas, false)

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
    camera.alpha = 0
    camera.lowerAlphaLimit = -Math.PI * 0.5
    camera.upperAlphaLimit = Math.PI * 0.5

    camera.beta = Math.PI * 0.2
    camera.lowerBetaLimit = Math.PI * 0.2
    camera.upperBetaLimit = Math.PI * 0.45

    camera.radius = 11
    camera.lowerRadiusLimit = 11
    camera.upperRadiusLimit = 11

    const light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      scene,
    )

    const sphere = BABYLON.Mesh.CreateSphere(
      'sphere1',
      16,
      2,
      scene,
      false,
      BABYLON.Mesh.FRONTSIDE,
    )
    sphere.position.y = 1

    const ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene)

    return { scene, light, camera, sphere, ground }
  }
}

export default new Viewer()
