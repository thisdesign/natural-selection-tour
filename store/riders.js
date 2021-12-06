export const state = () => ({
  results: {},
})

export const mutations = {
  setRiders(state, riders) {
    state.results = riders
  },
}

export const actions = {
  async loadRiders({ commit }, $prismic) {
    // get results
    const riders = await this.$prismic.api.query(
      this.$prismic.predicates.at('document.type', 'rider'),
    )
    // console.log('riders', riders)
    // format data
    const results = {}
    riders.results.forEach((element) => {
      results[element.id] = element
    })
    // save data
    commit('setRiders', results)
  },
}
