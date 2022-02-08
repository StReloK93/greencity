<template>
   <main ref="information" class="fixed top-0 left-0 holo h-72 w-64 m-10 p-5">
      <p class="text-holo">
         Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Et ullam sed porro earum aspernatur
         accusantium rerum, repellendus assumenda placeat dolores
         quod quia eum laboriosam minus sint! Esse minima
         accusantium quas.
      </p>
   </main>
   <main v-if="$store.state.user" class="uppercase fixed top-0 right-0 text-green-600 ">
      <router-link  class="shadow inline-block p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white" to="/territories">Maydonlar</router-link>
      <button  @click="$store.dispatch('logout')" class="uppercase shadow inline-block text-green-600 p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white">Tizimdan chiqish</button>
   </main>
   <main v-else class="uppercase fixed top-0 right-0 text-green-600">
      <router-link  class="shadow inline-block p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white" to="/login">Kirish</router-link>
   </main>
   <canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
</template>
<script>
import CanvasEngine from "../scene/Viewscene/Canvas";
export default {
   mounted(){
      this.MeshBuilder = CanvasEngine(this.$refs.BuilderCanvas)
      console.dir(this.$refs.information);
   }
}
</script>
<style scoped>
.text-holo{
   color: #a5e6ff;
}
.holo{
   box-shadow: 0 0 8px 0px #3ddede;
   background: rgb(47 182 182 / 61%);
}
</style>