export default class {
   constructor(canvas) {
      this.canvas = canvas
      this.createScene()
   }

   createScene() {
      const engine = new BABYLON.Engine(this.canvas, true)
      this.scene = new BABYLON.Scene(engine)
      this.scene.ambientColor = new BABYLON.Color3(1,1,1);
      // BABYLON.SceneLoader.ShowLoadingScreen = false;
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1)
      engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

}