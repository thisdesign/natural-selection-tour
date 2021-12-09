<template>
  <section class="section site-padding">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div v-if="slice.primary.title" class="partners-title">
      <prismic-rich-text :field="slice.primary.title" />
    </div>
    <div class="partner-list">
      <div
        v-for="(item, index) in featured"
        :key="`large-partner${index}`"
        class="partner large"
      >
        <nuxt-link :to="`/partner/${item.uid}`">
          <prismic-image :field="item.logo" />
        </nuxt-link>
      </div>
    </div>
    <div class="partner-list">
      <div
        v-for="(item, index) in partners"
        :key="`small-partner${index}`"
        class="partner small"
      >
        <nuxt-link :to="`/partner/${item.uid}`">
          <prismic-image :field="item.logo" />
        </nuxt-link>
      </div>
    </div>
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
  computed: {
    featured() {
      return this.$store.state.partners.results.featured
    },
    partners() {
      return this.$store.state.partners.results.partners
    },
  },
  mounted() {
    // console.log(this.slice)
  },
}
</script>
<style lang="scss">
.partners-title * {
  font-size: clamp(1.5rem, 4vw, 4vw);
  line-height: 1.2;
}
</style>

<style lang="scss" scoped>
.section {
  color: #fff;
}
.partner-list {
  display: flex;
  flex-wrap: wrap;
  @include media-breakpoint-up(sm) {
    padding: 0 10vw;
  }
}
.partner {
  img {
    width: 100%;
  }
  &.large {
    width: calc(100% / 3);
  }
  &.small {
    width: calc(100% / 5);
  }
}
</style>
