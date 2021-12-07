<template>
  <section class="section webgl">
    <div class="site-padding">
      <element-section-bar
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <!-- <prismic-embed :field="slice.primary.VideoLoop" /> -->
    <div class="section-inner">
      <div class="background-video">
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
        <div class="col-left">
          <prismic-rich-text
            class="section-title"
            :field="slice.primary.title"
          />
          <prismic-rich-text
            class="section-description"
            :field="slice.primary.description"
          />
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="location"
          >
            <div class="location-index">
              <span>{{ indexLetters[i] }}</span>
            </div>
            <prismic-rich-text class="location-title" :field="item.Title" />
            <!-- <prismic-embed :field="item.Model" /> -->
          </div>
          <element-cta-button
            :link="slice.primary.CtaLink"
            :title="slice.primary.CtaTitle"
          />
        </div>
        <div class="col-right">
          <media-webgl-player class="webgl-player" />
        </div>
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
  .webgl-player {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
  }
  .section-inner {
    position: relative;
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
  .section-title h1 {
    font-size: 4vw;
    line-height: 1;
  }
  .section-content {
    position: relative;
    display: flex;
    z-index: 1;
    .col-left {
      width: 60%;
    }
    .col-right {
      width: 40%;
    }
  }
  .section-description {
    margin-bottom: 1rem;
  }
  .location {
    display: flex;
    align-items: flex-start;
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
    flex: 1 1 100%;
    * {
      font-family: 'Natural-Selection';
      line-height: 1;
      font-size: 2vw;
    }
  }
}
</style>
