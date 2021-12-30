export default class {
   constructor() {
      this.createGround()
   }

   createGround(){
      const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 1000, height: 1000}, scene);
      ground.actionManager = new BABYLON.ActionManager(scene);
      const material = new BABYLON.StandardMaterial("material", scene);
      material.diffuseColor = new BABYLON.Color3(1, 1, 1);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = material;
   }
}