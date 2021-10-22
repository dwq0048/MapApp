import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueCookies from "vue-cookies";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
library.add(far);
axios.defaults.headers.post['Content-Type'] = 'application/json';

require('@/assets/css/app.scss');
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
