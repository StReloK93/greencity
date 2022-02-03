export default class {
	keysArr = [
		{ frame: 0, value: BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace() },
		{ frame: 20, value: new BABYLON.Color3(1, 1, 1) },
		{ frame: 20, value: new BABYLON.Color3(1, 1, 1) },
		{ frame: 40, value: BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace() }
	]
	constructor(scene){
		this.scene = scene
	}
	hover(mesh) {
		var material = mesh.material
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{
					trigger: BABYLON.ActionManager.OnPointerOverTrigger,
				},
				() => {
					if (this.scene.activeMesh != mesh) mesh.material = this.scene.getMaterialByName('hover')
				}
			)
		);
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{
					trigger: BABYLON.ActionManager.OnPointerOutTrigger,
				},
				() => {
					if (this.scene.activeMesh != mesh) {
						mesh.material = material
					}

				}
			)
		);
	}

	animate(parametr, property, keysArr = this.keysArr) {
		this.animation = new BABYLON.Animation(`newBlink`, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
		this.animation.setKeys(keysArr)
		this.animationGroup = new BABYLON.AnimationGroup(`newBlinkGroup`)
	}

	animatePlay(mesh, select = false) {
		if(select){
			this.animate('material.diffuseColor', BABYLON.Animation.ANIMATIONTYPE_COLOR3)
		}
		mesh.material = this.scene.getMaterialByName('animated')
		this.animationGroup.addTargetedAnimation(this.animation, mesh)
		this.animationGroup.play(true)
	}

	animateStop() {
		this.animationGroup.stop();
		this.animationGroup.dispose();
	}

}