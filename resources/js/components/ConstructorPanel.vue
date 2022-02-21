<template>
	<main class="w-1/6 flex flex-col h-full p-1 bg-gray-100">
		<aside class="h-full px-3 pt-3">
			<header class="bg-green-600 p-3 -m-5 flex justify-center  mb-5">
				<router-link to="/" class="text-white uppercase font-medium flex items-center">
					Constructor
					<i class="gg-extension ml-5"></i>
				</router-link>
			</header>
			<transition name="opacity" mode="out-in">
			<div v-if="$store.state.mesh.info">
				<h3
					class="text-center font-medium uppercase py-2 bg-gray-200 text-gray-600 mb-4 rounded shadow-inner"
				>Tanlangan obyekt</h3>
				<main v-if="$store.state.mesh.info.parentname == 'plant'" class="py-2 capitalize font-medium text-xl">
					{{$store.state.mesh.info.materialname}}
				</main>
				<main>
					<label for="names" class="text-sm text-gray-400">Obyekt nomi (raqami)</label>
					<input
						placeholder="Obyekt nomi"
						id="names"
						class="border-b border-green-600 my-1 outline-none p-2 w-full"
						type="text"
						v-model="$store.state.mesh.info.username"
						@change="change"
						@keyup="edit"
					/>
				</main>
				<main v-if="$store.state.mesh.info.parentname != 'plant'">
					<div v-if="$store.state.mesh.info.hovered == false" >
						<label for="height" class="text-sm text-gray-400">Bino Balandligi = <span class="text-gray-500 font-medium">{{$store.state.mesh.info.height}}</span></label>
						<input
							placeholder="Bino Balandligi"
							id="height"
							class="border-b border-green-600 my-1 outline-none p-2 w-full"
							type="range"
							min="0.01"
							max="7.1"
							step="0.1"
							v-model="$store.state.mesh.info.height"
							@change="change"
						/>
					</div>
					<div class="flex items-center mt-2">
						<input type="checkbox" v-model="$store.state.mesh.info.hovered" true-value="1"  false-value="0" @change="change">
						<span class="text-sm text-gray-400 ml-2">Maydon</span> 
					</div>
				</main>
				<main v-if="$store.state.mesh.info.parentname == 'plant'">
					<label for="height" class="text-sm text-gray-400">Ekilgan sana</label>
					<input
						placeholder="Bino Balandligi"
						id="height"
						class="border-b border-green-600 my-1 outline-none p-2 w-full"
						type="date"
						v-model="$store.state.mesh.info.plantTime"
						@change="change"
						@keyup="edit"
					/>
				</main>
				<main v-if="$store.state.mesh.info.hovered == true">
					<Uploader v-if="$store.state.mesh.images" />
				</main>
			</div>
			</transition>
		</aside>
		<aside class="flex-grow">
			<button class="custom-btn shadow border w-full justify-center m-0" @click="$store.dispatch('logout')">Chiqish</button>
		</aside>
	</main>
</template>
<script>
import Uploader from "../components/UploadImage.vue";
export default {
	data() {
		return {
			interval: null,
		};
	},
	mounted() {
		this.engine = Engine.Meshes;
	},
	unmounted() {
		this.engine.clearActiveMesh()
	},
	methods: {
		edit() {
			if (this.interval) clearTimeout(this.interval);

			this.interval = setTimeout(() => {
				if (store.state.mesh.active) {
					this.engine.editMesh({
						name: store.state.mesh.active.name,
						height: store.state.mesh.info.height,
						username: store.state.mesh.info.username,
						plantTime: store.state.mesh.info.plantTime,
						hovered: store.state.mesh.info.hovered,
					});
				}
			}, 800);
		},

		change() {
			console.log(store.state.mesh.info.hovered);
			if(store.state.mesh.info.hovered == true){
				store.state.mesh.info.height = 0.01
			}
			store.state.mesh.active.scaling.y = store.state.mesh.info.height;
			this.engine.editMesh({
				name: store.state.mesh.active.name,
				height: store.state.mesh.info.height,
				username: store.state.mesh.info.username,
				plantTime: store.state.mesh.info.plantTime,
				hovered: store.state.mesh.info.hovered,
			});
		},
	},
	components: {
		Uploader,
	},
};
</script>