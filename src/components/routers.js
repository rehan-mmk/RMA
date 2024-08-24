import Signup from './Signup.vue';
import Home from './Home.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { name: 'signup', component: Signup, path: '/sign-up' },
    { name: 'Home', component: Home, path: '/' },
];


const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes, // Short for `routes: routes`
});


export default router;