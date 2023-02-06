<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div class="app">
    <partner-logo-grid :slice="grid" />
  </div>
</template>

<script>
import PartnerLogoGridSlice from '@/slices/PartnerLogoGridSlice'
export default {
  components: {
    PartnerLogoGrid: PartnerLogoGridSlice,
  },
  async asyncData({ store, $prismic, params, error }) {
    await store.dispatch('ui/setOptions', {
      pageType: document.data?.page_type || 'Default',
      floatingHeader: false,
      footerColor: '#FFE500',
      showCode: store.state.partners.results.showCode,
    })
  },
  data() {
    return {
      grid: {
        primary: {
          SectionNumber: '01',
          SectionTitle: 'PARTNERS',
          FeaturedOnly: false,
          UseExternalLinks: true,
        },
      },
    }
  },
}
</script>
