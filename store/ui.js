export const state = () => ({
  options: {
    floatingHeader: true,
    footerColor: '#000000',
  },
})

export const mutations = {
  SET_OPTIONS(state, ui) {
    state.options = {
      ...state.options,
      ...ui,
    }
  },
}

export const actions = {
  setOptions({ commit }, options) {
    commit('SET_OPTIONS', options)
  },
}
