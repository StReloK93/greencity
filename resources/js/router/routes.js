export default [
	{
		path: '/',
		component: () => import('../views/HomePage.vue'),
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		component: () => import('../views/Register.vue'),
	},
	{
		path: '/constructor',
		component: () => import('../views/Constructor.vue'),
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