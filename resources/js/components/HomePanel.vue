<template>
   <main ref="information" class="fixed flex flex-col bottom-2 left-2 top-2 w-80 overflow-y-auto p-2 shadow-inner bg-black bg-opacity-25 text-sm">
      <a class="bg-green-500 w-full mb-4 bg-opacity-60 shadow uppercase flex items-center  justify-between font-medium hover:bg-green-600" :href="'/territory/'+territory.id"  v-for="territory in $store.state.territories" :key="territory">
         <div class="text-center flex-grow text-white">
            {{territory.name}}
         </div>
         <div class="px-4 p-5 border-l border-gray-200">
             <i class="gg-sidebar-right  text-white"></i>
         </div>
      </a>
   </main>
</template>
<script>
export default {
   props: ['Engine'],
   data() {
      return {
         Territories: null
      }
   },
}
</script>