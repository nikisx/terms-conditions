import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/HelloWorld.vue';
import Request from './components/Request/Request.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/request',
		name: 'request',
		component: Request,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app')
