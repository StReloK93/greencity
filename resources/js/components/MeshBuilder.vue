<template>
   <section class="h-full w-full absolute top-0 left-0 p-8 bg-black bg-opacity-60 opacity-80 z-50">
      <form class="relative h-full shadow border-2 border-gray-500" @keypress.enter.prevent="" @submit.prevent="insertPoints">
         <canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
         <button @click="$emit('close')" class="absolute flex items-center justify-center top-0 right-0 bg-red-500 p-2 px-4 m-3  shadow-xl  hover:bg-red-700">
            <img src="/images/close.png" class="imgwhite w-4">
         </button>
         <div class="absolute bottom-0 right-0 m-3 ">
            <input type="text" v-model="clientname" class="p-2 outline-none" placeholder="Nomi" required>
            <button type="submit" class="bg-green-600 p-2 px-4 text-white shadow-xl  hover:bg-gray-700">
               Saqlash
            </button>
         </div>
      </form>
   </section>
</template>
<script>
import canvas3D from '../scene/MeshBuilder/BuilderBundle' 
export default {
   props: ['id'],
   data() {
      return {
         clientname: "",
      }
   },
   mounted(){
      this.MeshBuilder = canvas3D(this.$refs.BuilderCanvas)
   },
   methods: {
      async insertPoints(){
         const points = this.MeshBuilder.Meshes.getPoints()
         const center = this.MeshBuilder.Meshes.centerPoints

         points.forEach(point => {
            if(center.x < 0) point.x += Math.abs(center.x)
            if(center.z < 0) point.z += Math.abs(center.z)
            if(center.x > 0) point.x -= Math.abs(center.x)
            if(center.z > 0) point.z -= Math.abs(center.z)
         });
         
         const meshName = 'createdMesh'
         if(points.length > 2){
            await axios.post(`/api/createparent`, {points:points, name: meshName,clientname: this.clientname,id: this.id})
            this.$emit('newmesh')
            this.$emit('close')
         }
      }
   },
}
</script>