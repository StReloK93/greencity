export default class {
   constructor() {
      this.createScene()
      this.setEnvironment()
   }

   createScene() {
      const engine = new BABYLON.Engine(canvas, true)
      window.scene = new BABYLON.Scene(engine)

      const pointsX = [
         new BABYLON.Vector3(-100, 0, 0),
         new BABYLON.Vector3(100, 0, 0),
      ]

      const colorsX = [
         new BABYLON.Color4(1, 0, 0, 1),
         new BABYLON.Color4(1, 0, 0, 1),
      ]
      let linex = BABYLON.MeshBuilder.CreateLines("lineX", { points: pointsX, colors: colorsX });
      linex.position.y = 0.002
      const pointsZ = [
         new BABYLON.Vector3(0, 0, -100),
         new BABYLON.Vector3(0, 0, 100),
      ]

      const colorZ = [
         new BABYLON.Color4(0, 0, 1, 1),
         new BABYLON.Color4(0, 0, 1, 1),
      ]
      let linez = BABYLON.MeshBuilder.CreateLines("lineZ", { points: pointsZ, colors: colorZ });
      linez.position.y = 0.002

      engine.runRenderLoop(function () {scene.render()})
      window.addEventListener("resize", () => { engine.resize() })
   }

   setEnvironment(){
      let hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", scene)
      scene.environmentTexture = hdr
      scene.clearColor = new BABYLON.Color3(0.8,0.8,0.8,1)
   }
}