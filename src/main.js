import Vue from 'vue';
import App from './App.vue';
import 'bulma/css/bulma.css';
// Activates async/await  npm i -S core-js@latest regenerator-runtime@latest
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// Router imports
import VueRouter from 'vue-router';
import Routes from './router/index';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  //class for Bulma CSS
  linkActiveClass: 'is-active'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
