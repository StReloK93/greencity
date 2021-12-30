export default class {
   constructor(canvas) {
      this.MeshBuilderScene(canvas)
   }

   MeshBuilderScene(canvas) {
      const engine = new BABYLON.Engine(canvas, true)
      this.scene = new BABYLON.Scene(engine)
      // this.scene.debugLayer.show({
      //    embedMode: true,
      // });
      engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }
}