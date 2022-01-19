<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    class="section"
    :class="`waypoint ${waypointActive ? 'active' : ''}`"
  >
    <div v-for="contest in contests" :key="contest.externalID" class="contest">
      <bracket-contest
        :rounds="contest.categories[0].rounds"
        :number="slice.primary.SectionNumber"
        :title="`${sectionTitle}${contest.name}_Bracket`"
      />
    </div>
  </section>
</template>

<script>
import WaypointMixin from '@/mixins/Waypoint'
import ContestModel from '@/scripts/ContestModel'
export default {
  name: 'BracketSlice',
  mixins: [WaypointMixin],
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
      eventId: this.slice.primary.EventID,
      contests: [],
      polling: this.slice.primary.PollingEnabled,
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
    sectionTitle() {
      return this.slice.primary.SectionTitle
        ? this.slice.primary.SectionTitle + '_'
        : ''
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
      if (this.contests.length === 0) this.contests = ContestModel
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  padding-right: 0;
}
.contest {
  padding-bottom: 2rem;
}
</style>
