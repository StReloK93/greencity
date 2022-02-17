export default class {
   constructor() {
      this.createScene()
   }

   createScene() {
      const engine = new BABYLON.Engine(canvas, true)
      window.scene = new BABYLON.Scene(engine)

      engine.runRenderLoop(function () { scene.render() })
      scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1)
      window.addEventListener("resize", () => { engine.resize() })
   }



      
   
}