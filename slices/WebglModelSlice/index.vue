<template>
  <section class="section webgl" :class="{ featured: slice.primary.Featured }">
    <div v-if="!slice.primary.Featured" class="site-padding">
      <element-section-bar
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <!-- <prismic-embed :field="slice.primary.VideoLoop" /> -->
    <div class="section-inner">
      <div v-if="!slice.primary.Featured" class="background-video">
        <div class="video-wrapper">
          <video
            src="http://d39tpa37kkhgnr.cloudfront.net/01.mp4"
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
        <prismic-rich-text
          class="section-description col-left"
          :field="slice.primary.description"
        />
        <div class="locations-list col-left">
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="location"
            :class="{ active: item.Model }"
          >
            <div class="location-index">
              <span>{{ indexLetters[i] }}</span>
            </div>
            <prismic-rich-text class="location-title" :field="item.Title" />
            <!-- <prismic-embed :field="item.Model" /> -->
          </div>
        </div>
        <element-cta-button
          v-if="!slice.primary.Featured"
          class="section-cta-button"
          :link="slice.primary.CtaLink"
          :title="slice.primary.CtaText"
        />
        <media-webgl-player
          class="webgl-player"
          :class="{ featured: slice.primary.Featured }"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WebglModelSlice',
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
      indexLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
    }
  },
}
</script>

<style lang="scss">
.section {
  color: #fff;
}
.webgl {
  &.section.featured {
    .section-inner {
      padding-top: 5rem;
      padding-bottom: 0;
    }
    .section-description {
      margin-top: 40vh;
    }
  }
  .webgl-player {
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
    z-index: -1;
    @include media-breakpoint-up(sm) {
      width: 75%;
    }
    &.featured {
      height: 110%;
    }
  }
  .section-inner {
    position: relative;
    // padding-bottom: 5rem;
    // @include media-breakpoint-up(sm) {
    //   padding-bottom: 0;
    // }
  }
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
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
    margin-bottom: 1rem;
    width: 60%;
    @include media-breakpoint-up(sm) {
      width: 40%;
      margin-top: 0;
    }
    * {
      line-height: 1;
      font-size: clamp(0.8rem, 1.5vw, 1.5vw);
    }
  }
  .locations-list {
    @include media-breakpoint-up(sm) {
      padding-bottom: 25vw;
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
    word-spacing: 999rem;
    flex: 1 1 95%;
    * {
      font-family: 'Natural-Selection';
      line-height: 1;
      font-size: clamp(1rem, 2vw, 2vw);
    }
  }
  .section-cta-button {
    bottom: 0;
    width: 100%;
    margin-top: 8rem;
    @include media-breakpoint-up(sm) {
      margin-top: 0;
      width: unset;
      position: absolute;
      transform: translateY(50%);
    }
  }
}
</style>
