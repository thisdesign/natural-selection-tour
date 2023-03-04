<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div class="app">
    <slice-zone type="page" :uid="$route.params.uid" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  async asyncData(props) {
    const { store, $prismic, params, error, route } = props
    if (route.path === '/nft') {
      window.location.href =
        'https://nft.naturalselectiontour.com/collection/naturalselectiontour'
    } else {
      const document = await $prismic.api.getByUID('page', params.uid)
      if (document) {
        await store.dispatch('ui/setOptions', {
          pageType: document.data.page_type || 'Default',
          floatingHeader: document.data.FloatingNav,
          footerColor: document.data.FooterBackground || '#1f2744',
          showCode: document.data.ShowFooterCode,
        })
        return { document }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    }
  },
}
</script>
