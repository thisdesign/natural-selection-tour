<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`waypoint ${waypointActive ? 'active' : ''}`"
  >
    <layout-two-column
      :section-number="slice.primary.SectionNumber"
      :section-title="slice.primary.SectionTitle"
      :sidebar-status="slice.primary.SidebarStatus"
      :sidebar-section-number="slice.primary.SidebarSectionNumber"
      :sidebar-section-title="slice.primary.SidebarSectionTitle"
      :should-show="waypointActive"
    >
      <prismic-rich-text
        v-if="!slice.primary.TitleImage"
        class="two-column-title"
        :field="slice.primary.title"
      />
      <prismic-image
        v-if="slice.primary.TitleImage"
        class="two-column-title"
        :field="slice.primary.TitleImage"
      />
      <prismic-rich-text
        class="two-column-description"
        :field="slice.primary.description"
      />
      <prismic-rich-text
        class="two-column-content"
        :field="slice.primary.Content"
      />
      <template #footer>
        <prismic-rich-text
          class="two-column-footer font-sneak"
          :field="slice.primary.SidebarFooterText"
        />
      </template>
    </layout-two-column>
  </section>
</template>

<script>
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'TwoColumnSlice',
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

<style lang="scss">
.section {
  color: white;
}
.two-column-title {
  h1 {
    font-family: 'Natural-Selection';
    line-height: 0.8;
    font-size: 8vw;
    word-spacing: 100rem;
    @include media-breakpoint-up(sm) {
      font-size: 3.9vw;
    }
  }
}
img.two-column-title {
  width: 90%;
  @include media-breakpoint-up(sm) {
    width: 50%;
  }
}
.two-column-description {
  padding-top: 0.7vw;
  p {
    font-size: 4vw;
    @include media-breakpoint-up(sm) {
      font-size: 1.3vw;
    }
  }
}
.two-column-content {
  margin: 12vw 0 16vw;
  @include media-breakpoint-up(sm) {
    margin: 3vw 0 5vw;
  }
  p {
    line-height: 1;
    font-size: 7vw;
    @include media-breakpoint-up(sm) {
      font-size: 4vw;
    }
  }
}
.two-column-footer {
  text-transform: uppercase;
}
</style>
