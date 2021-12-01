<template>
  <section class="section">
    <h1>Code Slice</h1>
  </section>
</template>

<script>
export default {
  name: 'CodeSlice',
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
