<template>
	<section class="flex-grow h-full flex">
		<main class="h-full flex-grow relative p-2 shadow-inner bg-gray-100" ref="room">
			<section class="absolute top-0 left-0 m-4">
				<div @click="openFructsMenu()" :class="{'bg-gray-200': fructMenu}" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200">
					<img src="/images/tree.png" alt="">
					<main @click.stop="" v-if="fructMenu" class="menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500">
						<div v-for="fruct in fructs" :key="fruct" @click="addFruct(fruct.name,'plant')" class="flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 mb-2">
							{{fruct.name}} <span :style="{background: fruct.color}" class="color shadow-xl"></span>
						</div>
					</main>
				</div>
				<div @click="addBuilding('build','house')" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-gray-200">
					<img src="/images/build.png" alt="">
				</div>
				<div @click="openMeshBuilder" class="m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-gray-200">
					<img src="/images/plus.png" style="transform: scale(0.5)" alt="">
				</div>
			</section>
			<canvas ref="canvas" class="w-full h-full" :class="{'cursor-move': $store.state.activeMesh}" />
			<MeshBuilder @close="builderToggle = false" v-if="builderToggle" />
		</main>
		<main class="w-1/6 p-5">
			<router-view></router-view>
		</main>
	</section>
	<header class="flex p-5 shadow justify-between">
		<router-link to="/" class="font-bold text-green-800">YASHIL HUDUD</router-link>
		<main>
			<router-link to="/login">Kirish</router-link>
		</main>
	</header>
</template>

<script>
import HotKeys from "../hotkeys";
import CanvasEngine from "../scene/Mainscene/Canvas";
import fructColor from "../fructColor"

import MeshBuilder from "./MeshBuilder.vue"
export default {
	data() {
		return {
			fructs: fructColor,
			fructMenu: false,
			builderToggle: true
		}
	},
	mounted() {
		window.canvas = this.$refs.canvas
		window.Engine = CanvasEngine()
		HotKeys.loaderFile(this.$refs.room)
	},
	methods: {
		addFruct(fruct,plant){
			this.fructMenu = false
			const MesheClass = Engine.Meshes
			MesheClass.newMesh(fruct,plant,event)
		},
		addBuilding(build,house){
			const MesheClass = Engine.Meshes
			MesheClass.newMesh(build,house,event)
		},
		openFructsMenu(){
			this.fructMenu = !this.fructMenu
		},
		openMeshBuilder(){
			this.builderToggle = !this.builderToggle
		}
	},
	components:{
		MeshBuilder
	}
};
</script>

<style>
button, input, optgroup, select, textarea{
    color: black;
}
canvas{
    outline: none;
}

.menu{
	left: 90px;
	width: 170px;
}

.menu::after{
	content: "";
	position: absolute;
	top: 9px;
	left: -40px;
	border: 20px solid transparent; border-right: 20px solid #f3f4f6;
}

.color{
	height: 20px;
	width: 50px;
	display: inline-block;
}
</style>
