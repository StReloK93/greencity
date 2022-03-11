import axios from 'axios'
import store from '../../../store'
import Actions from '../../Addons/Actions'

import Import from './ImportMeshes'


export default class {
   constructor(scene) {
      this.scene = scene
      this.actions = new Actions(scene)
      this.pickidMesh()
      new Import(scene)
   }

   createMesh(mesh) {
      if (this.scene.getNodeByName(mesh.name)) return

      const readypoints = []

      var points = JSON.parse(mesh.points)
   
      points.forEach(point => {
         readypoints.push(new BABYLON.Vector3(point.x, point.y, point.z))
      });

      let customMesh = BABYLON.MeshBuilder.ExtrudePolygon(mesh.name, { shape: readypoints, depth: 5, wrap: true }, this.scene)
      customMesh.scaling = new BABYLON.Vector3(1, 1, -1)

      customMesh.material = this.scene.getMaterialByName('building')
      customMesh.material.sideOrientation = 2
      customMesh.material.backFaceCulling = false
      customMesh.mainmaterial = this.scene.getMaterialByName('building')

      customMesh.position.y = 0.01
      customMesh.position.x = 40000
      customMesh.position.z = 40000
      customMesh.rotation.x = Math.PI
      
   }

   async getMeshes(id) {
      const meshes = await axios.get(`/api/getallfinal/${id}`)

      meshes.data.forEach(mesh => {
         const position = JSON.parse(mesh.position)
         const getmesh = this.scene.getNodeByName(mesh.parentname)
         var mymesh;
         if(getmesh) mymesh = getmesh.clone(mesh.name)
         mymesh.setAbsolutePosition(isNumber(position._x), isNumber(0.01), isNumber(position._z))
         
         mymesh.hovered = mesh.hovered
         if (mesh.parentname == 'plant') {
            mymesh.scaling.y = 1
         }
         else {
            mymesh.scaling.y = mesh.height
         }
         mymesh.actionManager = new BABYLON.ActionManager(this.scene)
         if(mesh.hovered == true){
            mymesh.material = this.scene.getMaterialByName('green')
            mymesh.mainmaterial = this.scene.getMaterialByName('green')
            this.actions.hover(mymesh)
         }
         else{
            mymesh.material = this.scene.getMaterialByName(mesh.materialname)
            mymesh.mainmaterial = this.scene.getMaterialByName(mesh.materialname)
         }
      });

   }


   pickidMesh() {
      this.scene.onPointerPick = (event, pick) => {
         const mesh = pick.pickedMesh
         if (mesh && mesh.hovered == true) {
            this.getImages(mesh.name)
         }

      }
   }

   async getImages(name){
      const {data} = await axios.post('/api/getimages',{name:name})
      store.state.images = data
   }
}