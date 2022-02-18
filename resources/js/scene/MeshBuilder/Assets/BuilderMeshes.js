import Actions from '../../Addons/Actions'
export default class {
   points = []
   finishedPoints = []

   constructor(scene) {
      this.scene = scene
      this.actions = new Actions(scene)

      this.createGround()
      this.onKeyboard()
      this.onDoubleClick()
      this.onClick()
   }

   onClick() {

      this.scene.onPointerDown = (event, pickInfo) => {

         //picked active point
         if (pickInfo.pickedMesh.type == 'linepoint') {
            const mesh = pickInfo.pickedMesh

            // mishkani ong tomonini bosganda active elementni ochiramiz
            if (this.scene.activeMesh && mesh != this.scene.activeMesh) {
               this.clearActiveMesh()
            }

            this.scene.activeMesh = mesh
            this.actions.animatePlay(mesh, true)
            return
         }

         //mishkani ong tomonini bosganda active elementni ochiramiz
         if (event.button == 2 && this.scene.activeMesh) {
            this.clearActiveMesh()
         }
      }
   }

   onDoubleClick() {
      this.scene.onPointerObservable.add((click) => {
         if (click.type == BABYLON.PointerEventTypes.POINTERDOUBLETAP) {
            var pickedPoint = this.gridCoords(click.pickInfo)

            //agar active element bolsa nima qilamiz ?
            if (this.scene.activeMesh) {

               let index = this.points.findIndex(point => point.mesh === this.scene.activeMesh);
               this.points[index].mesh.position = pickedPoint
               this.points[index].coordinate = pickedPoint

               this.meshBuilder(this.points)
               this.clearActiveMesh()
               return
            }

            if (click.pickInfo.pickedMesh.name != 'ground' || event.button != 0) return
            this.createCube(pickedPoint)
            this.meshBuilder(this.points)
         }
      });
   }

   clearActiveMesh() {
      this.actions.animateStop()
      this.scene.activeMesh = null
   }

   onKeyboard() {
      this.scene.onPreKeyboardObservable.add((press) => {
         if (press.type == 2 && press.event.code == "KeyX") {
            if (this.scene.activeMesh) {
               let index = this.points.findIndex(point => point.mesh === this.scene.activeMesh);
               this.points[index].mesh.dispose()
               this.points.splice(index, 1);
               this.meshBuilder(this.points)
               this.scene.activeMesh = null
            }
         }
      })
   }

   createCube(coordinate) {
      const box = BABYLON.MeshBuilder.CreateBox("cubicpoints", { height: 0.4, width: 0.4, size: 0.4 }, this.scene)
      this.points.push({ mesh: box, coordinate: coordinate })
      box.type = 'linepoint'

      box.material = this.scene.getMaterialByName('BluePoints')
      box.mainmaterial = box.material
      box.position = coordinate
      box.position.y = 1

      box.actionManager = new BABYLON.ActionManager(this.scene)
      this.actions.hover(box)
   }

   meshBuilder(points) {
      this.finishedPoints = []
      points.forEach(element => {
         this.finishedPoints.push(element.coordinate)
      });

      if (this.finishedPoints.length < 2) return
      const oldPoly = this.scene.getNodeByName('line')
      if (oldPoly) oldPoly.dispose()

      const poly = BABYLON.MeshBuilder.CreateLines("line", { points: this.finishedPoints }, this.scene)

      poly.isPickable = false
   }





   createGround() {
      const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, this.scene)
      ground.actionManager = new BABYLON.ActionManager(this.scene)

      const material = new BABYLON.StandardMaterial("material", this.scene)
      material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8)
      material.specularColor = new BABYLON.Color3(0, 0, 0)
      ground.material = material
   }

   numRound(num, precision) {
      return Math.round(num / precision) * precision
   }

   gridCoords(pickInfo) {
      let coorX = this.numRound(pickInfo.pickedPoint.x, 0.5)
      let coorZ = this.numRound(pickInfo.pickedPoint.z, 0.5)
      return new BABYLON.Vector3(coorX, 1, coorZ)
   }

   getPoints() {
      const points = []
      this.finishedPoints.forEach(point => {
         points.push({ x: point.x, y: point.y, z: point.z })
      })
      return points
   }
}