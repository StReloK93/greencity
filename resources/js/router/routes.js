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
		path: '/constructor/:id',
		component: () => import('../views/Constructor.vue'),
		name: 'constructor',
		meta: {
			guard: 'auth'
		},
		props: true
	},
	{
		path: '/territories',
		component: () => import('../views/Territories.vue'),
		name: 'territories',
		meta: {
			guard: 'auth'
		}
	},
	{
		path: '/territory/:id',
		name: 'territory',
		component: () => import('../views/Territory.vue'),
		props: true
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	}
];