export default class {
   constructor(canvas) {
      this.MeshBuilderScene(canvas)
   }

   MeshBuilderScene(canvas) {
      BABYLON.Scene.DoubleClickDelay = 600
      this.engine = new BABYLON.Engine(canvas, true)
      this.scene = new BABYLON.Scene(this.engine)

      this.engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { this.engine.resize() })
   }
}