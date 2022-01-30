import Actions from '../../Assets/Actions'

export default class {
   actions = new Actions()
   constructor() {
      scene.onDataLoadedObservable.add(()=>{
         this._createGround()
      })
   }

   _createGround() {
      const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
      ground.actionManager = new BABYLON.ActionManager(scene)
      ground.material = scene.getMaterialByName('ground')
   }

   createMesh(meshes) {
      if (scene.getNodeByName(meshes.name)) return

      const readypoints = []

      const points = JSON.parse(meshes.points)
      points.forEach(point => {
         readypoints.push(new BABYLON.Vector3(point.x, point.y, point.z))
      });

      let customMesh = BABYLON.MeshBuilder.ExtrudePolygon(meshes.name, { shape: readypoints, depth: 5, wrap: true }, scene)
      customMesh.scaling = new BABYLON.Vector3(1, 1, -1)
      customMesh.material = scene.getMaterialByName('building')
      customMesh.position.y = 0.01

      customMesh.position.x = 1000
      customMesh.position.z = 1000
      customMesh.rotation.x = Math.PI
   }

   async getMeshes() {
      const meshes = await axios.get('/api/getactivemeshes')

      meshes.data.forEach(mesh => {
         const getmesh = scene.getNodeByName(mesh.parentname)
         const mymesh = getmesh.clone(mesh.name)
         mymesh.material = scene.getMaterialByName(mesh.materialname)
         const position = JSON.parse(mesh.position)
         mymesh.setAbsolutePosition(position._x,position._y,position._z)

         mymesh.actionManager = new BABYLON.ActionManager(scene)
         this.actions.hover(mymesh,scene)
      });

   }
}