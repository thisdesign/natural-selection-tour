<template>
  <section class="text-slice site-padding">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="rte">
      <prismic-rich-text :field="slice.primary.Text" />
    </div>
    <element-cta-button
      class="btn"
      v-if="slice.primary.CtaTitle"
      :link="slice.primary.CtaLink"
      :title="slice.primary.CtaTitle"
    />
  </section>
</template>

<script>
export default {
  name: 'TextSlice',
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

<style lang="scss">
.text-slice {
  margin-bottom: 40px;
  color: $white;
  p {
    font-size: $font-large;
    line-height: 1.1;
  }
  .rte {
    margin-bottom: 10vw;
  }
}
</style>
