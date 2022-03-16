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
    // NOTE: if we need a dynamic way to get an event, there's an id being sent from the slice.
    // Example: https://live.rawmotion.com/api/v1/event/${data.eventId}/contests
    // https://storage.googleapis.com/nst_media/baldface-results.json
    // https://storage.googleapis.com/nst_media/results.json
    const request = await data.fetch(data.endPoint).then((res) => res.json())
    const results = request
    commit('setResults', { results, eventId: data.eventId })
  },
}
