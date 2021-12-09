<template>
  <div class="footer-feature-text">
    <prismic-rich-text :field="globals.data.FooterText" />
  </div>
</template>
<script>
export default {
  name: 'FooterFeatureText',
  computed: {
    globals() {
      return this.$store.state.globals.results
    },
  },
}
</script>
<style lang="scss">
.footer-feature-text {
  max-width: 250px;
  p {
    font-family: $baseFontFamily;
    font-size: clamp(16px, 1.5vw, 20px);
    line-height: 1;
  }
}
</style>
