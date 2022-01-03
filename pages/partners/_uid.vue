<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div class="app">
    <image-content-hero v-if="document" :slice="hero" />
    <partner-logo-grid :slice="grid" />
  </div>
</template>

<script>
import ImageContentHeroSlice from '@/slices/ImageContentHeroSlice'
import PartnerLogoGridSlice from '@/slices/PartnerLogoGridSlice'
export default {
  components: {
    ImageContentHero: ImageContentHeroSlice,
    PartnerLogoGrid: PartnerLogoGridSlice,
  },
  async asyncData({ store, $prismic, params, error }) {
    const document = await $prismic.api.getByUID('partner', params.uid)
    if (document) {
      await store.dispatch('ui/setOptions', {
        floatingHeader: false,
        footerColor: '#FFE500',
        showCode: store.state.partners.results.showCode,
      })
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      grid: {
        primary: {
          SectionNumber: '01',
          SectionTitle: 'Partners',
        },
      },
    }
  },
  computed: {
    hero() {
      return {
        primary: {
          Logo: this.document.data.Logo,
          title: this.document.data.Title,
          description: this.document.data.Content,
          Hero: this.document.data.Hero,
          CtaLink: this.document.data.Link,
          CtaTitle: this.document.data.LinkTitle,
        },
        NextUid: this.$store.getters['partners/nextUID'](
          this.$route.params.uid,
        ),
      }
    },
  },
  mounted() {
    console.log(this.document.data.Logo)
  },
}
</script>
