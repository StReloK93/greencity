import Actions from '../../Assets/Actions'

import Native from './NativeMeshes'
import Import from './ImportMeshes'
import axios from 'axios';


export default class {
   actions = new Actions()
   constructor() {
      this.native = new Native()
      new Import()
      this.PickingMesh()
   }

   numRound(num, precision) {
      return Math.round(num / precision) * precision;
   }

   newMesh(name, parent, event) {
      const getmesh = scene.getNodeByName(parent)
      const mesh = getmesh.clone(name + Date.now())

      let material = scene.getMaterialByName(name)
      if (material) mesh.material = scene.getMaterialByName(name)
      store.state.activeMesh = true

      

      this.dragnDrop(mesh, parent, event)
   }


   dragnDrop(mesh,parent,event){
      mesh.visibility = 0.5
      
      scene.onPointerMove = (a, pickInfo) => {
         if (pickInfo.pickedPoint) {
            let coorX = this.numRound(pickInfo.pickedPoint.x, 0.5)
            let coorZ = this.numRound(pickInfo.pickedPoint.z, 0.5)
            mesh.setAbsolutePosition(coorX, mesh.position.y, coorZ)
         }
      }

      scene.simulatePointerMove(scene.pick(event.clientX, event.clientY))

      scene.onPointerPick = (event) => {
         if (!store.state.activeMesh) return
         if (event.button == 0) {
            mesh.visibility = 1
            mesh.actionManager = new BABYLON.ActionManager(scene)
            this.actions.hover(mesh,scene)
            this.saveMeshProperties(mesh, parent)
         }
         if (event.button == 2) {
            mesh.dispose()
         }

         scene.onPointerMove = null
         store.state.activeMesh = false
         scene.onPointerPick = null
      }
   }

   async saveMeshProperties(mesh, parent) {
      const name = mesh.name
      const material = mesh.material.name
      const position = mesh.absolutePosition
      await axios.post('/api/savemeshes', {
         name: name,
         position: position,
         material: material,
         parent: parent,
      })
   }


   PickingMesh() {
      scene.onPointerDown = (event, pick) => {
         if(pick.pickedMesh) console.log(pick.pickedMesh.name);
      }
   }
}