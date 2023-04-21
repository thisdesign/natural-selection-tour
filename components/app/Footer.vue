<template>
  <footer
    class="footer site-padding"
    :style="{ backgroundColor: footerBackground }"
  >
    <div class="mobile">
      <nuxt-link to="/">
        <prismic-image class="logo" :field="globals.data.FooterLogo" />
      </nuxt-link>
      <div class="feature-text">
        <footer-feature-text />
      </div>
      <div class="links-social-row">
        <footer-links />
        <div>
          <footer-social />
        </div>
      </div>
      <footer-copy />
    </div>

    <div class="desktop">
      <div class="column col1">
        <nuxt-link to="/">
          <prismic-image class="logo" :field="globals.data.FooterLogo" />
        </nuxt-link>
        <footer-copy />
      </div>
      <div class="column col2"></div>
      <div class="column col3">
        <footer-links />
      </div>
      <div class="column col4">
        <footer-feature-text />
        <element-email theme="dark" />
        <footer-social />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    footerBackground() {
      return this.$store.state.ui.options.footerColor
    },
    globals() {
      return this.$store.state.globals.results
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  background: $purple-primary;
  transition: background-color 0.3s ease-out;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
}
.logo {
  max-width: 250px;
  width: 100%;
}
.desktop {
  display: none;
  @include media-breakpoint-up(sm) {
    display: flex;
  }
}
.mobile {
  @include media-breakpoint-up(sm) {
    display: none;
  }
  .feature-text {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    max-width: 250px;
  }
  .links-social-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
}
.column {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 0 24px;
  @include media-breakpoint-up(sm) {
    border-left: 1px solid $dark-gray;
  }
  &.col1 {
    border-left: 0px;
    justify-content: space-between;
  }
  &.col4 {
    justify-content: space-between;
  }
}
</style>
