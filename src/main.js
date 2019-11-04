import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import sa0Tool from '@/sa0Tool/js/sa0Tool.js';
import '@/sa0Tool/css/sa0Tool.css';

Vue.prototype.$sa0Tool = sa0Tool;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
