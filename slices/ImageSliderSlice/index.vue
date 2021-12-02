<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="image-slider">
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
        <prismic-image :field="item.Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageSliderSlice',
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
