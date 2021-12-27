function onFullScreenChange() {
   var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
   if (fullscreenElement) {
      store.state.fullscreen = true
   }
   else {
      store.state.fullscreen = false
   }
   window.dispatchEvent(new Event('resize'));
}

function requestFullScreen(element) {
   // Supports most browsers and their versions.
   var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
   if (requestMethod) { // Native full screen.
      requestMethod.call(element);
   } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
         wscript.SendKeys("{F11}");
      }
   }
}

function closeFullscreen() {
   if (document.exitFullscreen) {
      document.exitFullscreen();
   } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
   } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
   }
}

function loaderFile(file) {
   document.addEventListener("fullscreenchange", onFullScreenChange, false);
   document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
   document.addEventListener("mozfullscreenchange", onFullScreenChange, false);

   window.onkeyup = (event) => {
      if (event.keyCode == 32) {
         if(store.state.fullscreen){
            closeFullscreen()
         }
         else{
            requestFullScreen(file)
         }
      }
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

export default {loaderFile, requestFullScreen, closeFullscreen}