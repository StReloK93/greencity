export default class {
   constructor(scene) {
      this.scene = scene
      this.createGround()
   }

   createGround(){
      const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 1000, height: 1000}, this.scene);
      const material = new BABYLON.StandardMaterial("material", this.scene);
      material.diffuseColor = new BABYLON.Color3(1, 1, 1);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = material;
   }
}