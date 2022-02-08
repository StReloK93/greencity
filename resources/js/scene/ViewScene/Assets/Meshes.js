import Actions from '../../Addons/Actions'

export default class {
   constructor(scene) {
      this.scene = scene
      this.actions = new Actions(scene)
      this.materials()
   }
   
   materials(){
      const hover = new BABYLON.StandardMaterial("hover", this.scene);
      hover.diffuseColor = BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace()
      hover.specularColor = new BABYLON.Color3(0, 0, 0);
   }
}