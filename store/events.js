export const state = () => ({
  items: [],
  loading: true,
})

export const mutations = {
  setEvents(state, events) {
    state.items = events
    state.loading = false
  },
}

export const getters = {
  isLoading(state) {
    return state.loading
  },
}

export const actions = {
  async loadEvents({ commit }, fetch) {
    const request = await fetch(`/.netlify/functions/eventbrite`).then((res) =>
      res.json(),
    )
    const { events } = request.msg
    const filteredEvents = events.map((item) => {
      return {
        title: item?.name.text,
        description: item?.description.text,
        start: item?.start.utc,
        end: item?.end.utc,
        url: item?.url,
        image: item.logo?.url,
      }
    })
    commit('setEvents', filteredEvents)
  },
}
