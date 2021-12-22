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
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div v-if="slice.primary.title" class="partners-title">
      <prismic-rich-text :field="slice.primary.title" />
    </div>
    <div class="partner-list large">
      <div
        v-for="(item, index) in featured"
        :key="`large-partner${index}`"
        class="partner large"
      >
        <nuxt-link
          v-if="slice.primary.UseExternalLinks !== true"
          :to="`/partner/${item.uid}`"
        >
          <prismic-image :field="item.logo" />
        </nuxt-link>
        <a
          v-if="slice.primary.UseExternalLinks === true"
          :href="item.link ? item.link : 'https://prismic.io'"
          target="_blank"
        >
          <prismic-image :field="item.logo" />
        </a>
      </div>
    </div>
    <div class="partner-list">
      <div
        v-for="(item, index) in partners"
        :key="`small-partner${index}`"
        class="partner small"
      >
        <nuxt-link
          v-if="slice.primary.UseExternalLinks !== true"
          :to="`/partner/${item.uid}`"
        >
          <prismic-image :field="item.logo" />
        </nuxt-link>
        <a
          v-if="slice.primary.UseExternalLinks === true"
          :href="item.link ? item.link : 'https://prismic.io'"
          target="_blank"
        >
          <prismic-image v-if="item.logo" :field="item.logo" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'PartnerLogoGridSlice',
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
  computed: {
    featured() {
      return this.$store.state.partners.results.featured
    },
    partners() {
      return this.$store.state.partners.results.partners
    },
  },
  watch: {
    waypointActive(active) {
      if (this.$refs.bar) {
        this.$refs.bar.show()
      }
    },
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
  padding-bottom: 10vh;

  &.active {
    .partner-list {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
.partner-list {
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(5vh);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transition-delay: 0.75s;
  @include media-breakpoint-up(sm) {
    padding: 0 10vw;
  }
  &.large {
    justify-content: center;
    transition-delay: 0.5s;
  }
}
.partner {
  padding: 0 20px;
  img {
    width: 100%;
  }
  &.large {
    width: 50%;
    @include media-breakpoint-up(sm) {
      width: calc(100% / 3);
    }
  }
  &.small {
    width: calc(100% / 3);
    @include media-breakpoint-up(sm) {
      width: calc(100% / 5);
    }
  }
}
</style>
