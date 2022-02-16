<template>
   <section class="absolute bottom-0 left-0 m-5 bg-black bg-opacity-30 p-1 text-gray-200 shadow rounded-md ">
      <main v-if="$store.state.mesh.info == null" class="flex items-center">
         <div class="inline-flex items-center">
            <span class="text-xs"> Tanlash</span> 
            <span class="px-2 text-gray-700  inline-flex items-center bg-white bg-opacity-80 ml-2 shadow-sm rounded">
               &ensp;
               <img src="/images/left-click.png" class="w-5  inline-block relative -left-1">
            </span>
         </div>

         <div class="ml-14 inline-flex items-center">
            <span class="text-xs"> Joyini o'zgartirish </span> 
            <span class="ml-2 px-2 bg-white bg-opacity-80 text-gray-700 rounded inline-flex items-center"> Shift + <img src="/images/left-click.png" class="w-5  ml-1 shadow-sm  inline-block"></span>
         </div>
      </main>
      <main v-if="$store.state.mesh.info" class="flex items-center">
         <span class="text-xs"> O'chirish</span> 
         <span class="px-2 text-gray-700  inline-flex items-center bg-white bg-opacity-80 ml-2 shadow-sm rounded">
            X
         </span>
      </main>
   </section>
</template>
<script>
export default {
   
}
</script>
<style>
   
</style>