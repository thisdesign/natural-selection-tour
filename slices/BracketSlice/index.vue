<template>
  <section class="section">
    <div v-for="contest in contests" :key="contest.externalID">
      <div class="site-padding">
        <element-section-bar
          ref="bar"
          :number="slice.primary.SectionNumber"
          :title="slice.primary.SectionTitle"
        />
      </div>
      <bracket-contest :rounds="contest.categories[0].rounds" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BracketSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  async fetch() {
    if (this.isLoading) {
      await this.$store.dispatch('results/loadResults', fetch)
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['results/isLoading']
    },
    contests() {
      return this.$store.state.results.items
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  padding-right: 0;
}
</style>
