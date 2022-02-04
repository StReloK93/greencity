function loaderFile(scene) {
   window.onkeyup = (event) => {
      if (event.keyCode == 107) {
         if (store.state.inspector) {
            scene.debugLayer.show({
               embedMode: true,
            });
         }
         else {
            scene.debugLayer.hide()
         }
         store.state.inspector = !store.state.inspector
      }
   }
}

export default {loaderFile}