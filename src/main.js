import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import necessary functions from Vue Router

import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import User from './components/User.vue';

// Define your routes
const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home },
    { path: '/user/:id', component: User }
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes, // Short for `routes: routes`
});


// Vue.filter("Ucase", function(){
//     return val.toUpperCase();
// });

// Vue.filter("ConvertToPkr", function(){
//     return val*280;
// });


// Create the Vue app instance and use the router
createApp(App).use(router).mount('#app');