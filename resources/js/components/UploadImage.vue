<template>
	<section class="my-3">
		<label for="fileinp" class="mb-2 cursor-pointer hover:opacity-80 block shadow-lg text-center">
			<transition name="fade" mode="out-in">
				<img v-show="bool" class="rounded w-full h-40 object-cover inline-block" ref="imagePreview" src="/images/default.jpg" />
			</transition>
		</label>
		<input id="fileinp" type="file" multiple ref="fileInput" accept="image/png, image/gif, image/jpeg" @input="onchange" hidden />
		<div v-if="images.length > 0" class="w-full px-1 whitespace-nowrap  overflow-hidden overflow-x-scroll my-2">
			<main class="relative inline-block w-1/3" v-for="(image, i) in images" :key="i">
				<img :src="image.img" @click="mainImage(image.img)" :class="{'pl-2': i != 0}" class="cursor-pointer hover:opacity-80 object-cover w-full h-20" />
				<button class="absolute bottom-0 right-0 p-1" @click="deleteImage(i)">
					<img src="/images/trash-bin.png" class="w-4">
				</button>
			</main>
		</div>
		<main class="flex justify-end">
			<label for="fileinp" class="custom-btn m-0 shadow-sm bg-green-600 text-white hover:bg-green-800" title="Uchastka qo'shish">
               Qo'shish
            <i class="gg-math-plus ml-3"></i>
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
		this.mainImage(this.images[this.images.length - 1].img)
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
			if(this.images[i] == this.$refs.imagePreview.getAttribute('src')){
				this.images.splice(i, 1)

				this.mainImage(this.images[this.images.length - 1])
				this.deleteInServer()
				return
			}
			this.images.splice(i, 1)
			this.deleteInServer()
		},
		mainImage(imageblob) {
			if(imageblob == null) return
			console.log(this.$refs.imagePreview.getAttribute('src') ,imageblob);
			if(this.$refs.imagePreview.getAttribute('src') == imageblob) return
			this.bool = false

			setTimeout(() => {
				if(this.$refs.imagePreview){
					imageblob == undefined
						? (this.$refs.imagePreview.src = "/images/default.jpg")
						: (this.$refs.imagePreview.src = imageblob);
					this.bool = true
				}
			}, 200)
		},
	}
};
</script>