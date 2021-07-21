import Vue from 'vue';
import '@/assets/scss/main.scss';
import panZoom from 'vue-panzoom';
import App from './App';

// install plugin
Vue.use(panZoom);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
