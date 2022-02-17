<template>
	<main class="h-full w-5/6 relative p-1  shadow-inner bg-gray-300" ref="room">
		<section class="absolute top-0 left-0 m-4">
			<div @click="fructMenu = !fructMenu;customMenu = false" :class="{'bg-gray-200': fructMenu}" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200">
					<img src="/images/tree.png">
					<main @click.stop="" v-if="fructMenu" class="menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500">
						<div v-for="fruct in fructs" :key="fruct" @click="addFruct(fruct.name,'plant')" class="flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 mb-2">
							{{fruct.name}} <span :style="{background: fruct.color}" class="color shadow-xl"></span>
						</div>
					</main>
			</div>
			<div v-if="customMeshes.length > 0" @click="customMenu = !customMenu;fructMenu = false" :class="{'bg-gray-200': customMenu}" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200">
				<img src="/images/build.png">
				<main @click.stop="" v-if="customMenu" class="menu absolute bg-gray-100 shadow-xl px-3 py-1 top-0 text-gray-500">
					<div v-for="(custom,index) in customMeshes" :key="index"  class="flex items-center capitalize justify-between my-2">
						<aside @click="addBuilding('building',custom.name)" class="cursor-pointer bg-gray-200 hover:bg-gray-300  hover:text-red-50 flex-grow p-1 pl-2">
							{{custom.clientname}}
						</aside>
						<span @click="deleteParentMesh(custom.name)" class="text-white cursor-pointer bg-red-500 hover:bg-red-600 py-2 ml-1 px-3 h-full inline-block">
							<i class="gg-trash"></i>
						</span>
					</div>
				</main>
			</div>
			<div @click="openMeshBuilder" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-gray-200">
					<img src="/images/plus.png" style="transform: scale(0.5)">
			</div>
		</section>
		<section class="absolute top-0 right-0 m-5 flex">
			<router-link title="Ko'rish" class="custom-btn" :to="{ name: 'territory', params: { id: id }}" ><i class="gg-eye"></i></router-link>
			<router-link title="Maydonlar" class="custom-btn ml-4" to="/territories"><i class="gg-clapper-board"></i></router-link>
			<router-link title="Bosh sahifa" class="custom-btn ml-4" to="/" > Bosh sahifa <img src="/images/home.png" class="ml-3 w-5"></router-link>
		</section>
		<canvas ref="canvas" class="w-full h-full" :class="{'cursor-move': $store.state.drag}" />
		<MeshBuilder :id="id" @newmesh="reloadMeshes" @close="builderToggle = false" v-if="builderToggle" />
		<InfoButtons />
	</main>
	<ConstructorPanel v-if="onload" />
</template>
<script>
import HotKeys from "../hotkeys";
import CanvasEngine from "../scene/Mainscene/Canvas";
import fructColor from "../fructColor";

import MeshBuilder from "./../components/MeshBuilder.vue";
import ConstructorPanel from "./../components/ConstructorPanel.vue";
import InfoButtons from "../components/InfoButtonsConstructor.vue";

export default {
	props: ['id'],
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
	async beforeCreate() {
		const {data} = await axios.get(`/api/territories/getone/${this.id}`)
		if(data == false){
			router.push({ name: 'territories' })
		}
	},
	mounted() {
		window.canvas = this.$refs.canvas
		window.Engine = CanvasEngine()
		HotKeys.loaderFile(scene);
		Engine.Meshes.id = this.id
		scene.onDataLoadedObservable.add(() => {
			this.onload = true
			const Native = Engine.Meshes.native;
			Native.getMeshes(this.id);
		});
		
		
		this.reloadMeshes();
	},
	methods: {
		addFruct(fruct, plant) {
			this.fructMenu = false;
			const meshClass = Engine.Meshes;
			meshClass.newMesh(fruct, plant, event, this.id);
		},

		addBuilding(build, house) {
			this.customMenu = false;
			const meshClass = Engine.Meshes;
			meshClass.newMesh(build, house, event, this.id);
		},

		openMeshBuilder() {
			this.builderToggle = !this.builderToggle;
		},

		async reloadMeshes() {
			this.customMeshes = [];
			const { data } = await axios.get(`/api/getparents/${this.id}`);
			const Native = Engine.Meshes.native;
			data.forEach((element) => {
				Native.createMesh(element);
				this.customMeshes.push({
					clientname: element.clientname,
					name: element.name,
				});
			});
		},
		
		async deleteParentMesh(name){
			const { data } = await axios.get(`/api/deleteParent/${name}`);
			const gine = Engine.Meshes

			data.forEach(mesh => {
				gine.deleteInScene(mesh.name)
			});
			this.reloadMeshes();
		},
	},
	components: {
		MeshBuilder,
		ConstructorPanel,
		InfoButtons
	},
};
</script>