<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-image :field="slice.primary.Hero" />
    <element-cta-button
      :link="slice.primary.CtaLink"
      :title="slice.primary.CtaTitle"
    />
  </section>
</template>

<script>
export default {
  name: 'ImageContentHeroSlice',
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
