<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section site-padding waypoint ${waypointActive ? 'active' : ''}`"
  >
    <element-section-bar
      ref="bar"
      :number="slice.primary.sectionNumber"
      :title="slice.primary.sectionTitle"
    />
    <div class="text">
      <PrismicRichText :field="slice.primary.content" />
    </div>
    <div class="email">
      <!-- <element-email theme="light" /> -->
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'EmailSignupSlice',
  mixins: [WaypointMixin],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  watch: {
    waypointActive() {
      if (this.$refs.bar) {
        this.$refs.bar.show()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;

  &::v-deep p {
    strong {
      font-weight: bold;
    }
  }
}
.text {
  width: 100%;
}
.email {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  flex-grow: 0;
}
.title {
  margin-bottom: 2em;
}
</style>
