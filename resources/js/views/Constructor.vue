<template>
	<main class="h-full w-5/6 relative p-1 shadow-inner bg-gray-100" ref="room">
		<section class="absolute top-0 left-0 m-4">
			<div @click="fructMenu = !fructMenu;customMenu = false" :class="{'bg-gray-200': fructMenu}" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200">
					<img src="/images/tree.png" alt="">
					<main @click.stop="" v-if="fructMenu" class="menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500">
						<div v-for="fruct in fructs" :key="fruct" @click="addFruct(fruct.name,'plant')" class="flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 mb-2">
							{{fruct.name}} <span :style="{background: fruct.color}" class="color shadow-xl"></span>
						</div>
					</main>
			</div>
			<div v-if="customMeshes.length > 0" @click="customMenu = !customMenu;fructMenu = false" :class="{'bg-gray-200': customMenu}" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200">
					<img src="/images/build.png" alt="">
					<main @click.stop="" v-if="customMenu" class="menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500">
						<div v-for="(custom,index) in customMeshes" :key="index" @click="addBuilding('building',custom.name)" class="flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 pb-2">
							{{custom.clientname}} <span  class="color shadow-xl"></span>
						</div>
					</main>
			</div>
			<div @click="openMeshBuilder" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-gray-200">
					<img src="/images/plus.png" style="transform: scale(0.5)" alt="">
			</div>
		</section>
		<canvas ref="canvas" class="w-full h-full" :class="{'cursor-move': $store.state.drag}" />
		<MeshBuilder @newmesh="reloadMeshes" @close="builderToggle = false" v-if="builderToggle" />
	</main>
	<ConstructorPanel v-if="onload" />
</template>
<script>
import HotKeys from "../hotkeys";
import CanvasEngine from "../scene/Mainscene/Canvas";
import fructColor from "../fructColor";

import MeshBuilder from "./../components/MeshBuilder.vue";
import ConstructorPanel from "./../components/ConstructorPanel.vue";
export default {
	data() {
		return {
			fructs: fructColor,
			fructMenu: false,
			customMenu: false,
			builderToggle: false,
			customMeshes: [],
			engine: null,
			onload: null
		};
	},
	mounted() {
		window.canvas = this.$refs.canvas
		window.Engine = CanvasEngine()
		HotKeys.loaderFile();
		
		scene.onDataLoadedObservable.add(() => {
			this.onload = true
			const Native = Engine.Meshes.native;
			Native.getMeshes();
		});
		this.reloadMeshes();
	},
	methods: {
		addFruct(fruct, plant) {
			this.fructMenu = false;
			const meshClass = Engine.Meshes;
			meshClass.newMesh(fruct, plant, event);
		},

		addBuilding(build, house) {
			this.customMenu = false;
			const meshClass = Engine.Meshes;
			meshClass.newMesh(build, house, event);
		},

		openMeshBuilder() {
			this.builderToggle = !this.builderToggle;
		},
		async reloadMeshes() {
			this.customMeshes = [];
			const { data } = await axios.get("/api/getmeshes");
			const Native = Engine.Meshes.native;
			data.forEach((element) => {
				Native.createMesh(element);
				this.customMeshes.push({
					clientname: element.clientname,
					name: element.name,
				});
			});
		},
	},
	components: {
		MeshBuilder,
		ConstructorPanel
	},
};
</script>