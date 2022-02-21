import Scene from './engine/Scene'
import Light from './engine/Light'
import Meshes from './Assets/Meshes'
import Camera from './engine/Camera'
import Materials from '../Addons/Materials'
import Grid from '../Addons/Grid'

export default function (canvas) {
   const SceneClass = new Scene(canvas)
   const CameraClass = new Camera(canvas)
   const MeshesClass = new Meshes(SceneClass.scene)
   const LightClass =  new Light()

   new Grid({lines: true, grid: true})

   new Materials(SceneClass.scene)
   return {
      Scene: SceneClass,
      Camera: CameraClass,
      Light: LightClass,
      Meshes: MeshesClass,
   }
}