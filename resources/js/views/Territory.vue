<template>
	<ImageViewer/>
	<main class="fixed top-0 left-16 m-4">
		<button @click="$router.go(-1)" class="custom-btn" to="/" >
			<i class="gg-corner-up-left mr-3"></i>
			Orqaga
		</button>
	</main>
	<Authentication/>
	<canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
</template>
<script>
import CanvasEngine from "../scene/Userscene/Canvas";
import HotKeys from "../hotkeys";

import Authentication from '../components/Authentication.vue'
import ImageViewer from '../components/ImageViewer.vue';
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
		ImageViewer,
		Authentication
	}
};
</script>