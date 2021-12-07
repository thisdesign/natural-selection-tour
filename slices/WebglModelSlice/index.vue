<template>
  <section class="section webgl site-padding">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <!-- <media-webgl-player class="webgl-player" /> -->
    <!-- <prismic-embed :field="slice.primary.VideoLoop" /> -->
    <div class="section-content">
      <prismic-rich-text class="section-title" :field="slice.primary.title" />
      <prismic-rich-text
        class="section-description"
        :field="slice.primary.description"
      />
      <ol class="locations-list">
        <li v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
          <prismic-rich-text class="locations-title" :field="item.Title" />
          <!-- <prismic-embed :field="item.Model" /> -->
        </li>
      </ol>
      <element-cta-button
        :link="slice.primary.CtaLink"
        :title="slice.primary.CtaTitle"
      />
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

<style lang="scss">
.section {
  color: #fff;
}
.webgl {
  .section-title h1 {
    font-size: 4vw;
    line-height: 1;
  }
  .section-content {
    width: 60%;
  }
  .section-description {
    margin-bottom: 1rem;
  }
  .webgl-player {
    max-width: 100%;
    width: 100%;
  }
  .locations-list {
    list-style: upper-alpha;
  }
  .locations-title {
    font-family: 'Natural-Selection';
    line-height: 1;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
