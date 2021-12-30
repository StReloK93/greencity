export default class {
   constructor(canvas) {
      this.MeshBuilderScene(canvas)
      this.setEnvironment()
   }

   MeshBuilderScene(canvas) {
      const engine = new BABYLON.Engine(canvas, true)
      this.scene = new BABYLON.Scene(engine)
      this.scene.debugLayer.show({
         embedMode: true,
      });
      console.log('earcut');
      engine.runRenderLoop(() => { this.scene.render() })
      window.addEventListener("resize", () => { engine.resize() })
   }

   setEnvironment() {
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", this.scene)
      this.scene.environmentTexture = hdr
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1)
   }
}