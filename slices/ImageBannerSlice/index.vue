<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="banner">
      <prismic-image :field="slice.primary.Banner" />
      <div class="button-container">
        <element-cta-button
          :link="slice.primary.CtaLink"
          :title="slice.primary.CtaTitle"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageBannerSlice',
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

<style lang="scss" scoped>
.banner {
  position: relative;
  img {
    width: 100%;
  }
  .button-container {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 3vw;
  }
}
</style>
