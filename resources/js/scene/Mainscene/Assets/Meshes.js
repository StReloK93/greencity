function numRound(num, precision) {
   let number = Math.round(num / precision) * precision
   if (number == 0) number = 0.0001
   return number
}

function mediumPosition(mesh) {
   const minCoords = mesh.getBoundingInfo().boundingBox.minimumWorld
   const maxCoords = mesh.getBoundingInfo().boundingBox.maximumWorld

   const xPos = (Math.round(minCoords.x) +  Math.round(maxCoords.x))/2
   const zPos = (Math.round(minCoords.z) +  Math.round(maxCoords.z))/2
   return new BABYLON.Vector3(xPos, mesh.position.y,zPos)
}

import Actions from '../../Addons/Actions'

import Native from './NativeMeshes'
import Import from './ImportMeshes'


export default class {

   constructor() {
      this.native = new Native()
      this.actions = new Actions(scene)
      new Import()
      scene.onPreKeyboardObservable.add((keyboard)=>{
         if(keyboard.type == 2 && keyboard.event.code == 'KeyX' && store.state.mesh.active) this.meshDelete(store.state.mesh.active)
      })
      this.pickForDrag()
   }

   pickForDrag() {
      scene.onPointerPick = (event, pick) => {
         const mesh = pick.pickedMesh


         if (event.button == 0 || event.button == 2) this.clearActiveMesh()

         if (mesh && mesh.name != "ground") {
            if (event.shiftKey && event.button == 0) {
               store.state.mesh.active = mesh //active Element
               this.position = mesh.absolutePosition.clone()
               
               this.drag(mesh)
               this.drop(mesh)
            }
            else if (event.button == 0) {
               this.getMesh(mesh)
               store.state.mesh.active = mesh
               scene.activeMesh = mesh

               this.actions.animatePlay(mesh, true)
            }
         }

      }
   }

   clearActiveMesh() {
      if (store.state.mesh.active) {
         this.actions.animateStop()
         scene.activeMesh = null
         store.state.mesh.active = null
         store.state.mesh.info = null
      }
   }

   newMesh(name, parent, event) {
      this.shiftName = name
      this.shiftParent = parent
      this.clearActiveMesh()
      scene.onPointerPick = null

      const getmesh = scene.getNodeByName(parent) //tanlash
      const mesh = getmesh.clone(name + Date.now()) //Kopiya qilish
      mesh.visibility = 0.5 // Muhim Emas
      
      let material = scene.getMaterialByName(name) //material qidirish
      if (material) { //Material bolsa ulash
         mesh.material = material
         mesh.mainmaterial = material
      }
      store.state.mesh.active = mesh //Active ELement bor

      //Mishka sceneda yurganda
      this.drag(mesh, true, event)
      this.drop(mesh, parent)
   }

   drag(mesh, simulate = false, event) {
      store.state.drag = true //Cursor Drag
      //Mishka sceneda yurganda
      scene.onPointerMove = (a, pickInfo) => {
         if (pickInfo.pickedPoint) {
            let coorX = numRound(pickInfo.pickedPoint.x, 0.5)
            let coorZ = numRound(pickInfo.pickedPoint.z, 0.5)
            mesh.setAbsolutePosition(+coorX.toFixed(2), 0.01, +coorZ.toFixed(2))
         }
      }
      if (simulate) {
            const pick = scene.pick(event.clientX, event.clientY)
            scene.simulatePointerMove(pick)


            const pivotX = numRound(pick.pickedPoint.x, 0.5)
            const pivotZ = numRound(pick.pickedPoint.z, 0.5)


            setTimeout(()=>{
               const meshCenter = mediumPosition(mesh) // meshni urtasi

               let Xraz = Math.abs(pivotX - meshCenter.x)
               let Zraz = Math.abs(pivotZ - meshCenter.z)

               if(meshCenter.x > pivotX) Xraz = -Xraz
               if(meshCenter.z > pivotZ) Zraz = -Zraz

               const matrix =  BABYLON.Matrix.Translation(Xraz, meshCenter._y, Zraz)
               mesh.setPivotMatrix(matrix, false);
            },20)

      }

   }

   drop(mesh, parent = null) {//
      scene.onPointerPick = (event) => {//-
         if (store.state.mesh.active == null) return

         if (event.button == 0) {

            if (parent) {
               
               mesh.visibility = 1
               mesh.actionManager = new BABYLON.ActionManager(scene)
               this.actions.hover(mesh)
               this.saveMeshProps(mesh, parent)

               if(event.shiftKey){
                  this.clear()
                  this.newMesh(this.shiftName,this.shiftParent, event)
                  return
               }
            }
            else this.editMeshProps(mesh)

         }

         if (event.button == 2) {
            if (parent) mesh.dispose()
            else mesh.setAbsolutePosition(this.position)
         }

         this.clear()

      }//-

   }//

   clear(){
      scene.onPointerMove = null
      store.state.mesh.active = null
      store.state.drag = null
      this.pickForDrag()
   }

   async saveMeshProps(mesh, parent) {
      const name = mesh.name
      const material = mesh.material.name
      const position = mesh.absolutePosition
      await axios.post('/api/createfinal', {
         name: name,
         position: position,
         material: material,
         parent: parent,
         id: this.id
      })
   }








   //GetMesh
   async getMesh(mesh) {
      store.state.mesh.images = null
      const name = mesh.name
      const { data } = await axios.post('/api/getonefinal', {
         id: this.id,
         name: name,
      })
      store.state.mesh.info = data


      if(data.parentname != 'plant'){
         const images = await axios.post('/api/getimages', {
            id: this.id,
            name: name,
         })
         store.state.mesh.images = images.data
      }
      else store.state.mesh.images = []

   }
   //GetMesh End


   async editMesh({ name, height, username , plantTime,hovered}) {
      await axios.post('/api/editfinalprops', {
         id: this.id,
         name: name,
         height: height,
         username: username,
         plantTime: plantTime,
         hovered: hovered
      })
   }

   async editMeshProps(mesh) {
      const name = mesh.name
      const position = mesh.absolutePosition
      await axios.post('/api/editfinalposition', {
         id: this.id,
         name: name,
         position: position,
      })
   }


   async meshDelete(mesh) {
      const name = mesh.name
      this.clearActiveMesh()
      mesh.dispose()
      await axios.post('/api/deleteonefinal', {
         id: this.id,
         name: name,
      })
   }

   deleteInScene(name){
      const mesh = scene.getNodeByName(name)
      if(mesh){
         mesh.dispose()
      }
   }
}