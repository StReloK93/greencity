<template>
	<main class="fixed top-0 right-16 mx-2 my-4">
		<div v-if="$store.state.user" class="flex">
			<router-link v-if="$route.name != 'territories'" class="custom-btn" to="/territories">
				Maydonlar
				<i class="gg-clapper-board ml-3"></i>
			</router-link>
			<button @click="$store.dispatch('logout')" class="custom-btn ml-4 ">
				Chiqish
				<i class="gg-log-out ml-3 mr-1"></i>
			</button>
		</div>
		<div v-else class="flex" >
			<router-link class="custom-btn" to="/login">
				Kirish
				<i class="gg-log-in ml-5 mr-0"></i>
			</router-link>
		</div>
	</main>
</template>