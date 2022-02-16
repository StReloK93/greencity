<template>
   <section v-if="information" class="fixed top-0 left-0 m-4 bg-black bg-opacity-50 px-4 py-4 text-gray-200 shadow-inner rounded w-64">
      <div class="flex justify-between items-center mb-4 ">
         <span>
            Umumiy daraxtlar
         </span>
         <span>
            {{information.all}} ta
         </span>
      </div>
      <div class="flex justify-between items-center my-4">
         <span>
            Mevali daraxtlar
         </span>
         <span>
            {{information.mevali}} ta
         </span>
      </div> 
      <div class="flex justify-between items-center mt-4 mb-2">
         <span>
            Manzarali daraxtlar
         </span>
         <span>
            {{information.manzarali}} ta
         </span>
      </div> 
   </section>
</template>
<script>
export default {
   data(){
      return {
         information: null
      }
   },
   async mounted() {
     var {data} = await axios.get('/api/plantInfromation')
     this.information = data
   },
}
</script>