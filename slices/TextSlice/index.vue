<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: {
        threshold: $route.params.uid === 'faq' ? [0, 1] : [0.15, 0.85],
      },
    }"
    :class="`text-slice site-padding waypoint ${
      waypointActive ? 'active' : ''
    }`"
  >
    <element-section-bar
      ref="bar"
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="rte">
      <prismic-rich-text :field="slice.primary.Text" />
    </div>
    <element-cta-button
      v-if="slice.primary.CtaTitle"
      class="btn"
      :link="slice.primary.CtaLink"
      :title="slice.primary.CtaTitle"
    />
  </section>
</template>

<script>
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'TextSlice',
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
  watch: {
    waypointActive(newWaypoint) {
      if (newWaypoint && this.$refs.bar) {
        this.$refs.bar.show()
      }
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
    line-height: 1.2;
    strong {
      font-weight: bold;
    }
  }
  .rte {
    margin-bottom: 10vw;
  }
}
</style>
