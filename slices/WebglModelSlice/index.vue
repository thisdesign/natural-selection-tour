<template>
  <section class="section site-padding">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <media-webgl-player />
    <prismic-rich-text :field="slice.primary.title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-embed :field="slice.primary.VideoLoop" />
    <element-cta-button
      :link="slice.primary.CtaLink"
      :title="slice.primary.CtaTitle"
    />
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-rich-text :field="item.Title" />
      <prismic-embed :field="item.Model" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebglModelSlice',
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
  text-align: center;
}
</style>
