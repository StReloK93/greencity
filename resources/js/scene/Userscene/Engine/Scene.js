export default class {
   constructor(canvas) {
      this.canvas = canvas
      this.createScene()
   }

   createScene() {
      const engine = new BABYLON.Engine(this.canvas, true)
      engine.enableOfflineSupport = false;
      this.scene = new BABYLON.Scene(engine)
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1)
      this.scene.autoClear = false; // Color buffer
      this.scene.autoClearDepthAndStencil = false; // Depth and stencil, obviously

      engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

}