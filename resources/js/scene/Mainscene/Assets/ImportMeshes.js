export default class {
   constructor() {
      this.Import()
      scene.onDataLoadedObservable.add(()=>{
         this.hideMeshes(['plant','house'])
      })
   }

   Import() {
      BABYLON.SceneLoader.AppendAsync('./models/assets.glb', undefined, scene, function (event) {
         const percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0 
      }, ".glb")
   }

   hideMeshes(meshNames){
      meshNames.forEach(meshname => {
         const mesh = scene.getNodeByName(meshname)
         mesh.visibility = 0
      });
   }
}