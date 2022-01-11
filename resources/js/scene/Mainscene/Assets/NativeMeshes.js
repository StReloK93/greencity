export default class {
   constructor() {
      this._createGround()
   }

   createMesh(data){
      const points = []
      data.forEach(element => {
         const meshinfo = JSON.parse(element.points)
         points.push(this._toVector3(meshinfo))
      });


      points.forEach(point => {
         let customMesh = BABYLON.MeshBuilder.ExtrudePolygon("poly", { shape: point, depth: 1, wrap: true }, scene)
         customMesh.material = scene.getMaterialByName('building')
         customMesh.position.y = 0.01
         customMesh.rotation.x = Math.PI
      });
   }

   _createGround(){
      const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 1000, height: 1000}, scene);
      ground.actionManager = new BABYLON.ActionManager(scene)
      ground.material = scene.getMaterialByName('ground')
   }

   _toVector3(meshinfo){
      const array = []
      meshinfo.forEach(point => {
         array.push(new BABYLON.Vector3(point.x,point.y,point.z))
      });
      return array
   }
}

// F1E6BB