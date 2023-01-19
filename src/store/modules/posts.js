import axios from 'axios';

// --- State
const state = {
  posts: [],
  singlePost: {},
  currentActivePostId: '',
  error: ''
};

// --- Getters
const getters = {
  allPosts: state => state.posts,
  singlePost: state => state.singlePost,
  currentActivePostId: state => state.currentActivePostId,
  postsError: state => state.error
};

//  --- Actions
const actions = {
  async fetchPosts({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/articles');
      commit('SET_POSTS', data);
    } catch (error) {
      commit('SET_ERROR', error.message);
    }
  },

  // - Posts
  // Create new post
  async addPost({ commit }, newPost) {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/articles',
        newPost
      );
      commit('ADD_NEW_POST', data);
    } catch (error) {
      commit('SET_ERROR', error.message);
    }
  },

  // Delete post
  async deletePost({ commit }, id) {
    try {
      await axios.delete(`http://localhost:3000/articles/${id}`);
      commit('REMOVE_POST', id);
    } catch (error) {
      commit('SET_ERROR', error.message);
    }
  },

  //  - Single post

  async fetchPost({ commit }, id) {
    try {
      const { data } = await axios.get(`http://localhost:3000/articles/${id}`);
      commit('SET_SINGLE_POST', data);
    } catch (error) {
      console.log('state error', error.message);
      commit('SET_ERROR', error.message);
    }
  },

  resetSinglePost({ commit }) {
    commit('RESET_SINGLE_POST');
  },

  async updatePost({ commit }, updatedPost) {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/articles/${updatedPost.id}`,
        updatedPost
      );
      console.log('form Action', data);
      commit('UPDATE_POST', data);
    } catch (error) {
      commit('SET_ERROR', error.message);
    }
  },
  // Set current active post id
  setCurrentActivePostId({ commit }, id) {
    commit('SET_CURRENT_ACTIVE_POST_ID', id);
  },
  // Reset error
  clearError({ commit }) {
    commit('SET_ERROR', '');
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
      console.log('from mutation', updatedPost);
    }
  },
  // Single post
  SET_SINGLE_POST: (state, post) => (state.singlePost = post),
  RESET_SINGLE_POST: state => (state.singlePost = {}),
  // Set current active post id
  SET_CURRENT_ACTIVE_POST_ID: (state, id) => (state.currentActivePostId = id),
  // Error
  SET_ERROR: (state, error) => (state.error = error)
};

export default {
  state,
  getters,
  actions,
  mutations
};
