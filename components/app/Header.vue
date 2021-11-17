<template lang="pug">
  header
    a.link(id="skipToMainContent" href="#mainContent") Skip to main content
    nav
      nuxt-link(to="/") Home
      template(v-if="isMain")
        nuxt-link(to="/sample") Sample
        .link-wrapper
          nuxt-link(to="/login") Log In
          span &nbsp;/&nbsp;
          nuxt-link(to="/register") Register
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    isMain() {
      return this.$store.state.site === 'main'
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  text-align: right;
  background: black;
  color: white;
}

nav {
  display: flex;
  justify-content: right;
  & > * {
    margin: 0 0.5rem;
  }
}
</style>
