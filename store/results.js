export const state = () => ({
  items: [],
  loading: true,
})

export const mutations = {
  setResults(state, results) {
    state.items = results
    state.loading = false
  },
}

export const getters = {
  isLoading(state) {
    return state.loading
  },
}

export const actions = {
  async loadResults({ commit }, fetch) {
    const request = await fetch(
      `https://live.rawmotion.com/api/v1/event/4197b641-63ee-11eb-8590-0fa6623371ce/contests`,
    ).then((res) => res.json())
    const results = request
    console.log(results)
    // const filteredResults = results.map((item) => {
    //   return {
    //     title: item?.name.text,
    //     description: item?.description.text,
    //     start: item?.start.utc,
    //     end: item?.end.utc,
    //     url: item?.url,
    //     image: item.logo?.url,
    //   }
    // })
    commit('setResults', results)
  },
}
