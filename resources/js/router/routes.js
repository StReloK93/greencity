export default [
	{
		path: '/',
		component: () => import('../views/HomePage.vue'),
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	redirect: '/',
	// }
];