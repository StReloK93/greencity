import Scene from './Engine/BuilderScene'
import Light from './Engine/BuilderLight'
import Meshes from './Assets/BuilderMeshes'
import Camera from './Engine/BuilderCamera'

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
   }
}