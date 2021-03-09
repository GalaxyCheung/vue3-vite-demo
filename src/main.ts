import { createApp } from 'vue';
import App from './App';
import router from './router';
// import store from './store';
// .use(store)

createApp(App).use(router).mount('#app');