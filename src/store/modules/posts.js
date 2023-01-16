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
  },

  resetSinglePost({ commit }) {
    commit('resetSinglePost');
  },
  // Create new post
  async addPost({ commit }, newPost) {
    const { data } = await axios.post(
      'http://localhost:3000/articles',
      newPost
    );
    commit('addNewPost', data);
  },

  async deletePost({ commit }, id) {
    await axios.delete(`http://localhost:3000/articles/${id}`);
    commit('removePost', id);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts.reverse()),
  //   Single post
  setSinglePost: (state, post) => (state.singlePost = post),
  resetSinglePost: state => (state.singlePost = {}),
  // Create new post
  addNewPost: (state, newPost) => state.posts.unshift(newPost),
  // Delete post
  removePost: (state, id) => {
    state.posts = state.posts.filter(post => post.id !== id);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
