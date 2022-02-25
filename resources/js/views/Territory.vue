<template>
	<ImageViewer />
	<InfoPanel :path="`/api/territories/get/${this.id}`" />
	<main class="fixed flex top-0 left-16 m-4 items-center">
		<button @click="$router.go(-1)" class="custom-btn pl-2" to="/" >
			<i class="gg-chevron-left mr-3"></i>
			Orqaga
		</button>
		<span v-if="territory" class="font-medium text-xl ml-10 text-gray-600">
			{{territory.name}}
		</span>
	</main>
	<Authentication/>
	<canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
</template>
<script>
import CanvasEngine from "../scene/Userscene/Canvas";
import HotKeys from "../hotkeys";

import Authentication from '../components/Authentication.vue'
import ImageViewer from '../components/ImageViewer.vue';
import InfoPanel from '../components/InformationPanel.vue';
export default {
	props: ["id"],
	data() {
		return {
			territory: null,
		};
	},
	async mounted() {
		this.Engine = CanvasEngine(this.$refs.BuilderCanvas);
		HotKeys.loaderFile(this.Engine.Scene.scene);
      this.Engine.Scene.scene.onReadyObservable.add( async ()=>{
			await this.getParents();
			await this.getActive();
      })
		const {data} = await axios.get(`/api/territories/get/${this.id}`)
		this.territory = data
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
		Authentication,
		InfoPanel
	}
};
</script>