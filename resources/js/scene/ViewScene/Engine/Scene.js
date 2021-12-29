export default class {
   constructor() {
      this.createScene()
      this.setEnvironment()
   }

   createScene() {
      const engine = new BABYLON.Engine(canvas, true)
      window.scene = new BABYLON.Scene(engine)

      engine.runRenderLoop(function () {scene.render()})
      window.addEventListener("resize", () => { engine.resize() })
   }

   setEnvironment(){
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", scene)
      scene.environmentTexture = hdr
      scene.clearColor = new BABYLON.Color3(0.8,0.8,0.8,1)
   }
}