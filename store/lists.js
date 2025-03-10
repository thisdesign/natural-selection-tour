export const state = () => ({
  data: {},
})

export const mutations = {
  setList(state, payload) {
    state.data = {
      ...state,
      ...payload,
    }
  },
}

export const actions = {
  async loadList({ commit }, { prismic, id }) {
    const results = await prismic.api.getByID(id, {
      fetchLinks: ['partner.Logo', 'partner.Link'],
    })
    const payload = {}
    payload[id] = { list: results }
    commit('setList', payload)
  },
}
