export default class {
   constructor() {
      this.Lines()
      this.Grid()
   }

   Lines() {
      const pointsX = [
         new BABYLON.Vector3(-300, 0, 0),
         new BABYLON.Vector3(300, 0, 0),
      ]

      const colorsX = [
         new BABYLON.Color4(0.5, 0, 0, 1),
         new BABYLON.Color4(0.5, 0, 0, 1),
      ]
      let linex = BABYLON.MeshBuilder.CreateLines("lineX", { points: pointsX, colors: colorsX });
      linex.isPickable = false
      linex.position.y = 0.002
      const pointsZ = [
         new BABYLON.Vector3(0, 0, -300),
         new BABYLON.Vector3(0, 0, 300),
      ]

      const colorZ = [
         new BABYLON.Color4(0, 0, 0.5, 1),
         new BABYLON.Color4(0, 0, 0.5, 1),
      ]
      let linez = BABYLON.MeshBuilder.CreateLines("lineZ", { points: pointsZ, colors: colorZ });
      linez.isPickable = false
      linez.position.y = 0.002
   }

   Grid() {
      var groundMaterial = new BABYLON.GridMaterial("groundMaterial")
      groundMaterial.majorUnitFrequency = 1
      groundMaterial.minorUnitVisibility = 0.1
      groundMaterial.gridRatio = 1
      groundMaterial.backFaceCulling = false;
      groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1)
      groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0)
      groundMaterial.opacity = 0.3
      var ground = BABYLON.Mesh.CreateGround("GridMain", 20000, 20000, 2)
      ground.position.y = 0.001
      ground.material = groundMaterial
      ground.isPickable = false
   }
}