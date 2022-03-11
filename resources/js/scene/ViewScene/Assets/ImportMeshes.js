import axios from 'axios'
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
         
         this.scene.materials.forEach(material => {
            material.ambientColor = new BABYLON.Color3(0.2,0.2,0.2)
         });
      })
   }

   pickidMesh() {
      this.scene.onPointerPick = (event, pick) => {
         const mesh = pick.pickedMesh
         if (store.state.mesh.active && (event.button == 0 || event.button == 2)) {
            this.clearActiveMesh(event)
         }

         if(mesh.parent.metadata && mesh.parent.metadata.gltf.extras && mesh.parent.metadata.gltf.extras.pickable == 1){
            store.state.mesh.active = mesh.parent
            this.scene.activeMesh = mesh.parent
            
            this.Actions.animatePlay(mesh.parent._children, true, true)
            this.getTerritories(mesh.parent.name)
         }
         else{
            if (mesh && mesh.metadata.gltf.extras.pickable == 1) {
               store.state.mesh.active = mesh
               this.scene.activeMesh = mesh
               this.Actions.animatePlay(mesh, true)
               this.getTerritories(mesh.name)
            }
         }

      }
   }

   clearActiveMesh() {
      this.Actions.animateStop()
      this.scene.activeMesh = null
      store.state.mesh.active = null
      store.state.territories = null
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

   async getActiveMeshes() {
      this.activeMeshes = this.scene.getNodeByName('active')._children
      const {data} = await axios.get('/api/territroy_count')
      this.activeMeshes.forEach(mesh => {
         this.meshSceneNames(mesh,data[mesh.name])
         if(mesh._isMesh){
            mesh.actionManager = new BABYLON.ActionManager(this.scene)
            mesh.mainmaterial = mesh.material
            this.Actions.hover(mesh)
         }
         else{
            this.Actions.hoverNode(mesh._children)
         }
      });
   }


   meshSceneNames(mesh,count){
      var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

      var rect1 = new BABYLON.GUI.Rectangle();

      rect1.adaptWidthToChildren = true;
      rect1.height = "35px";
      rect1.cornerRadius = 4;
      rect1.color = "white";
      rect1.thickness = 0;
      rect1.background = "#1db81d6b";
      advancedTexture.addControl(rect1);
      rect1.linkWithMesh(mesh);   
      rect1.linkOffsetY = -50;

      var label = new BABYLON.GUI.TextBlock();
      if(mesh.name == 'TROF, AMMQ va MShML' || mesh.name == "1-sonli autokorxona"){
         label.width = "170px";
      }
      else{
         label.width = "100px";
      }

      if(count == null || count == undefined) count = 0
      label.text = mesh.name.toUpperCase() + "\n" + count;
      label.fontSize = '12px'
      rect1.addControl(label);

      var target = new BABYLON.GUI.Ellipse();
      target.width = "5px";
      target.height = "5px";
      target.color = "#1db81d6b";
      target.thickness = 1;
      target.background = "#1db81d6b";
      advancedTexture.addControl(target);
      target.linkWithMesh(mesh);   

      var line = new BABYLON.GUI.Line();
      line.lineWidth = 2;
      line.color = "#1db81d6b";
      line.y2 = 14;
      line.linkOffsetY = 0;
      advancedTexture.addControl(line);
      line.linkWithMesh(mesh); 
      line.connectedControl = rect1;  
   }
}



