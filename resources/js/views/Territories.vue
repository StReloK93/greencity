<template>
   <Authentication />
   <main class="fixed top-0 left-16 m-2">
      <router-link title="Bosh sahifa" class="custom-btn my-2 shadow-sm" to="/" > Bosh sahifa <img src="/images/home.png" class="ml-3 w-5"></router-link>
   </main>
	<section class="w-full bg-gray-300 pt-24">
      <div class="px-16 py-2">
         <main v-if="territories.length > 0" class="flex flex-wrap">
            <aside v-for="(territory,index) in territories" :key="index" class="mb-3 w-1/4 px-2">
               <main class="p-5 shadow-inner bg-gray-100 text-gray-600 inline-block rounded w-full">
                  <aside class="flex justify-between items-center">
                     <form @submit.prevent="saveName(territory, index)">
                        <input type="text" ref="inputs" class="uppercase py-1  font-medium text-xl outline-none border-b border-green-600 bg-white p-2" disabled :value="territory.name" />
                     </form>
                     <button v-if="territory.boolean" @click="editName(territory, index)" class="inline-block py-4 px-3 bg-gray-200 rounded">
                        <i class="gg-pen text-green-800"></i>
                     </button>
                     <button v-else @click="saveName(territory, index)" class="inline-block p-2 bg-gray-200 rounded">
                        <i class="gg-clipboard text-green-800"></i>
                     </button>
                  </aside>
                  <div class="flex justify-between my-3">
                     <span>Mevali daraxt</span><span>10</span>
                  </div>
                  <div class="flex justify-between my-3">
                     <span>Manzarali daraxt</span><span>22</span>
                  </div>
                  <main class="flex justify-between">
                     <button @click="openDeleteForm(territory.id)" class="custom-btn bg-gray-600 hover:bg-red-700">
                        <i class="gg-trash text-white"></i>
                     </button>
                     <router-link :to="{ name: 'constructor', params: { id: territory.id }}" class="custom-btn justify-center shadow-sm">
                        Constructor
                        <i class="gg-chevron-right ml-3"></i>
                     </router-link>
                  </main>
               </main>
            </aside>
         </main>
         <main class="p-2">
            <button @click="addForm = true" class="custom-btn shadow-sm bg-green-600 text-white hover:bg-green-800" title="Uchastka qo'shish">
               Qo'shish
               <i class="gg-math-plus ml-3"></i>
            </button>
         </main>
      </div>
      <transition name="fade">
         <AddTerritory v-if="addForm" @close="addForm = false" @addTerritory="addTerritory" />
      </transition>
      <transition name="fade">
         <AskDeletion v-if="activeId" :id="activeId" @close="activeId = null" @deleted="getTerritories(true)" />
      </transition>
	</section>
</template>
<script>
import AddTerritory from '../components/AddTerritory.vue'
import Authentication from '../components/Authentication.vue'
import AskDeletion from '../components/AskDeletion.vue'
export default {
   data() {
      return {
         inpArray: [],
         addForm: false,
         territories: [],
         disabled: false,
         activeId: null,
      }
   },
   async mounted() {
      this.getTerritories()
   },
   methods: {
      async getTerritories(bool = false){
         if(bool){
            this.activeId = null
         }
        const {data} = await axios.get('/api/territories/getforuser')
         data.forEach((elem,i) => {
            data[i].boolean = true
         });
         this.territories = data
      },
      addTerritory(){
         this.getTerritories()
         this.addForm = false
      },
      editName(territory,inpid){
         let input = this.$refs.inputs[inpid]
         input.disabled = false
         territory.boolean = false
         input.focus();
      },
      async saveName(territory,inpid){
         let input = this.$refs.inputs[inpid]
         const {data} = await axios.post('api/territories/update', {id:territory.id, name: input.value})
         data.forEach((elem,i) => {
            data[i].boolean = true
         });
         this.territories = data
         input.disabled = true
         territory.boolean = true
      },
      openDeleteForm(id){
         this.activeId = id
      }
   },
   components: {
      AddTerritory,
      Authentication,
      AskDeletion
   }
};
</script>
<style scoped>
input[type="text"]:disabled{
   background: transparent!important;
   border-color: transparent!important;
}
</style>