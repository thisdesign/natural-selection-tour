<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    class="section webgl waypoint"
    :class="{ featured: slice.primary.Featured, active: waypointActive }"
  >
    <div v-if="!slice.primary.Featured" class="site-padding">
      <element-section-bar
        ref="bar"
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <div class="section-inner">
      <div class="background-video" :class="{ active: modelLoaded }">
        <div class="video-wrapper">
          <video
            :src="slice.primary.VideoLoop.url"
            :poster="slice.primary.VideoPoster.url"
            muted
            autoplay
            loop
            playsinline
          ></video>
        </div>
      </div>
      <div class="section-content site-padding">
        <prismic-rich-text
          class="section-title col-left"
          :field="slice.primary.title"
        />
        <media-webgl-player
          v-if="slice.primary.Featured"
          :model="slice.items[0].Model.url"
          class="webgl-player featured"
          @model-loaded="handleModelLoaded"
        />
        <prismic-rich-text
          class="section-description col-left"
          :field="slice.primary.description"
        />
        <div class="locations-list col-left">
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="location"
            :class="{ active: item.Active }"
          >
            <div class="location-index">
              <span>{{ indexLetters[i] }}</span>
            </div>
            <prismic-rich-text class="location-title" :field="item.Title" />
          </div>
        </div>
        <element-cta-button
          v-if="!slice.primary.Featured"
          class="btn section-cta-button"
          :link="slice.primary.CtaLink"
          :title="slice.primary.CtaText"
        />
        <media-webgl-player
          v-if="!slice.primary.Featured"
          :model="slice.items[0].Model.url"
          class="webgl-player"
          :class="{ featured: slice.primary.Featured }"
          @model-loaded="handleModelLoaded"
        />
      </div>
    </div>
  </section>
</template>

<script>
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'WebglModelSlice',
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
      indexLetters: ['A', 'B', 'C', 'D'],
      modelLoaded: false,
    }
  },
  watch: {
    waypointActive() {
      if (this.$refs.bar) {
        this.$refs.bar.show()
      }
    },
  },
  methods: {
    handleModelLoaded() {
      this.modelLoaded = true
    },
  },
}
</script>

<style lang="scss">
.webgl {
  position: relative;
  z-index: 10;
  overflow: hidden;
  @include media-breakpoint-up(sm) {
    overflow: initial;
  }
  &.section {
    color: #fff;
    padding-bottom: 6rem;
  }
  &.section.featured {
    padding-bottom: 3rem;
    .section-inner {
      padding-top: 10rem;
      padding-bottom: 0;
      @include media-breakpoint-up(sm) {
        padding-top: 5rem;
      }
    }
    .section-description {
      @include media-breakpoint-up(sm) {
        margin: 2rem 0;
      }
    }
  }
  .webgl-player {
    width: 150%;
    margin-left: -25%;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding-top: 20%;
      content: '';
      z-index: 10;
    }
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-top: 25%;
      content: '';
      z-index: 10;
    }
    @include media-breakpoint-up(sm) {
      &:before,
      &:after {
        display: none;
      }
      position: absolute;
      margin-left: 0;
      right: 0;
      top: 0;
      width: 75%;
    }
    &.featured {
      height: 110%;
    }
  }
  .section-inner {
    position: relative;
  }
  .background-video {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 60%;
    width: 100%;
    opacity: 0;
    transition: opacity 1500ms ease;
    &.active {
      opacity: 1;
    }
    .video-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .col-left {
    @include media-breakpoint-up(sm) {
      width: 60%;
    }
  }
  .section-title h1 {
    font-size: clamp(1.4rem, 4vw, 4vw);
    line-height: 1;
  }
  .section-content {
    position: relative;
    z-index: 1;
    padding-top: 3vw;
    padding-bottom: 5rem;
  }
  .section-description {
    margin: 2rem 0;
    width: 60%;
    max-width: 300px;
    * {
      line-height: 1;
      font-size: clamp(0.8rem, 1.3vw, 1.5vw);
    }
  }
  .locations-list {
    position: inherit;
    @include media-breakpoint-up(sm) {
      padding-bottom: 20vw;
    }
  }
  .location {
    display: flex;
    align-items: flex-start;
    opacity: 0.3;
    &.active {
      opacity: 1;
    }
  }
  .location-index {
    line-height: 1;
    background: white;
    color: black;
    width: 5%;
    padding-top: 5%;
    border-radius: 5rem;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .location-title {
    margin-left: 1rem;
    margin-bottom: 1rem;
    // word-spacing: 999rem;
    // flex: 1 1 95%;
    * {
      font-family: 'Natural-Selection';
      line-height: 1;
      font-size: clamp(1rem, 2vw, 2vw);
    }
  }
  .section-cta-button {
    position: absolute;
    width: calc(100% - 4rem);
    margin-top: 8rem;
    bottom: 3.5rem;
    left: 2rem;

    @include media-breakpoint-up(sm) {
      margin-top: 0;
      left: unset;
      width: unset;
    }
  }
}
</style>
