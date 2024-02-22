import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/SCSS/all.scss';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
const pinia = createPinia();

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

app.use(VueAxios, axios);
app.use(router);
app.use(VueSweetalert2);
app.use(pinia);

app.mount('#app');
