export default [
	{
		path: '/',
		component: () => import('../views/Home.vue'),
		name: 'home',
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue'),
		name: 'login',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/register',
		component: () => import('../views/Register.vue'),
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/constructor',
		component: () => import('../views/Constructor.vue'),
		name: 'constructor',
		meta: {
			guard: 'auth'
		}
	},
	{
		path: '/user/:id',
		component: () => import('../views/Userprofile.vue'),
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: '/',
	// }
];