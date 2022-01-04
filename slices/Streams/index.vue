<template>
  <section class="section site-padding mobile-full">
    <element-section-bar
      ref="bar"
      class="section-bar"
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div
      class="stream-grid"
      @mouseenter="showPointer = true"
      @mouseleave="showPointer = false"
    >
      <div
        v-for="(stream, index) in streams"
        :key="index"
        class="stream-item"
        @mouseenter="setCurrentStream(index)"
      >
        <div class="image-wrapper">
          <img src="/mocks/mock-slider-image.jpg" alt="" />
        </div>
      </div>
      <div
        class="button-container"
        @mouseenter="showPointer = false"
        @mouseleave="showPointer = true"
      >
        <element-cta-button
          class="btn"
          link="https://naturalselectiontour.com"
          title="More"
        />
      </div>
    </div>
    <element-mouse-pointer
      :show-pointer="showPointer"
      :line1="currentStream ? currentStream.line1 : ''"
      :line2="currentStream ? currentStream.line2 : ''"
      :line3="currentStream ? currentStream.line3 : ''"
    />
  </section>
</template>

<script>
export default {
  name: 'Streams',
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
      showPointer: false,
      currentStream: null,
      streams: [
        {
          line1: 'Jackson',
          line2: 'Hole',
          line3: 'Day 01',
        },
        {
          line1: 'Jackson',
          line2: 'Hole',
          line3: 'Day 02',
        },
        {
          line1: 'Baldface',
          line2: 'Lodge',
          line3: 'Day 01',
        },
        {
          line1: 'Jackson',
          line2: 'Hole',
          line3: 'Day 03',
        },
        {
          line1: 'Baldface',
          line2: 'Lodge',
          line3: 'Day 02',
        },
        {
          line1: 'Tordrillo',
          line2: 'Range',
          line3: 'Day 01',
        },
        {
          line1: 'Tordrillo',
          line2: 'Range',
          line3: 'Day 02',
        },
        {
          line1: 'Jackson',
          line2: 'Hole',
          line3: 'Day 04',
        },
        {
          line1: 'Baldface',
          line2: 'Lodge',
          line3: 'Day 03',
        },
      ],
    }
  },
  methods: {
    setCurrentStream(stream) {
      this.currentStream = this.streams[stream]
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
}
.stream-grid {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  cursor: none;
}
.section-bar {
  position: absolute;
  width: 100%;
  top: 2rem;
  z-index: 1;
  padding: 0 2rem;
  border-color: transparent;
  @include media-breakpoint-up(sm) {
    position: relative;
    padding: 0;
    top: unset;
    border-color: white;
  }
}
.stream-item {
  width: calc(100% / 2);
  @include media-breakpoint-up(sm) {
    width: calc(100% / 3);
  }
  &:nth-last-child(-n + 4) {
    display: none;
    @include media-breakpoint-up(sm) {
      display: block;
    }
  }
  .image-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 60%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}
.button-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem 1.5rem;
  @include media-breakpoint-up(sm) {
    padding: 3vw;
    width: unset;
  }
}
</style>
