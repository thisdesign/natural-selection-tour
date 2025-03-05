<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div class="app">
    <div
      v-if="
        globals.data.sweepstakes_active &&
        globals.data.sweepstakes_page.slug === $route.params.uid
      "
      :id="`vsscript_${globals.data.viralsweep_id}`"
      ref="sweeps"
      class="container"
    ></div>
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
    const { store, $prismic, params, error } = props
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
  },
  computed: {
    globals() {
      return this.$store.state.globals.results
    },
  },
  mounted() {
    if (this.$refs.sweeps) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src =
        'https://app.viralsweep.com/vsa-lightbox-51f6c6-201609.js?sid=' +
        this.globals.data.viralsweep_id
      this.$refs.sweeps.append(s)
    }
  },
}
</script>

<style scoped>
.container {
  display: none;
  opacity: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
}

.container button {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1000;
}

.container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
</style>
