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
  async asyncData({ store, $prismic, params, error }) {
    const document = await $prismic.api.getByUID('page', params.uid)
    if (document) {
      await store.dispatch('ui/setOptions', {
        floatingHeader: document.data.FloatingNav,
        footerColor: document.data.FooterBackground || '#1f2744',
      })
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
