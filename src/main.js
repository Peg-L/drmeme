import { createApp } from 'vue';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/SCSS/all.scss';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
