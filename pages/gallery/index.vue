<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div class="app">
    <section class="site-padding auth">
      <p>Authenticating</p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $prismic, params, error }) {
    await store.dispatch('ui/setOptions', {
      floatingHeader: false,
      footerColor: 'rgb(255, 230, 0)',
      showCode: false,
    })
  },
  mounted() {
    this.$auth.loginWith('auth0')
  },
}
</script>

<style lang="scss" scoped>
.auth {
  color: $white;
  p,
  a {
    font-size: $font-large;
    line-height: 1.2;
    strong {
      font-weight: bold;
    }
  }
}
</style>
