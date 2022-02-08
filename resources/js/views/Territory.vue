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
         <main v-if="territories.length > 0" class="flex flex-wrap -mx-2">
            <aside v-for="territory in territories" :key="territory" class="mb-3 w-1/6 px-2">
               <main class="p-3 shadow-md border bg-gray-100 border-gray-100 text-gray-700 inline-block rounded w-full">
                  <div class="bg-white text-center py-1 font-bold text-gray-600 text-xl">
                     {{territory.name}}
                  </div>
                  <div class="flex justify-between my-3">
                     <span>
                        Mevali daraxt
                     </span>
                     <span>
                        10
                     </span>
                  </div>
                  <div class="flex justify-between my-3">
                     <span>
                        Manzarali daraxt
                     </span>
                     <span>
                        22
                     </span>
                  </div>
                  <div class="flex justify-between my-3">
                     <span>
                        Olma
                     </span>
                     <span>
                        11
                     </span>
                  </div>
                  <router-link :to="{ name: 'constructor', params: { id: territory.id }}" class="mt-8 uppercase block text-center text-green-500 border border-green-500 text-white p-2 font-bold w-full hover:bg-green-500 hover:text-white">
                     Constructor
                  </router-link>
               </main>
            </aside>
         </main>
      </div>
      <main class="container mx-auto py-2">
         <button @click="addForm = true" class="plus-btn w-28 h-28 flex justify-center items-center border border-green-500 hover:bg-green-500" title="Uchastka qo'shish">
            <i class="gg-math-plus text-2xl text-red"></i>
         </button>
      </main>
      <AddTerritory v-if="addForm" @close="addForm = false" @addTerritory="addTerritory" />
	</section>
</template>
<script>
import AddTerritory from './../components/AddTerritory.vue'
export default {
   data() {
      return {
         addForm: false,
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
      },
      addTerritory(){
         this.getTerritories()
         this.addForm = false
      }
   },
   components: {
      AddTerritory
   }
};
</script>
<style>
@import url('https://unpkg.com/css.gg/icons/all.css');
.gg-math-plus,
.gg-math-plus::after {
    display: block;
    box-sizing: border-box;
    background: #10b981;
    border-radius: 10px
}
.gg-math-plus {
    margin-top: -2px;
    position: relative;
    transform: scale(var(--ggs,1));
    width: 16px;
    height: 2px
}
.gg-math-plus::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 16px;
    top: -7px;
    left: 7px
}

.plus-btn:hover .gg-math-plus, .plus-btn:hover .gg-math-plus::after{
   background: white;
}
</style>