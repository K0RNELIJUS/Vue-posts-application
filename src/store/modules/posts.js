import axios from 'axios';

// --- State
const state = {
  posts: [],
  singlePost: {},
  currentActivePostId: ''
};

// --- Getters
const getters = {
  allPosts: state => state.posts,
  singlePost: state => state.singlePost,
  currentActivePostId: state => state.currentActivePostId
};

//  --- Actions
const actions = {
  async fetchPosts({ commit }) {
    const { data } = await axios.get('http://localhost:3000/articles');
    commit('SET_POSTS', data);
  },

  // - Posts
  // Create new post
  async addPost({ commit }, newPost) {
    const { data } = await axios.post(
      'http://localhost:3000/articles',
      newPost
    );
    commit('ADD_NEW_POST', data);
  },

  // Delete post
  async deletePost({ commit }, id) {
    await axios.delete(`http://localhost:3000/articles/${id}`);
    commit('REMOVE_POST', id);
  },

  //  - Single post
  async fetchPost({ commit }, id) {
    const { data } = await axios.get(`http://localhost:3000/articles/${id}`);
    commit('SET_SINGLE_POST', data);
  },

  resetSinglePost({ commit }) {
    commit('RESET_SINGLE_POST');
  },

  async updatePost({ commit }, id, updatedPost) {
    const { data } = await axios.put(
      `http://localhost:3000/articles/${id}`,
      updatedPost
    );
    commit('UPDATE_POST', data);
  },
  // Set current active post id
  setCurrentActivePostId({ commit }, id) {
    commit('SET_CURRENT_ACTIVE_POST_ID', id);
  }
};

// --- Mutations
const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts.reverse()),
  // Create new post
  ADD_NEW_POST: (state, newPost) => state.posts.unshift(newPost),
  // Delete post
  REMOVE_POST: (state, id) => {
    state.posts = state.posts.filter(post => post.id !== id);
  },
  // Update post
  UPDATE_POST: (state, updatedPost) => {
    const index = state.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  },
  //   Single post
  SET_SINGLE_POST: (state, post) => (state.singlePost = post),
  RESET_SINGLE_POST: state => (state.singlePost = {}),
  // Set current active post id
  SET_CURRENT_ACTIVE_POST_ID: (state, id) => (state.currentActivePostId = id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
