import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import authors from './modules/authors';

//dispatch => actions => mutations

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    authors
  }
});
