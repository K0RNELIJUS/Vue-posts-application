const state = {
  isEdited: false
};

const getters = {
  isEditMode: state => state.isEdited
};

const actions = {
  createMode({ commit }) {
    commit('CREATE_MODE');
  },
  editMode({ commit }) {
    commit('EDIT_MODE');
  }
};

const mutations = {
  CREATE_MODE: state => (state.isEdited = false),
  EDIT_MODE: state => (state.isEdited = true)
};

export default {
  state,
  getters,
  actions,
  mutations
};
