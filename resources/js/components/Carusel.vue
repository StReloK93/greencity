<template>
   <section class="flex justify-between items-center relative">
		<transition name="fades" mode="out-in">
			<button @click="prev" v-if="prosent != 0" class="absolute left-ang top-0 left-0 w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center ">
				<img src="/images/leftang.png" class="w-2/3 btns">
			</button>
		</transition>
      <aside class="overflow-hidden flex-grow">
         <main ref="mainBlock" :style="transform" :class="{'-ml-2':prosent == 0}" class="whitespace-nowrap easy-transition">
				<slot></slot>
         </main>
      </aside>
		<transition name="fades" mode="out-in">
			<button @click="next" v-if="prosent != endItem && slots > itemCount" class="absolute right-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center">
				<img src="/images/leftang.png" class="w-2/3">
			</button>
		</transition>
   </section>
</template>
<script>
export default {
	props: ['itemCount'],
   data() {
      return {
			prosent: 0,
			endItem: null,
			slots: null,
      };
   },
	computed:{
		transform(){
			return {transform: `translateX(${this.prosent}%)`}
		},
		casr(){
			var count = this.$refs.mainBlock.children.length
			if((count%this.itemCount) == 0) return 0
			return this.itemCount - (count%this.itemCount) 
		}
	},
	mounted() {
		this.slots = this.$refs.mainBlock.children.length
		let countItem = this.$refs.mainBlock.children.length - this.itemCount //10 - 4
		let viewItem = this.itemCount
		this.endItem = -countItem*100/viewItem
	},
   methods: {
      next() {
			let viewItem = this.itemCount
			if((this.endItem) < this.prosent)
				this.prosent += -100/viewItem
		},

		prev(){
			if(this.prosent < 0)
				this.prosent += 100/this.itemCount
		}
   },
};
</script>
<style>
.btns{
	transform: scale(-1);
   position: relative;
   top: 1px;
}

.fades-enter-active,
.fades-leave-active {
  transition: 1s ease;
}

.fades-enter-from,
.fades-leave-to {
  opacity: 0;
  transform: scaleX(0);
  width: 0;
}
.easy-transition{
   transition: .5s;
}

.left-ang {
	left: -50px;
	transform: translateY(-50%);
	top: 50%;
}

.right-ang {
	right: -50px;
	transform: translateY(-50%);
	top: 50%;
}
</style> 