
import SignupComponent from './Signup.vue';
import LoginComponent from './Login.vue';
import HomeComponent from './Home.vue';
import AddRestaurant from './Add.vue';
import UpdateRestaurant from './Update.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { name: 'signup', component: SignupComponent, path: '/sign-up' },
    { name: 'login',  component: LoginComponent,  path: '/' },
    { name: 'home',   component: HomeComponent,   path: '/home' },
    { name: 'add-restaurant',   component: AddRestaurant,   path: '/add-restaurant' },
    { name: 'update-restaurant',   component: UpdateRestaurant,   path: '/update-restaurant/:id' }
];


const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes, // Short for `routes: routes`
});


export default router;