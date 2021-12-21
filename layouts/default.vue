<template>
  <div>
    <app-header />
    <Nuxt />
    <app-code />
    <app-footer />
  </div>
</template>

<script>
export default {
  async middleware({ store, $prismic }) {
    await Promise.all([
      store.dispatch('globals/loadGlobals', $prismic),
      store.dispatch('riders/loadRiders', $prismic),
      store.dispatch('partners/loadPartners', $prismic),
    ])
  },
}
</script>
