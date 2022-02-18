import fructColor from '../../fructColor'

export default class Materials {
    constructor(scene) {
        //building
        const building = new BABYLON.StandardMaterial("building", scene);
        building.diffuseColor = new BABYLON.Color3.FromHexString('#EFDC9A')
        building.specularColor = new BABYLON.Color3(0, 0, 0);

        //green
        const green = new BABYLON.StandardMaterial("green", scene);
        green.diffuseColor = new BABYLON.Color3.FromHexString('#79FFAD')
        green.specularColor = new BABYLON.Color3(0, 0, 0);

        //ground
        const ground = new BABYLON.StandardMaterial("ground", scene);
        ground.diffuseColor = new BABYLON.Color3(1, 1, 1);
        ground.specularColor = new BABYLON.Color3(0, 0, 0);

        //hover
        const hover = new BABYLON.StandardMaterial("hover", scene);
        hover.diffuseColor = BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace()
        hover.specularColor = new BABYLON.Color3(0, 0, 0);

        //fructColor
        fructColor.forEach(fruct => {
            let myMaterial = new BABYLON.StandardMaterial(fruct.name, scene);
            myMaterial.diffuseColor = BABYLON.Color3.FromHexString(fruct.color).toLinearSpace()
        });

        const BluePoints = new BABYLON.StandardMaterial('BluePoints', this.scene)
        BluePoints.diffuseColor = BABYLON.Color3.FromHexString('#3268D1')
        BluePoints.specularColor = new BABYLON.Color3(0, 0, 0)
  
        const animated = new BABYLON.StandardMaterial("animated", this.scene);
        animated.specularColor = new BABYLON.Color3(0, 0, 0)
    }
}