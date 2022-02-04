import Actions from '../../Addons/Actions'

export default class {
   
   constructor() {
      this.actions = new Actions(scene)
      scene.onDataLoadedObservable.add(() => {
         this._createGround()
      })
   }

   _createGround() {
      const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
      ground.actionManager = new BABYLON.ActionManager(scene)
      ground.material = scene.getMaterialByName('ground')
   }

   createMesh(mesh) {
      if (scene.getNodeByName(mesh.name)) return

      const readypoints = []

      const points = JSON.parse(mesh.points)
      points.forEach(point => {
         readypoints.push(new BABYLON.Vector3(point.x, point.y, point.z))
      });

      let customMesh = BABYLON.MeshBuilder.ExtrudePolygon(mesh.name, { shape: readypoints, depth: 5, wrap: true }, scene)
      customMesh.scaling = new BABYLON.Vector3(1, 1, -1)
      customMesh.material = scene.getMaterialByName('building')
      customMesh.mainmaterial = scene.getMaterialByName('building')
      customMesh.position.y = 0.01

      customMesh.position.x = 40000
      customMesh.position.z = 40000
      customMesh.rotation.x = Math.PI
   }

   async getMeshes(id) {
      const meshes = await axios.get(`/api/getactivemeshes/${id}`)
      console.log(meshes);
      meshes.data.forEach(mesh => {
         const position = JSON.parse(mesh.position)
         const getmesh = scene.getNodeByName(mesh.parentname)
         const mymesh = getmesh.clone(mesh.name)
         mymesh.material = scene.getMaterialByName(mesh.materialname)
         mymesh.mainmaterial = scene.getMaterialByName(mesh.materialname)
         mymesh.setAbsolutePosition(position._x, position._y, position._z)

         if (mesh.parentname == 'plant') {
            mymesh.scaling.y = 1
         }
         else {
            mymesh.scaling.y = mesh.height
         }
         mymesh.actionManager = new BABYLON.ActionManager(scene)
         this.actions.hover(mymesh)
      });

   }
}