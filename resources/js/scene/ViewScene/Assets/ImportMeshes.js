import Actions from '../../Addons/Actions'

export default class {
   constructor(scene) {
      this.scene = scene
      this.Actions = new Actions(scene)
      // this.scene.activeMesh = null
      this.Import()
      scene.onDataLoadedObservable.add(() => {
         this.getActiveMeshes()
      })
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
         this.Actions.hover(mesh)
         
      });

      this.info(this.activeMeshes[0])
   }


   info(mesh) {
      // GUI
      var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  
      var cubic2 = new BABYLON.GUI.Rectangle();
      cubic2.width = "4px";
      cubic2.height = "4px";
      cubic2.color = "#a5e6ff";
      cubic2.thickness = 0;
      cubic2.background = "rgb(47 182 182 / 40%)";
      advancedTexture.addControl(cubic2);
      cubic2.linkWithMesh(mesh);   
      cubic2.linkOffsetY = -80;
  

      var cubic3 = new BABYLON.GUI.Rectangle();
      cubic3.width = "4px";
      cubic3.height = "4px";
      cubic3.color = "#a5e6ff";
      cubic3.thickness = 0;
      cubic3.background = "rgb(47 182 182 / 40%)";
      advancedTexture.addControl(cubic3);
      cubic3.linkWithMesh(mesh);   
      cubic3.linkOffsetY = 0;

  
     var line = new BABYLON.GUI.MultiLine();
      line.color = "rgb(47 182 182 / 40%)"
      line.lineWidth = 2
     line.push(mesh);
     line.push(cubic2);
     line.push({x: 168, y: 328});
     
     advancedTexture.addControl(line);
   }
}