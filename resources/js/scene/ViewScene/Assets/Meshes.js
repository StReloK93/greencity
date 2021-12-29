import Native from './NativeMeshes'
import Import from './ImportMeshes'
import Material from './Materials'
export default class {
   constructor() {
      new Native()
      new Import()
      new Material()
   }

   CopyMesh(target,name){
      const mesh = scene.getNodeByName(target)
      return mesh.clone(name + Date.now())
   }

   newMesh(name,parent,event){
      const mesh = this.CopyMesh(parent,name)
      mesh.visibility = 0.5

      scene.onPointerMove = function(a,pickInfo){
         console.log(pickInfo);
         mesh.position.x = -pickInfo.ray.origin.x
         mesh.position.z = pickInfo.ray.origin.z
      }

      store.state.activeMesh = true
      scene.simulatePointerMove(scene.pick(event.clientX, event.clientY))
      let material = scene.getMaterialByName(name)
      if(material) mesh.material = scene.getMaterialByName(name)
      

      scene.onPointerPick = () => {
         if(!store.state.activeMesh) return

         scene.onPointerMove = null
         store.state.activeMesh = false
         mesh.visibility = 1
         scene.onPointerPick = null
      }

   }

}