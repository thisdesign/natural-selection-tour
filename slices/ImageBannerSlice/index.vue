<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section site-padding mobile-full waypoint ${
      waypointActive ? 'active' : ''
    }`"
  >
    <element-section-bar
      class="section-bar"
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="banner">
      <prismic-image class="desktop" :field="slice.primary.Banner" />
      <prismic-image class="mobile" :field="slice.primary.MobileBanner" />
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
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'ImageBannerSlice',
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
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  padding-bottom: 3rem;
}
.section-bar {
  position: absolute;
  top: 0;
  width: calc(100% - 4rem);
  left: 2rem;
  z-index: 1;
  @include media-breakpoint-up(sm) {
    position: relative;
    left: unset;
    width: 100%;
  }
}
.banner {
  position: relative;
  img {
    width: 100%;
  }
  .desktop {
    display: none;
    @include media-breakpoint-up(sm) {
      display: block;
    }
  }
  .mobile {
    @include media-breakpoint-up(sm) {
      display: none;
    }
  }
  .button-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 2rem 3rem;
    @include media-breakpoint-up(sm) {
      padding: 3vw;
      width: unset;
    }
  }
}
</style>
