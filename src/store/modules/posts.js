import axios from 'axios';

const state = {
  posts: [],
  singlePost: {}
};

const getters = {
  allPosts: state => state.posts,
  singlePost: state => state.singlePost
};

const actions = {
  async fetchPosts({ commit }) {
    const { data } = await axios.get('http://localhost:3000/articles');
    commit('setPosts', data);
  },

  //   Single post
  async fetchPost({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3000/articles/${id}`);
    commit('setSinglePost', data);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),

  setSinglePost: (state, post) => (state.singlePost = post)
};

export default {
  state,
  getters,
  actions,
  mutations
};
