export default class {
   constructor(canvas) {
      this.canvas = canvas
      this.createScene()
      this.setEnvironment()
   }

   createScene() {
      const engine = new BABYLON.Engine(this.canvas, true)
      this.scene = new BABYLON.Scene(engine)
      this.scene.ambientColor = new BABYLON.Color3(1,1,1);
      // BABYLON.SceneLoader.ShowLoadingScreen = false;
      engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }


   setEnvironment() {
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", this.scene)
      this.scene.environmentTexture = hdr
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1)
   }
}