
const state = {
  name: 'abc'
}

const mutations = {
  setName (state, name) {
    state.name = name;
  }
}

const actions = {
  beginDot({commit, state}, name) {
    commit('setName', name);
  }
}

export default {
  state,
  actions,
  mutations
}
