<template>
   <main v-if="$store.state.user" class="uppercase fixed top-0 right-0 text-blue-600 ">
      <router-link  class="font-bold inline-block p-2 px-4 m-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white" to="/territories">Maydonlar</router-link>
      <button  @click="$store.dispatch('logout')" class="uppercase font-bold inline-block text-blue-600 p-2 px-4 m-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white">Tizimdan chiqish</button>
   </main>
   <main v-else class="uppercase fixed top-0 right-0 text-blue-600">
      <router-link  class="font-bold inline-block p-2 px-4 m-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white" to="/login">Kirish</router-link>
   </main>
   <canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
</template>
<script>
import CanvasEngine from "../scene/Viewscene/Canvas";
export default {
   mounted(){
      this.MeshBuilder = CanvasEngine(this.$refs.BuilderCanvas)
   }
}
</script>