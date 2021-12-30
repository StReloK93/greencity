<template>
   <section class="h-full w-full absolute top-0 left-0 p-20 bg-black bg-opacity-60 ">
      <main class="relative h-full shadow border-2 border-gray-500">
         <canvas class="h-full w-full border-8 border-transparent" ref="BuilderCanvas"></canvas>
         <button @click="$emit('close')" class="absolute top-0 right-0 -mt-6 -mr-6 bg-gray-100 rounded-full shadow-xl w-12 hover:bg-gray-300">
            <img src="/images/close.png" class="transform scale-50">
         </button>
      </main>
   </section>
</template>
<script>
import canvas3D from '../scene/MeshBuilder/BuilderBundle' 
export default {
   mounted(){
      this.MeshBuilder = canvas3D(this.$refs.BuilderCanvas)
   }
}
</script>