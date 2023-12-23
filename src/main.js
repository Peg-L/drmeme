import { createApp } from 'vue';
import 'bootstrap/dist/js/bootstrap.min.js';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

import './assets/SCSS/all.scss';
import './assets/JS/banner';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
