<template>
   <section class="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center" @click="$emit('close')">
      <form @submit.prevent="addTerritory" class="px-6 py-10 bg-white w-96 rounded border border-green-600" @click.stop="">
         <h3 class="mb-5 text-center text-xl font-bold text-gray-600">Yangi uchastka kiritish</h3>
         <label for="nameTerritory" class="text-gray-400 text-sm mb-2 inline-block">Uchastka nomi</label>
         <div>
            <input id="nameTerritory" type="text" v-model="form.name" placeholder="Uchastka nomi" class="bg-gray-100  p-2 outline-none mb-5 w-full" required>
         </div>
         <div>
            <button type="submit" class="p-2 bg-green-500 text-white w-full shadow">
               Saqlash
            </button>
         </div>
      </form>
   </section>
</template>
<script>
import axios from 'axios'
export default {
   data() {
      return {
         form: {
            name: "",
         },
         timer: true
      }
   },
   methods: {
      async addTerritory(){
         if(this.timer){
            const data = await axios.post('api/territories/create', this.form)
            if(data.status == 201){
               this.$emit('addTerritory')
            } 
            this.timer = false
            
            setTimeout(()=>{
               this.timer = true
            },2000)
         }

      }
   },
}
</script>
<style>
   
</style>