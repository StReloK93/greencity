import Actions from '../../Addons/Actions'

export default class {
   constructor(scene) {
      this.scene = scene
      this.Actions = new Actions(scene)
      this.Import()


      this.pickidMesh()
      this.scene.onDataLoadedObservable.add(() => {
         this.getActiveMeshes()
         var polMat = this.scene.getMaterialByName('pol')
         polMat.albedoColor = new BABYLON.Color3(0.7,0.7,0.6)
      })
   }

   pickidMesh() {
      this.scene.onPointerPick = (event, pick) => {
         const mesh = pick.pickedMesh
         if (event.button == 0 || event.button == 2) this.clearActiveMesh()
            console.log(mesh.name);
         if (mesh && mesh.metadata.gltf.extras.pickable != 0) {
            store.state.mesh.active = mesh
            this.scene.activeMesh = mesh
            this.Actions.animatePlay(mesh, true)
            this.getTerritories(mesh.name)
         }

      }
   }

   clearActiveMesh() {
      if (store.state.mesh.active) {
         this.Actions.animateStop()
         this.scene.activeMesh.material = this.scene.activeMesh.mainmaterial
         this.scene.activeMesh = null
         store.state.mesh.active = null
         store.state.territories = null
      }
   }

   
   async getTerritories(name) {
      const { data } = await axios.post("/api/territories/getall", {
         name: name,
      });
      store.state.territories = data 
   }




   Import() {
      BABYLON.SceneLoader.AppendAsync('./models/view.glb', undefined, this.scene, function (event) {
         const percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0
      }, ".glb")
   }

   getActiveMeshes() {
      this.activeMeshes = this.scene.getNodeByName('active')._children

      this.activeMeshes.forEach(mesh => {
         mesh.actionManager = new BABYLON.ActionManager(this.scene)
         mesh.mainmaterial = mesh.material
         this.Actions.hover(mesh)
      });
   }
}