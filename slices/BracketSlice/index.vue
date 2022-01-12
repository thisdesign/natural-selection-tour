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
    return {
      eventId: '4197b641-63ee-11eb-8590-0fa6623371ce',
      contests: [],
      polling: false,
    }
  },
  async fetch() {
    if (this.isLoading) {
      await this.fetchResults()
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['results/isLoading']
    },
  },
  mounted() {
    if (this.polling) {
      setInterval(() => {
        this.fetchResults()
      }, 5000)
    }
  },
  methods: {
    async fetchResults() {
      await this.$store.dispatch('results/loadResults', {
        fetch,
        eventId: this.eventId,
      })
      this.contests = this.$store.state.results.items[this.eventId]
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
