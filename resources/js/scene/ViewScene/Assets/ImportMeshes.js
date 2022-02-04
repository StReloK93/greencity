export default class {
   constructor(scene) {
      this.scene = scene
      this.Import()
   }

   Import() {
      BABYLON.SceneLoader.AppendAsync('./models/assets.glb', undefined, this.scene, function (event) {
         const percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0 
      }, ".glb")
   }
}