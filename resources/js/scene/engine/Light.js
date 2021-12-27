export default class{
   constructor(){
      this.createLight()
   }

   createLight(){
      this.light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
   }
}