<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <h3>Event Schedule - from Eventbright</h3>
  </section>
</template>

<script>
export default {
  name: 'EventScheduleSlice',
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
