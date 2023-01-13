import axios from 'axios';

const state = {
  authors: []
};

const getters = {
  allAuthors: state => state.authors
};

const actions = {
  async fetchAuthors({ commit }) {
    const { data } = await axios.get('http://localhost:3000/authors');
    commit('setAuthors', data);
  }
};

const mutations = {
  setAuthors: (state, authors) => (state.authors = authors)
};

export default {
  state,
  getters,
  actions,
  mutations
};
