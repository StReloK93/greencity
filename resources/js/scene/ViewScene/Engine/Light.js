export default class{
   light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
   constructor(){
      this.light.intensity = 0.75
   }
}