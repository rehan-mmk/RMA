import { createApp } from 'vue';
import App from './App.vue';
import router from './components/routers';


// Create the Vue app instance and use the router
createApp(App).use(router).mount('#app');