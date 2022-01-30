<template>
   <router-link class="fixed font-bold top-0 right-0 p-2 px-4 uppercase m-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" to="/login">Kirish</router-link>
   <canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
</template>
<script>
import CanvasEngine from "../scene/ViewScene/Canvas";
export default {
   mounted(){
      this.MeshBuilder = CanvasEngine(this.$refs.BuilderCanvas)
   }
}
</script>
<style>
   
</style>