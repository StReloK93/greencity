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
						mesh.material = mesh.mainmaterial
					}

				}
			)
		);
	}

	hoverNode(node){
		node.forEach(mesh => {
			mesh.mainmaterial = mesh.material
			mesh.actionManager = new BABYLON.ActionManager(this.scene)
			mesh.actionManager.registerAction(
				new BABYLON.ExecuteCodeAction(
					{
						trigger: BABYLON.ActionManager.OnPointerOverTrigger,
					},
					() => {
						var hover = true;
						if(this.scene.activeMesh && mesh.parent == this.scene.activeMesh){
							hover = false
						}
						if(hover){
							let allMeshes = mesh.parent._children
							allMeshes.forEach(mesh => {
								mesh.material = this.scene.getMaterialByName('hover')
							});
						}
					}
				)
			);
			mesh.actionManager.registerAction(
				new BABYLON.ExecuteCodeAction(
					{
						trigger: BABYLON.ActionManager.OnPointerOutTrigger,
					},
					() => {
						var hover = true;
						if(this.scene.activeMesh && mesh.parent == this.scene.activeMesh){
							hover = false
						}
						if(hover){
							let allMeshes = mesh.parent._children
							allMeshes.forEach(mesh => {
								mesh.material = mesh.mainmaterial
							});
						}
					}
				)
			);
		});
	}

	animate(parametr, property, keysArr = this.keysArr) {
		this.animation = new BABYLON.Animation(`newBlink`, parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
		this.animation.setKeys(keysArr)
		this.animationGroup = new BABYLON.AnimationGroup(`newBlinkGroup`)
	}

	animatePlay(meshOrNode, select = false,node = false) {
		if(select){
			this.animate('material.diffuseColor', BABYLON.Animation.ANIMATIONTYPE_COLOR3)
		}
		if(node == true){
			// bu yerda meshOrNode = node
			meshOrNode.forEach(element => {
				element.material = this.scene.getMaterialByName('animated')
				this.animationGroup.addTargetedAnimation(this.animation, element)
			});
		}
		else{
			// bu yerda meshOrNode = mesh
			meshOrNode.material = this.scene.getMaterialByName('animated')
			this.animationGroup.addTargetedAnimation(this.animation, meshOrNode)
		}

		this.animationGroup.play(true)
	}

	animateStop() {
		this.animationGroup.stop();
		this.animationGroup.dispose();
		if(this.scene.activeMesh._isMesh){
			this.scene.activeMesh.material = this.scene.activeMesh.mainmaterial
		}
		else{
			this.scene.activeMesh._children.forEach(mesh => {
				mesh.material = mesh.mainmaterial
			});
		}
	}

}