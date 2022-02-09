<template>

	<main v-if="$store.state.user" class="uppercase fixed top-0 right-0 text-green-400">
		<router-link
			class="shadow inline-block p-2 px-4 m-3 border border-green-400 hover:bg-green-400 hover:text-white"
			to="/territories"
		>Maydonlar</router-link>
		<button
			@click="$store.dispatch('logout')"
			class="uppercase shadow inline-block text-green-400 p-2 px-4 m-3 border border-green-400 hover:bg-green-400 hover:text-white"
		>Tizimdan chiqish</button>
	</main>
	<main v-else class="uppercase fixed top-0 right-0 text-green-400">
		<router-link
			class="shadow inline-block p-2 px-4 m-3 border border-green-400 hover:bg-green-400 hover:text-white"
			to="/login"
		>Kirish</router-link>
	</main>
	<canvas class="h-full w-full border-transparent" ref="BuilderCanvas"></canvas>
	<transition name="lift">
		<HomePanel v-if="Engine && $store.state.territories" :Engine="Engine" />
	</transition>
</template>
<script>
import CanvasEngine from "../scene/Viewscene/Canvas";
import HomePanel from "../components/HomePanel.vue";
export default {
	data() {
		return {
			Engine: null,
		};
	},
	mounted() {
		this.Engine = CanvasEngine(this.$refs.BuilderCanvas);
	},
	unmounted() {
		this.Engine.Import.clearActiveMesh();
	},
	components: {
		HomePanel,
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
  transform: translateY(0);
}
.lift-enter-from ,.lift-leave-to  {
  opacity: 0;
  transform: translateY(100%);
}

</style>