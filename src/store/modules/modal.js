const state = {
  isOpen: false
};

const getters = {
  modalState: state => state.isOpen
};

const actions = {
  openModal({ commit }) {
    commit('OPEN_MODAL');
  },
  closeModal({ commit }) {
    commit('CLOSE_MODAL');
  }
};

const mutations = {
  OPEN_MODAL: state => (state.isOpen = true),
  CLOSE_MODAL: state => (state.isOpen = false)
};

export default {
  state,
  getters,
  actions,
  mutations
};
