import SignupComponent from './Signup.vue';
import LoginComponent from './Login.vue';
import HomeComponent from './Home.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { name: 'signup', component: SignupComponent, path: '/sign-up' },
    { name: 'login',  component: LoginComponent,  path: '/login' },
    { name: 'home',   component: HomeComponent,   path: '/' },
];


const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes, // Short for `routes: routes`
});


export default router;