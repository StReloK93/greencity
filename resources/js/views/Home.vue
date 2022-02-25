<template>
	<InformationPanel path="/api/plantInfromation" />
	<Authentication />
	<canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
	<transition name="lift">
		<HomePanel v-if="Engine && $store.state.territories" :Engine="Engine" />
	</transition>
</template>
<script>
import CanvasEngine from "../scene/Viewscene/Canvas";
import HomePanel from "../components/HomePanel.vue";
import hot from "../hotkeys"


import Authentication from "../components/Authentication.vue";
import InformationPanel from "../components/InformationPanel.vue";
export default {
	data() {
		return {
			Engine: null,
		};
	},
	mounted() {
		this.Engine = CanvasEngine(this.$refs.BuilderCanvas);
		hot.loaderFile(this.Engine.Scene.scene)
	},
	unmounted() {
		if(store.state.mesh.active){
			this.Engine.Import.clearActiveMesh();
		}
	},
	components: {
		HomePanel,
		Authentication,
		InformationPanel
	},
};
</script>
<style scoped>
.text-holo{
   color: #a5e6ff;
}

.lift-enter-active, .lift-leave-active {
  transition: 0.3s;
  opacity: 1;
  transform: translateX(0);
}
.lift-enter-from ,.lift-leave-to  {
  opacity: 0;
  transform: translateX(-100%);
}

</style>