<template>
	<main @click="$store.state.images = null" v-if="$store.state.images && $store.state.images.length > 0" class="fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50 ">
		<div class="px-20 py-8 bg-black bg-opacity-30 shadow w-full"  @click.stop="">
			<Carusel class="w-full" :itemCount="4">
				<main v-for="image in $store.state.images" :key="image" class="inline-block w-1/4 px-2">
					<div class="bg-white h-96">
						<img :src="image" class="object-cover w-full h-full border-2 border-white">
					</div>
				</main>
			</Carusel>
			<button @click="$store.state.images = null" class="absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3  shadow-xl  hover:bg-red-500">
				<img src="/images/close.png" class="imgwhite w-4">
			</button>
		</div>
	</main>
	<main v-if="$store.state.user" class="uppercase fixed top-0 right-0 text-green-600">
		<router-link
			class="shadow inline-block p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white"
			to="/constructor"
		>Constructor</router-link>
		<button
			@click="$store.dispatch('logout')"
			class="shadow uppercase inline-block text-green-600 p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white"
		>Tizimdan chiqish</button>
	</main>
	<main v-else class="uppercase fixed top-0 right-0 text-green-600">
		<router-link
			class="shadow inline-block p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white"
			to="/login"
		>Kirish</router-link>
	</main>
	<canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
</template>
<script>
import CanvasEngine from "../scene/Userscene/Canvas";
import HotKeys from "../hotkeys";
import Carusel from './../components/Carusel.vue'
export default {
	props: ["id"],
	data() {
		return {

		};
	},
	async mounted() {
		this.Engine = CanvasEngine(this.$refs.BuilderCanvas);
		HotKeys.loaderFile(this.Engine.Scene.scene);
		await this.getParents();
		await this.getActive();
	},
	methods: {
		async getParents() {
			this.customMeshes = [];
			const { data } = await axios.get(`/api/getparents/${this.id}`);
			const Native = this.Engine.Meshes;
			data.forEach((element) => {
				Native.createMesh(element);
				this.customMeshes.push({
					clientname: element.clientname,
					name: element.name,
				});
			});
		},

		async getActive() {
			const Native = this.Engine.Meshes;
			Native.getMeshes(this.id);
		},
	},
	components:{
		Carusel
	}
};
</script>