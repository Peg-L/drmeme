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
import { VueMasonryPlugin } from 'vue-masonry';
import VueGtag from 'vue-gtag';
import CKEditor from '@ckeditor/ckeditor5-vue';

// vee validate
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    zhTW,
    validateOnInput: true,
  }),
});

const app = createApp(App);
const pinia = createPinia();

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

app.use(VueAxios, axios);
app.use(router);
app.use(VueSweetalert2);
app.use(pinia);
app.use(VueMasonryPlugin);
app.use(
  VueGtag,
  {
    appName: 'Dr Meme',
    pageTrackerScreenviewEnabled: true,
    config: { id: 'G-Q98Z0T08KK' },
  },
  router
);
app.use(CKEditor);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
