import Scene from './engine/Scene'
import Light from './engine/Light'
import Meshes from './Assets/Meshes'
import Camera from './engine/Camera'

export default function () {
   const SceneClass = new Scene()
   const CameraClass = new Camera()
   const MeshesClass = new Meshes(CameraClass)
   const LightClass =  new Light()
   return {
      Scene: SceneClass,
      Camera: CameraClass,
      Light: LightClass,
      Meshes: MeshesClass,
   }
}


// scene.onDataLoadedObservable.add(function(){
//    console.log('onDataLoadedObservable');
// })
// scene.executeWhenReady(function(){
//    console.log('executeWhenReadySearch');
// })