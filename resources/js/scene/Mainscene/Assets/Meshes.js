import Native from './NativeMeshes'
import Import from './ImportMeshes'
export default class {
   constructor() {
      this.native = new Native()
      new Import()
   }

   numRound(num, precision) {
      return Math.round(num / precision) * precision;
   }

   CopyMesh(target, name) {
      const mesh = scene.getNodeByName(target)
      return mesh.clone(name + Date.now())
   }

   newMesh(name, parent, event) {
      const mesh = this.CopyMesh(parent, name)
      mesh.visibility = 0.5
      scene.onPointerMove = (a, pickInfo) => {
         let coorX = this.numRound(-pickInfo.pickedPoint.x,0.5)
         let coorZ = this.numRound(pickInfo.pickedPoint.z,0.5)
         mesh.position.x = coorX
         mesh.position.z = coorZ
      }

      store.state.activeMesh = true
      scene.simulatePointerMove(scene.pick(event.clientX, event.clientY))
      let material = scene.getMaterialByName(name)
      if (material) mesh.material = scene.getMaterialByName(name)


      scene.onPointerPick = (event) => {
         if (!store.state.activeMesh) return
         if(event.button == 0){
            mesh.visibility = 1
         }
         if(event.button == 2){
            mesh.dispose()
         }

         scene.onPointerMove = null
         store.state.activeMesh = false
         scene.onPointerPick = null
      }

   }

}