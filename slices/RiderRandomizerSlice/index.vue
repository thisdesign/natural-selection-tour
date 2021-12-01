<template>
  <section class="section">
    <h3>Randomizer</h3>
  </section>
</template>

<script>
export default {
  name: 'RiderRandomizerSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  color: #fff;
  padding: 4em;
  text-align: center;
}
</style>
