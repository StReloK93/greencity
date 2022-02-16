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
					<label for="height" class="text-sm text-gray-400">Bino Balandligi</label>
					<input
						placeholder="Bino Balandligi"
						id="height"
						class="border-b border-green-600 my-1 outline-none p-2 w-full"
						type="number"
						v-model="$store.state.mesh.info.height"
						@change="change"
						@keyup="edit"
					/>
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
				<main v-if="$store.state.mesh.info.parentname == 'plant'">
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
			store.state.mesh.active.scaling.y = store.state.mesh.info.height;
			if (this.interval) clearTimeout(this.interval);

			this.interval = setTimeout(() => {
				if (store.state.mesh.active) {
					this.engine.editMesh({
						name: store.state.mesh.active.name,
						height: store.state.mesh.info.height,
						username: store.state.mesh.info.username,
						plantTime: store.state.mesh.info.plantTime,
					});
				}
			}, 800);
		},

		change() {
			this.engine.editMesh({
				name: store.state.mesh.active.name,
				height: store.state.mesh.info.height,
				username: store.state.mesh.info.username,
				plantTime: store.state.mesh.info.plantTime,
			});
		},
	},
	components: {
		Uploader,
	},
};
</script>
<style>
/* полоса прокрутки (скроллбар) */
::-webkit-scrollbar {
    width: 6px; /* ширина для вертикального скролла */
    height: 6px; /* высота для горизонтального скролла */
    background-color: #aaa;
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: #05ae23;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #253861;
}
</style>