export default class {
   camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2, 0, 40, new BABYLON.Vector3(0, 0, 0))
   constructor(canvas) {
      this.createCamera(canvas)
      this.limits()
   }

   createCamera(canvas) {
      this.camera.attachControl(canvas, true)
      this.camera.mode = 1
      this.camera.onViewMatrixChangedObservable.add(()=>{
         this.orthographic(canvas)
      })

      //listener for resize orthographic camera
      window.addEventListener("resize", ()=> {
         this.orthographic(canvas)
      });
   }

   orthographic(canvas){
      let proportion = canvas.width/canvas.height
      this.camera.orthoTop = this.camera.radius / proportion
      this.camera.orthoBottom = -this.camera.radius / proportion
      this.camera.orthoLeft = -this.camera.radius
      this.camera.orthoRight = this.camera.radius
   }

   limits(){
      this.camera.useBouncingBehavior = true;

      this.camera.lowerRadiusLimit = 5 
      this.camera.upperRadiusLimit = 50 


      this.camera.lowerAlphaLimit = -Math.PI/2
      this.camera.upperAlphaLimit = -Math.PI/2

      this.camera.lowerBetaLimit = 0
      this.camera.upperBetaLimit = 0
      // upperRadiusLimit
      this.camera.inputs.attached.keyboard.detachControl();
      // this.camera.inputs.attached.mousewheel.detachControl();

      this.camera.inputs.attached.pointers.buttons = [1, 2]
   }
}