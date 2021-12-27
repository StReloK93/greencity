import fructColor from '../../fructColor'

export default class {
   constructor() {
      fructColor.forEach(fruct => {
         let myMaterial = new BABYLON.StandardMaterial(fruct.name, scene);
         myMaterial.diffuseColor = BABYLON.Color3.FromHexString(fruct.color).toLinearSpace()
      });
   }
}