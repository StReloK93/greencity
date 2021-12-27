import Canvas from "../Canvas"

export default class {
   constructor(Camera) {
      // Camera.targetFocus()
      this.ImportMeshes()
      this.NativeMeshes()
      scene.onReadyObservable.add(() => {
         // this.dragDrop(['house'])
      })
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

   newFruct(fructName){
      const clonePlant = this.$meshClone('plant',fructName)
      // clonePlant.setEnabled(false)
      canvas.focus()
      scene.onAfterRenderObservable.add((event,sce) => {
         console.log(sce,event);
      })
   //    scene.onPointerMove = function (evt,info) {
   //       console.log(info);
   //   };
      // // clonePlant.position = new BABYLON.Vector3()
      // setTimeout(()=>{
      //    clonePlant.setEnabled(true)
      // },1000)
      clonePlant._children[0].material = scene.getMaterialByName(fructName)
   }
}