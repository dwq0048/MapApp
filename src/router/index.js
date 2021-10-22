import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home'),
		children: [
			{
				path: '/',
				name: "load",
				component: () => import('@/views/Load'),
				meta: { transition: 'slide-left' },
			},
			{
				path: '/map',
				name : 'Map',
				component: () => import('@/views/Map'),
				meta: { transition: 'slide-right' },
			},
			{
				path: '/403',
				name : '403',
				component: () => import('@/views/403'),
				meta: { transition: 'slide-right' },
			},
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
