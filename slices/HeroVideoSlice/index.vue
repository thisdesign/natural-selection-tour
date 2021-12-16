<template>
  <section
    ref="videoSection"
    class="video-hero section"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div class="video-wrapper">
      <video
        :src="slice.primary.VideoLoop.url"
        :poster="slice.primary.VideoPoster.url"
        autoplay
        muted
        playsinline
        loop
      ></video>
      <button
        ref="playBtn"
        class="btn-play-video"
        @click="videoModalOpen = true"
      >
        Play
      </button>
    </div>
    <div class="video-footer site-padding">
      <div class="video-footer-logo">
        <prismic-image :field="slice.primary.Logo" />
      </div>
      <div class="video-footer-items">
        <div
          v-for="(item, i) in slice.items"
          :key="`video-footer-item-${i}`"
          class="video-footer-item"
        >
          <prismic-rich-text :field="item.TextTop" />
          <prismic-rich-text :field="item.TextBottom" />
        </div>
      </div>
    </div>
    <div v-if="videoModalOpen" class="video-modal">
      <div class="close-btn-wrapper">
        <button class="close-btn" @click="videoModalOpen = false">
          <span></span>
          <span></span>
        </button>
      </div>
      <media-video-player class="player" :options="videoOptions" />
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'HeroVideoSlice',
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
      videoModalOpen: false,
      animationStartPercent: 2.5,
      videoOptions: {
        autoplay: true,
        controls: true,
        fluid: true,
        poster: this.slice.primary.VideoPoster.url,
        sources: [
          {
            src: this.slice.primary.VideoFull.url,
            type: 'video/mp4',
          },
        ],
      },
    }
  },
  mounted() {},
  methods: {
    onMouseLeave() {
      gsap.to(this.$refs.videoSection, {
        paddingLeft: `${this.animationStartPercent}%`,
        paddingRight: `${this.animationStartPercent}%`,
        duration: 0.01,
        ease: 'ease',
      })
    },

    onMouseMove(e) {
      const videoSection = this.$refs.videoSection
      const videoSectionBox = videoSection.getBoundingClientRect()
      // The pointer relative within the video section
      const pointer = {
        x: e.clientX - videoSectionBox.left,
        y: e.clientY - videoSectionBox.top,
      }
      // The normalized values from 0 - 1
      const normalized = {
        x: Math.abs(pointer.x / videoSection.offsetWidth - 0.5),
        y: Math.abs(pointer.y / videoSection.offsetHeight - 0.5),
        get distance() {
          return this.x + this.y
        },
      }
      const targetPercent = normalized.distance * this.animationStartPercent
      const percent =
        targetPercent > 0.2 ? Math.min(2.5, targetPercent * 1.85) : 0

      gsap.to(videoSection, {
        paddingLeft: `${percent}%`,
        paddingRight: `${percent}%`,
        duration: 0.01,
        ease: 'ease',
      })
    },
  },
}
</script>

<style lang="scss">
.video-hero.section {
  p {
    margin-bottom: 0;
    font-size: 12px;
  }
}
</style>

<style lang="scss" scoped>
.section {
  color: white;
  position: relative;
  padding-bottom: 3rem;
  transition: padding 0.5s;
  @include media-breakpoint-up(md) {
    padding: 0 2.5% 3rem;
  }
  p {
    margin-bottom: 0;
    font-size: 12px;
  }
}
.video-modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: black;
  padding: 3rem 0;
  @include media-breakpoint-up(md) {
    padding: clamp(1rem, 5vw, 5rem) 0;
  }
  .player {
    height: 100%;
    padding: 0;
    max-width: 1400px;
    margin: auto;
  }
}
.video-wrapper {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.close-btn-wrapper {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  transform: translate(-50%, -50%);
  @include media-breakpoint-up(md) {
    right: 2.5vw;
    top: 2.5vw;
  }
}
.btn-play-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 10rem;
  font-size: clamp(2rem, 3.5vw, 3.5vw);
  padding: 4vw 10vw;
  width: calc(100% - 4rem);
  line-height: 1;
  @include media-breakpoint-up(sm) {
    padding: 2vw 10vw;
    width: unset;
  }
  @include media-breakpoint-up(md) {
    padding: 1vw 5vw;
  }
}
.video-footer {
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  width: calc(100% - 4rem);
  z-index: 1;
  font-family: 'Sneak';
  text-transform: uppercase;
  padding-bottom: 2rem;
  @include media-breakpoint-up(md) {
    left: 0;
    width: 100%;
  }
}
.video-footer-logo {
  width: 15vw;
  min-width: 225px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
}
.video-footer-items {
  // border-top: 1px solid rgba(252, 252, 252, 0.5);
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.video-footer-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: none;
  @include media-breakpoint-up(sm) {
    width: 25%;
    display: block;
  }
  &:first-child {
    display: block;
  }
  &:nth-child(4),
  &:nth-child(5) {
    width: calc(25% / 2);
  }
  &:nth-child(5) {
    display: none;
    @include media-breakpoint-up(md) {
      display: block;
    }
  }
  div {
    margin-bottom: 10px;
  }
}
</style>
