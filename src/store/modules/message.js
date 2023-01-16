const state = {
  isOpen: false,
  title: '',
  body: ''
};

const getters = {
  messageState: state => {
    return {
      isOpen: state.isOpen,
      title: state.title,
      body: state.body
    };
  }
};

const actions = {
  openMessage({ commit }) {
    commit('openMessage');
  },
  closeMessage({ commit }) {
    commit('closeMessage');
  },
  messageContent({ commit }, payload) {
    commit('setMessage', payload);
  },
  clearMessage({ commit }) {
    commit('closeMessage');
    commit('setMessage', { title: '', body: '' });
  }
};

const mutations = {
  openMessage: state => (state.isOpen = true),
  closeMessage: state => (state.isOpen = false),
  setMessage: (state, payload) => {
    state.title = payload.title;
    state.body = payload.body;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
