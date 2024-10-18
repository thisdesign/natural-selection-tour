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
    globals.data.header = {
      isPreview:
        $prismic.isPreview !== undefined && $prismic.isPreview !== null,
      logo: globals.data.default_logo,
      navigation: globals.data.body.filter(
        (slice) => slice.slice_type === 'navigation_item',
      ),
    }
    commit('setGlobals', globals)
  },
}
