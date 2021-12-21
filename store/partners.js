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
      fetchLinks: ['partner.Logo', 'partner.Link'],
    })
    const uids = []
    const logos = {}
    const mapItem = (item) => {
      const {
        uid,
        data: { Logo, Link },
      } = item.Partner
      uids.push(uid)
      logos[uid] = Logo
      return { uid, logo: Logo, link: Link ? Link.url : undefined }
    }
    const featured = partnerResults.data.FeaturedPartners.map(mapItem)
    const partners = partnerResults.data.Partners.map(mapItem)

    commit('setPartners', {
      uids,
      logos,
      featured,
      partners,
      showCode: partnerResults.data.ShowFooterCode,
    })
  },
}
