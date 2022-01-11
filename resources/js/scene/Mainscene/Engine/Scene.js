export default class {
   constructor() {
      this.createScene()
      this.setEnvironment()
   }

   createScene() {
      const engine = new BABYLON.Engine(canvas, true)
      window.scene = new BABYLON.Scene(engine)

      this.PickingMesh()
      engine.runRenderLoop(function () { scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }


   PickingMesh() {
      scene.onPointerDown = (event, pick) => {
         console.log(pick.pickedMesh.name);
      }
   }

   setEnvironment() {
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", scene)
      scene.environmentTexture = hdr
      scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1)
   }
}