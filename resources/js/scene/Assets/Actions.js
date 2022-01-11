export default class {
	hover(mesh) {
		var material = mesh.material
		var oldDiffuse = material.diffuseColor
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{
					trigger: BABYLON.ActionManager.OnPointerOverTrigger,
				},
				() => {
					material.diffuseColor = new BABYLON.Color3(1, 1, 0)
				}
			)
		);
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{
					trigger: BABYLON.ActionManager.OnPointerOutTrigger,
				},
				() => {
					material.diffuseColor = oldDiffuse
				}
			)
		);
	}

	animate(parametr, property, keysArr) {
		this.animation = new BABYLON.Animation(`newBlink`, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
		this.animation.setKeys(keysArr)
		this.animationGroup = new BABYLON.AnimationGroup(`newBlinkGroup`)
	}

	animateTarget(mesh) {
		this.animationGroup.addTargetedAnimation(this.animation, mesh)
	}

	animatePlay() {
		this.animationGroup.play(true)
	}

	animateStop() {
		this.animationGroup.stop();
		this.animationGroup.dispose();
	}

}