import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';
import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/HelloWorld.vue';
import Request from './components/Request/Request.vue';
import Faq from './components/Faq/Faq.vue';
import 'vue-toast-notification/dist/theme-sugar.css';

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
	{
		path: '/faq',
		name: 'faq',
		component: Faq,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// always scroll to top
		return { top: 0 }
	},
});

createApp(App).use(router).use(ToastPlugin).mount('#app')
