<template>
  <div class="footer-copyright font-sneak">
    <prismic-rich-text :field="globals.data.Copyright" />
  </div>
</template>

<script>
export default {
  name: 'FooterCopy',
  computed: {
    globals() {
      return this.$store.state.globals.results
    },
  },
}
</script>

<style lang="scss">
.footer-copyright {
  * {
    font-size: clamp(10px, 1vw, 12px);
    text-transform: uppercase;
  }
}
</style>
