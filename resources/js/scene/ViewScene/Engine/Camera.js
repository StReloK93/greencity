export default class {
   camera = new BABYLON.ArcRotateCamera("camera", 1.294, Math.PI/3, 140, new BABYLON.Vector3(0, 0, 0))
   constructor(canvas) {
      this.canvas = canvas
      this.camera.attachControl(this.canvas, true)
      this.limits()
   }


   limits(){
      this.camera.useBouncingBehavior = true;

      this.camera.lowerRadiusLimit = 110 
      this.camera.upperRadiusLimit = 240 

      // this.camera.lowerAlphaLimit = -Math.PI/2
      // this.camera.upperAlphaLimit = -Math.PI/2

      this.camera.lowerBetaLimit = 0
      this.camera.upperBetaLimit = Math.PI/2.5
      
      // upperRadiusLimit
      this.camera.inputs.attached.keyboard.detachControl();
      // this.camera.inputs.attached.mousewheel.detachControl();

      this.camera.inputs.attached.pointers.buttons = [1, 2]
   }
}