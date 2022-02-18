<template>
	<transition name="fade">
		<main @click="$store.state.images = null" v-if="$store.state.images && $store.state.images.length > 0" class="fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50 ">
			<div class="px-20 py-8 bg-black bg-opacity-30 shadow w-full"  @click.stop="">
				<Carusel class="w-full" :itemCount="3">
					<main v-for="image in $store.state.images" :key="image" class="inline-block relative w-1/3 px-2">
						<span class="absolute bottom-0 right-2 p-2 bg-gray-200 font-medium text-gray-700">
							{{image.created}}
						</span>
						<div class="bg-white h-96">
							<img :src="image.img" class="object-cover w-full h-full border-2 border-gray-200">
						</div>
					</main>
				</Carusel>
				<button @click="$store.state.images = null" class="absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3  shadow-xl  hover:bg-red-500">
					<img src="/images/close.png" class="imgwhite w-4">
				</button>
			</div>
		</main>
		<main @click="$store.state.images = null" v-else-if="$store.state.images && $store.state.images.length == 0" class="fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50 ">
			<div class="px-20 py-8 bg-black bg-opacity-30 shadow w-full"  @click.stop="">
				<div class="h-96 text-4xl flex items-center justify-center font-bold uppercase text-gray-300">
					Rasm kiritilmagan
				</div>
				<button @click="$store.state.images = null" class="absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3  shadow-xl  hover:bg-red-500">
					<img src="/images/close.png" class="imgwhite w-4">
				</button>
			</div>
		</main>
	</transition>
</template>
<script>
import Carusel from '../components/Carusel.vue'
export default {
   components:{
      Carusel
   },
	mounted() {
		console.log(this.$store.state.images)
	},
}
</script>