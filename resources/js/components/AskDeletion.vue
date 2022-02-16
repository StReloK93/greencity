<template>
   <section class="fixed top-0 left-0 bg-black pt-16 bg-opacity-50 w-full h-full flex items-start justify-center" @click="$emit('close')">
      <form @submit.prevent="deleteTerritory" class="p-6 bg-white w-96" @click.stop="">
			<h3 class="text-center text-gray-600 font-medium text-2xl mb-2">Aniq o'chirmoqchimisiz?</h3>
			<p class="mb-4 text-gray-400 text-center">
				Malumotlarni tiklab bo'lmaydi
			</p>
         <div class="flex">
            <span @click="$emit('close')" class="p-2 mr-2 flex items-center justify-center rounded uppercase bg-red-500 text-white w-full shadow">
               yoq <i class="gg-close ml-3"></i>
            </span>
            <button type="submit" class="p-2 ml-2 rounded uppercase flex items-center justify-center bg-green-500 text-white w-full shadow">
               Ha <i class="gg-check ml-3 transform scale-150"></i>
            </button>
         </div>
      </form>
   </section>
</template>
<script>
export default {
	props:['id'],
   data() {
      return {
         form: {
            name: "",
         },
         timer: true
      }
   },
   methods: {
      async deleteTerritory(){
			const data = await axios.get(`/api/territories/delete/${this.id}`)
			this.$emit('deleted')
      }
   },
}
</script>