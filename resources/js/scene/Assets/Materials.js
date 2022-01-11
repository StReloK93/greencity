import fructColor from '../../fructColor'

export default class Materials {
    constructor() {
        this.building()
        this.ground()
        this.fructColors()
    }

    building() {
        const material = new BABYLON.StandardMaterial("building", scene);
        material.diffuseColor = new BABYLON.Color3.FromHexString('#EFDC9A')
        material.specularColor = new BABYLON.Color3(0, 0, 0);
    }

    ground() {
        const material = new BABYLON.StandardMaterial("ground", scene);
        material.diffuseColor = new BABYLON.Color3(1, 1, 1);
        material.specularColor = new BABYLON.Color3(0, 0, 0);
    }

    fructColors() {
        fructColor.forEach(fruct => {
            let myMaterial = new BABYLON.StandardMaterial(fruct.name, scene);
            myMaterial.diffuseColor = BABYLON.Color3.FromHexString(fruct.color).toLinearSpace()
        });
    }
}