<template>
   <section class="h-full w-full absolute top-0 left-0 p-8 bg-black bg-opacity-60 ">
      <main class="relative h-full shadow border-2 border-gray-500">
         <canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
         <button @click="$emit('close')" class="absolute flex items-center justify-center top-0 right-0 bg-red-500 p-2 px-4 m-3  shadow-xl  hover:bg-red-700">
            <img src="/images/close.png" class="imgwhite w-4">
         </button>
         <button @click="insertPoints()" class="absolute bottom-0 right-0 bg-gray-100 p-2 px-4 m-3  shadow-xl  hover:bg-gray-300">
            Saqlash
         </button>
      </main>
   </section>
</template>
<script>
import canvas3D from '../scene/MeshBuilder/BuilderBundle' 
export default {
   mounted(){
      this.MeshBuilder = canvas3D(this.$refs.BuilderCanvas)
   },
   methods: {
      async insertPoints(){
         const points = this.MeshBuilder.Meshes.getPoints()
         if(points.length > 2)
            await axios.post('/api/savepoints', points)
            this.$emit('newmesh')
            this.$emit('close')
      }
   },
}
</script>
<style>
   .imgwhite{
      filter: brightness(0) invert(1);
   }
</style>