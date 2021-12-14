export const state = () => ({
  results: {},
})

export const mutations = {
  setGlobals(state, globals) {
    state.results = globals
  },
}

export const actions = {
  async loadGlobals({ commit }, $prismic) {
    const globals = await $prismic.api.getSingle('global')
    commit('setGlobals', globals)
  },
}
