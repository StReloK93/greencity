<template>
	<section class="my-3">
		<label for="fileinp" class="mb-2 cursor-pointer hover:opacity-80 block shadow-lg text-center">
			<transition name="fade" mode="out-in">
				<img v-show="bool" class="rounded w-full h-40 object-cover inline-block" ref="imagePreview" src="images/default.jpg" />
			</transition>
		</label>
		<input id="fileinp" type="file" multiple ref="fileInput" accept="image/png, image/gif, image/jpeg" @input="onchange" hidden />
		<div v-if="images.length > 0" class="w-full px-1 whitespace-nowrap  overflow-hidden overflow-x-scroll my-2">
			<main class="relative inline-block w-1/3" v-for="(image, i) in images" :key="i">
				<img :src="image" @click="mainImage(image)" :class="{'pl-2': i != 0}" class="cursor-pointer hover:opacity-80 object-cover w-full h-20" />
				<button class="absolute bottom-0 right-0 p-1" @click="deleteImage(i)">
					<img src="/images/trash-bin.png" class="w-4">
				</button>
			</main>
		</div>
		<main class="flex justify-end">
			<label for="fileinp" class="imageadd  cursor-pointer  bg-green-500 shadow  hover:bg-green-700">
				<svg class="fill-current w-5 text-white " fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
			</label>
		</main>
	</section>
</template>
<script>
export default {
	data() {
		return {
			images: [],
			files: [],
			bool: true,
		};
	},
	mounted() {
		this.images = store.state.mesh.images
		this.mainImage(this.images[this.images.length - 1])
	},
	methods: {
		onchange() {
			this.addfiles(this.$refs.fileInput.files)
			this.sendFilesToServer(this.files)
			this.mainImage(this.images[this.images.length - 1])
			this.$refs.fileInput.value = null
		},
		addfiles(imagesArr) {
			var arr = {
				files: [],
			};
			for (var i = 0; i < imagesArr.length; i++) {
				arr.files.push(imagesArr[i])
			}

			for (const i in arr.files) {
				this.files.push(arr.files[i])
			}
		},
		sendFilesToServer(files) {
			var formdata = new FormData()
			formdata.append(`name`, store.state.mesh.active.name)
			for (var i in files) {
				formdata.append(`image[${i}]`, files[i])
			}

			axios.post("/api/upload", formdata).then((response) => {
				this.images = response.data
				this.files = []
				this.mainImage(this.images[this.images.length - 1])
			});
		},
		deleteInServer(){
			axios.post("/api/deleteimages", {list: this.images, name: store.state.mesh.active.name})
		},

		deleteImage(i) {
			console.log(this.images[i], this.$refs.imagePreview.getAttribute('src'));
			if(this.images[i] == this.$refs.imagePreview.getAttribute('src')){
				this.images.splice(i, 1)

				this.mainImage(this.images[this.images.length - 1])
				this.deleteInServer()
				console.log('inner');
				return
			}
			console.log('out');
			this.images.splice(i, 1)
			this.deleteInServer()
		},
		mainImage(imageblob) {
			if(this.$refs.imagePreview.getAttribute('src') == imageblob) return

			this.bool = false
			setTimeout(() => {
				imageblob == undefined
					? (this.$refs.imagePreview.src = "images/default.jpg")
					: (this.$refs.imagePreview.src = imageblob);
				this.bool = true
			}, 200)
		},
	}
};
</script>