export default class {
   constructor(scene) {
      this.scene = scene
      this.createGround()
      this.lines()
      this.meshBuilder()
   }

   createGround() {
      const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, this.scene);
      const material = new BABYLON.StandardMaterial("material", this.scene);
      material.diffuseColor = new BABYLON.Color3(1, 1, 1);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = material;
   }
   meshBuilder() {
      const points = [
         new BABYLON.Vector3(0, 0, 0),
         new BABYLON.Vector3(-1, 0, 0),
         new BABYLON.Vector3(-1, 0, -1),
      ];
      //polygon1 texture per side
      const polygon1 = BABYLON.MeshBuilder.ExtrudePolygon("polygon1", { shape: points, depth: 0.1 }, this.scene);
      polygon1.scaling = new BABYLON.Vector3(3, 3, 3)
      polygon1.position.y = 2
   }

   lines() {
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
   }
}