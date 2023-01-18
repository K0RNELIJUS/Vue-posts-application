import axios from 'axios';

const state = {
  authors: [],
  error: ''
};

const getters = {
  allAuthors: state => state.authors,
  authorsError: state => state.error
};

const actions = {
  async fetchAuthors({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/authors');
      commit('SET_AUTHORS', data);
    } catch (error) {
      commit('SET_ERROR', error.message);
    }
  }
};

const mutations = {
  SET_AUTHORS: (state, authors) => (state.authors = authors),
  SET_ERROR: (state, error) => (state.error = error)
};

export default {
  state,
  getters,
  actions,
  mutations
};
