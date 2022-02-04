export default class {
   constructor(scene) {
      this.scene = scene
      this.Import()

      scene.onDataLoadedObservable.add(()=>{
         this.hideMeshes(['plant','house'])
      })
   }

   Import() {
      BABYLON.SceneLoader.AppendAsync('/models/assets.glb', undefined, this.scene, function (event) {
         const percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0 
      }, ".glb")
   }

   hideMeshes(meshNames){
      meshNames.forEach(meshname => {
         const mesh = this.scene.getNodeByName(meshname)
         mesh.setAbsolutePosition(40000,mesh.position.y,40000)
      });
   }
}