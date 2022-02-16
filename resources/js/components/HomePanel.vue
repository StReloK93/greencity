<template>
   <main ref="information" class="fixed flex bottom-4 left-4 right-4 h-26 p-2 shadow-inner bg-black bg-opacity-25">
      <router-link class="bg-green-500 mr-4 bg-opacity-60 shadow w-60 uppercase flex items-center  justify-between font-medium hover:bg-green-600" :to="{ name: 'territory', params: { id: territory.id }}"  v-for="territory in $store.state.territories" :key="territory">
         <div class="text-center flex-grow text-white">
            {{territory.name}}
         </div>
         <div class="px-4 p-5 border-l border-gray-200">
             <i class="gg-sidebar-right  text-white"></i>
         </div>
      </router-link>
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