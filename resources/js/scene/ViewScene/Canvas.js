import Scene from './engine/Scene'
import Light from './engine/Light'
import Meshes from './Assets/Meshes'
import Imports from './Assets/ImportMeshes'
import Camera from './engine/Camera'
export default function (canvas) {
   const SceneClass = new Scene(canvas)
   const CameraClass = new Camera(canvas)
   const MeshesClass = new Meshes(SceneClass.scene)
   const LightClass =  new Light()

   return {
      Scene: SceneClass,
      Camera: CameraClass,
      Light: LightClass,
      Meshes: MeshesClass,
      Import: new Imports(SceneClass.scene),
   }
}