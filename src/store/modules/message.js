const state = {
  isOpen: false,
  title: '',
  body: '',
  isDelete: false,
  isSuccess: false,
  isError: false
};

const getters = {
  messageState: state => {
    return {
      isOpen: state.isOpen,
      title: state.title,
      body: state.body,
      isDelete: state.isDelete,
      isSuccess: state.isSuccess,
      isError: state.isError
    };
  }
};

const actions = {
  openMessage({ commit }) {
    commit('OPEN_MESSAGE');
  },
  closeMessage({ commit }) {
    commit('CLOSE_MESSAGE');
  },
  messageContent({ commit }, payload) {
    commit('SET_MESSAGE', payload);
  },
  clearMessage({ commit }) {
    commit('CLOSE_MESSAGE');
    commit('SET_MESSAGE', {
      title: '',
      body: '',
      isDelete: false,
      isSuccess: false,
      isError: false
    });
  }
};

const mutations = {
  OPEN_MESSAGE: state => (state.isOpen = true),
  CLOSE_MESSAGE: state => (state.isOpen = false),
  SET_MESSAGE: (state, payload) => {
    state.title = payload.title;
    state.body = payload.body;
    state.isDelete = payload.isDelete;
    state.isSuccess = payload.isSuccess;
    state.isError = payload.isError;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
