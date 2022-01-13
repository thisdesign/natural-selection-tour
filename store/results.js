export const state = () => ({
  items: {},
  loading: true,
})

export const mutations = {
  setResults(state, data) {
    state.items[data.eventId] = data.results
    state.loading = false
  },
}

export const getters = {
  isLoading(state) {
    return state.loading
  },
  event(state, data) {
    return state.items[data.eventId]
  },
}

export const actions = {
  async loadResults({ commit }, data) {
    const request = await data
      .fetch(`https://live.rawmotion.com/api/v1/event/${data.eventId}/contests`)
      .then((res) => res.json())
    const results = request
    commit('setResults', { results, eventId: data.eventId })
  },
}
