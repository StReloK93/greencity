<template>
	<section class="my-3">
		<label for="fileinp" class="mb-2 block shadow-lg text-center">
			<transition name="fade" mode="out-in">
				<img v-show="bool" class="rounded w-full h-40 object-cover inline-block" ref="imagePreview" src="images/default.jpg" />
			</transition>
		</label>
		<input id="fileinp" type="file" multiple ref="fileInput" accept="image/png, image/gif, image/jpeg" @input="onchange" hidden />
		<div v-if="images.length" class="-ml-2 flex my-2">
			<main class=" relative inline-block w-1/3" v-for="(image, i) in images" :key="i">
				<img :src="image" @click="mainImage(image)" class="object-cover pl-2 w-full h-20" />
				<button class="text-red-600 absolute top-0 right-0" @click="deleteImage(i)">
					<img src="/images/trash-bin.png" class="w-4">
				</button>
			</main>
		</div>
		<main class="flex justify-end">
			<label for="fileinp" class="imageadd  border-white border">
				<span class="material-icons text-white">
					<img src="/images/plus2.png" class="cursor-pointer imgwhite w-6">
				</span>
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
	methods: {
		onchange() {
			this.addfiles(this.$refs.fileInput.files);
			this.sendFilesToServer(this.files);
			this.mainImage(this.images[this.images.length - 1]);
			this.$refs.fileInput.value = null;
		},
		addfiles(imagesArr) {
			var arr = {
				images: [],
				files: [],
			};
			for (var i = 0; i < imagesArr.length; i++) {
				arr.images.push(URL.createObjectURL(imagesArr[i]));
				arr.files.push(imagesArr[i]);
			}

			for (const i in arr.images) {
				this.images.push(arr.images[i]);
				this.files.push(arr.files[i]);
			}
		},
		sendFilesToServer(files) {
			var formdata = new FormData();
			for (var i in files) {
				formdata.append(`image[${i}]`, files[i]);
			}
			axios.post("/api/upload", formdata).then((res) => {
				console.log(res);
			});
		},
		deleteImage(i) {
			if(this.images[i] == this.$refs.imagePreview.src){
				this.images.splice(i, 1);
				this.files.splice(i, 1);
				this.mainImage(this.images[this.images.length - 1]);
				return
			}
			
			this.images.splice(i, 1);
			this.files.splice(i, 1);

		},
		mainImage(imageblob) {

			this.bool = false;
			setTimeout(() => {
				imageblob == undefined
					? (this.$refs.imagePreview.src = "images/default.jpg")
					: (this.$refs.imagePreview.src = imageblob);
				this.bool = true;
			}, 200);
		},
	}
};
</script>