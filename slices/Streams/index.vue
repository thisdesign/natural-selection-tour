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
      <a
        v-for="(stream, index) in streams"
        :key="index"
        href=""
        target="_blank"
        class="stream-item"
        @mouseenter="setCurrentStream(index)"
      >
        <div class="image-wrapper">
          <img src="/mocks/mock-slider-image.jpg" alt="" />
          <svg
            class="play-icon"
            width="73"
            height="72"
            viewBox="0 0 73 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2_3)">
              <path
                d="M62.594 33.3135C64.8139 34.4166 64.8139 37.5834 62.594 38.6865L13.0851 63.2905C11.0908 64.2816 8.75 62.8309 8.75 60.6039L8.75 11.396C8.75 9.16909 11.0908 7.71843 13.0851 8.7095L62.594 33.3135Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_3"
                x="0.75"
                y="0.392197"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_3"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_3"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </a>
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
.stream-grid {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  cursor: none;
  @include media-breakpoint-up(sm) {
    margin-top: 2rem;
  }
}
.stream-item {
  width: calc(100% / 2);
  cursor: none;
  overflow: hidden;
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
    transition: transform 1000ms ease-in-out;
    transform: scale(1.01);
    &:hover {
      transform: scale(1.1);
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}
.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8%;
  height: 8%;
  transform: translate(-50%, -50%);
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
