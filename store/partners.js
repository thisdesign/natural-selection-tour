export const state = () => ({
  results: {},
})

export const mutations = {
  setPartners(state, partners) {
    state.results = partners
  },
}

export const getters = {
  nextUID: (state) => (key) => {
    const UIDS = state.results.uids
    const current = UIDS.indexOf(key)
    if (current > -1) {
      const next = current + 1
      if (next === UIDS.length) {
        return UIDS[0]
      } else {
        return UIDS[next]
      }
    }
    return undefined
  },
}

export const actions = {
  async loadPartners({ commit }, $prismic) {
    const partnerResults = await $prismic.api.getSingle('partners', {
      fetchLinks: ['partner.Logo'],
    })
    const uids = []
    const logos = {}
    const mapItem = (item) => {
      const {
        uid,
        data: { Logo },
      } = item.Partner
      uids.push(uid)
      logos[uid] = Logo
      return { uid, logo: Logo }
    }
    const featured = partnerResults.data.FeaturedPartners.map(mapItem)
    const partners = partnerResults.data.Partners.map(mapItem)

    commit('setPartners', { uids, logos, featured, partners })
  },
}
