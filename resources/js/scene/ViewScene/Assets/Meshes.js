import Actions from '../../Addons/Actions'

export default class {
   constructor(scene) {
      this.scene = scene
      this.actions = new Actions(scene)
      this._materials()
      // this._createGround()
   }
   
   _materials(){
      const hover = new BABYLON.StandardMaterial("hover", this.scene);
      hover.diffuseColor = BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace()
      hover.specularColor = new BABYLON.Color3(0, 0, 0);

      const animated = new BABYLON.StandardMaterial("animated", this.scene);
      animated.specularColor = new BABYLON.Color3(0, 0, 0)

      //ground
      const ground = new BABYLON.StandardMaterial("ground", this.scene);
      ground.diffuseColor = new BABYLON.Color3(1, 1, 1);
      ground.specularColor = new BABYLON.Color3(0, 0, 0);
   }

   _createGround() {
      const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 2000, height: 2000 }, this.scene);
      ground.actionManager = new BABYLON.ActionManager(this.scene)
      ground.onpickable = false
      ground.material = this.scene.getMaterialByName('ground')
   }
}