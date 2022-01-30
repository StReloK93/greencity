export default class {
   constructor() {
      this.Import()
   }

   Import() {
      BABYLON.SceneLoader.AppendAsync('./models/assets.glb', undefined, scene, function (event) {
         const percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0 
      }, ".glb")
   }
}