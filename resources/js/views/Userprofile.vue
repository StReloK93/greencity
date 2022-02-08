<template>
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
	<main v-else class="uppercase fixed top-0 right-0 text-blue-600">
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


export default {
	props: ["id"],
	async mounted() {
      this.Engine = CanvasEngine(this.$refs.BuilderCanvas);
      HotKeys.loaderFile(this.Engine.Scene.scene);
      await this.getParents()
      await this.getActive()
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
};
</script>