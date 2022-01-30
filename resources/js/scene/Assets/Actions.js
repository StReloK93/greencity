export default class {
	hover(mesh, scene) {
		var material = mesh.material
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{
					trigger: BABYLON.ActionManager.OnPointerOverTrigger,
				},
				() => {
					if (scene.activeMesh != mesh) mesh.material = scene.getMaterialByName('hover')
				}
			)
		);
		mesh.actionManager.registerAction(
			new BABYLON.ExecuteCodeAction(
				{
					trigger: BABYLON.ActionManager.OnPointerOutTrigger,
				},
				() => {
					if (scene.activeMesh != mesh) mesh.material = material
				}
			)
		);
	}

	animate(parametr, property, keysArr) {
		this.animation = new BABYLON.Animation(`newBlink`, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
		this.animation.setKeys(keysArr)
		this.animationGroup = new BABYLON.AnimationGroup(`newBlinkGroup`)
	}

	animatePlay(mesh) {
		this.animationGroup.addTargetedAnimation(this.animation, mesh)
		this.animationGroup.play(true)
	}

	animateStop() {
		this.animationGroup.stop();
		this.animationGroup.dispose();
	}

}