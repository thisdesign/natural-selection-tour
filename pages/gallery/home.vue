<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div class="app">
    <section class="site-padding gallery">
      <div class="iframe-wrapper">
        <iframe
          v-if="userEmail"
          frameborder="0"
          scrolling="no"
          :src="`https://naturalselection.azureedge.net?email=${userEmail}`"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ store, $prismic, params, error }) {
    await store.dispatch('ui/setOptions', {
      floatingHeader: false,
      footerColor: 'rgb(255, 230, 0)',
      showCode: false,
    })
  },
  data() {
    return {
      userEmail: null,
    }
  },
  mounted() {
    this.userEmail = this.$auth.user.email
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  .iframe-wrapper {
    position: relative;
    height: 65vw;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto 4rem;
    @media (min-width: 2020px) {
      width: 1920px;
      height: 1200px;
    }
    @media (max-width: 800px) {
      height: 100vh;
    }
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
