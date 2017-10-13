/**
 * home
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import Breadcrumb from 'components/breadcrumb.vue';

import App from './app.vue';
import routes from './routes';
import './index.scss';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.component('db-breadcrumb', Breadcrumb);

const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
