export default class {
   points = []
   constructor(scene) {
      this.scene = scene
      this.createGround()
      scene.onPointerPick = (event, pickInfo) => {
         let coorX = this.numRound(pickInfo.pickedPoint.x,1)
         let coorZ = this.numRound(pickInfo.pickedPoint.z,1)
         this.createCube({posX:coorX,posZ:coorZ})


         this.points.push(new BABYLON.Vector3(coorX,0,coorZ))
         this.meshBuilder(this.points)
      }
   }

   numRound(num, precision) {
      return Math.round(num / precision) * precision;
   }

   createGround() {
      const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, this.scene);
      ground.actionManager = new BABYLON.ActionManager(this.scene);

      const material = new BABYLON.StandardMaterial("material", this.scene);
      material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = material;
   }

   createCube({posX,posZ}) {
      const box = BABYLON.MeshBuilder.CreateBox("box", { height: 0.3, width: 0.3, size: 0.3 }, this.scene)
      const material = new BABYLON.StandardMaterial('BoxMaterial', this.scene)
      material.diffuseColor = new BABYLON.Color3(1,0,0)
      box.material = material
      box.position = new BABYLON.Vector3(posX,0,posZ)
   }

   meshBuilder(points) {
      if(points.length < 2) return 
      const oldPoly = this.scene.getNodeByName('poly')
      if(oldPoly) oldPoly.dispose()
      const poly = BABYLON.MeshBuilder.ExtrudePolygon("poly", { shape: points, depth: 0.1 }, this.scene);
      poly.isPickable = false
      poly.position.y = 0.001
   }
}



























