<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <prismic-rich-text
      v-if="slice.primary.title"
      :field="slice.primary.title"
    />
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
    console.log(this.slice)
  },
}
</script>

<style lang="scss" scoped>
.section {
  color: #fff;
  padding: 4em;
  text-align: center;
}
.partner-list {
  display: flex;
  flex-wrap: wrap;
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
