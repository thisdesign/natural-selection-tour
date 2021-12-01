<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <prismic-rich-text :field="slice.primary.title" />
  </section>
</template>

<script>
export default {
  name: 'PartnerLogoGridSlice',
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
