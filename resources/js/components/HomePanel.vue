<template>
   <main ref="information" class="fixed bg-white flex shadow bottom-0 left-0 h-52 w-full p-5 border-t border-green-400">
      <router-link class="p-2 mx-2 h-full bg-gray-200 shadow-md w-40 uppercase flex items-center justify-center font-bold" :to="{ name: 'territory', params: { id: territory.id }}"  v-for="territory in $store.state.territories" :key="territory">
         {{territory.name}}
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