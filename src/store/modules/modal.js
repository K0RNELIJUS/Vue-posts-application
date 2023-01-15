const state = {
  isOpen: false
};

const getters = {
  modalState: state => state.isOpen
};

const actions = {
  openModal({ commit }) {
    commit('openModal');
  },
  closeModal({ commit }) {
    commit('closeModal');
  }
};

const mutations = {
  openModal: state => (state.isOpen = true),
  closeModal: state => (state.isOpen = false)
};

export default {
  state,
  getters,
  actions,
  mutations
};
