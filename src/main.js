import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import store from "./store";
import router from "./router";
import './assets/styles/main.css'


createApp(App).use(store).use(router).mount('#app');
