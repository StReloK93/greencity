<template>
	<section class="w-full">
		<header class="py-3 bg-green-700 w-full mb-6">
			<main class="container flex justify-between items-center mx-auto">
				<router-link to="/" class="text-green-100 uppercase font-dancing flex items-center">
					<img src="/images/lotus.png" class="mr-3 inline w-8" /> Yashil Makon
				</router-link>

				<aside class="flex items-center">
					<div class="capitalize text-white flex items-center">
						<i class="gg-database mr-3"></i>
						{{$store.state.user.email}}
					</div>
					<button @click="$store.dispatch('logout')" class="ml-12 p-2 text-white flex items-center bg-green-600 pl-5 pr-3 hover:bg-green-800">
						<i class="gg-log-out mr-5"></i> Chiqish
					</button>
				</aside>
			</main>
		</header>
      <div class="container mx-auto py-2">
         <main v-if="territories.length > 0">
            <router-link :to="{ name: 'constructor', params: { id: territory.id }}" v-for="territory in territories" :key="territory" class="p-2 bg-blue-300 inline-block text-white">
               {{territory.name}}
               <p>
               {{territory.id}}
               </p>
            </router-link>
         </main>
      </div>
	</section>
</template>
<script>
import axios from 'axios';
export default {
   data() {
      return {
         territories: [],
      }
   },
   async mounted() {
      this.getTerritories()
   },
   methods: {
      async getTerritories(){
        const {data} = await axios.get('/api/territories/getforuser')
        this.territories = data
        console.log(this.territories);
      }
   },
};
</script>
<style>
@import url('https://unpkg.com/css.gg/icons/all.css');

</style>