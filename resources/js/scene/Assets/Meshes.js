export default class {
   constructor(Camera) {
      // Camera.targetFocus()
      this.ImportMeshes()
      this.NativeMeshes()
   }

   ImportMeshes() {
      BABYLON.SceneLoader.AppendAsync('./models/assets.glb', undefined, scene, function (event) {
         const percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0
      }, ".glb")
   }

   NativeMeshes(){
      const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 1000, height: 1000}, scene);

      const material = new BABYLON.StandardMaterial("material", scene);
      material.diffuseColor = new BABYLON.Color3(1, 1, 1);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = material;
   }

   dragDrop(activeMesh){

      var pointerDragBehavior = new BABYLON.PointerDragBehavior({dragPlaneNormal: new BABYLON.Vector3(0,1,0)});
      pointerDragBehavior.useObjectOrientationForDragging = false
      activeMesh.addBehavior(pointerDragBehavior)
   }

   $meshClone(meshName,name){
      const mesh = scene.getNodeByName(meshName)
      return mesh.clone(name + Date.now())
   }

   newFruct(fructName,event){
      const clonePlant = this.$meshClone('plant',fructName)
      clonePlant.setEnabled(false)
      scene.activeElement = clonePlant
      
      scene.onPointerMove = function(pointerInfo,pickInfo){
         scene.activeElement.position.x = pickInfo.ray.origin.x
         scene.activeElement.position.z = pickInfo.ray.origin.z
      }

      scene.onPointerPick = function(){
         if(scene.activeElement != null){
            scene.activeElement = null
            scene.onPointerMove = null
         }

      }
      
      clonePlant.setEnabled(true)
      scene.simulatePointerMove(scene.pick(event.clientX, event.clientY - 64))

      clonePlant._children[0].material = scene.getMaterialByName(fructName)
   }
}