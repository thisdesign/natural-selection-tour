<template>
  <section class="section">
    <!-- <div class="site-padding">
      <element-section-bar
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div> -->
    <div class="slider-container">
      <div class="slider-wrapper">
        <div class="image-slider">
          <div
            v-for="(item, i) in mockimages"
            :key="`slice-item-${i}`"
            class="slide"
          >
            <div class="slide-image">
              <!-- <prismic-image :field="item.Image" /> -->
              <img src="/mocks/mock-slider-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <button class="btn-slide-next" @click="slideNext">
        <svg viewBox="0 0 39 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29.345 13.625C30.4817 11.2783 31.545 9.51833 32.535 8.345H0.470001V6.035H32.535C31.545 4.86167 30.4817 3.10167 29.345 0.754999H31.27C33.58 3.43167 36 5.41167 38.53 6.695V7.685C36 8.93167 33.58 10.9117 31.27 13.625H29.345Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { CubeSlider } from '@/scripts/CubeSlider'
export default {
  name: 'ImageSliderSlice',
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
      mockimages: [1, 2, 3, 4],
    }
  },
  mounted() {
    this.slider = new CubeSlider(document.querySelector('.image-slider'))
    window.slider = this.slider
  },
  methods: {
    slideNext() {
      this.slider.slideNext()
    },
  },
}
</script>

<style scoped lang="scss">
.section {
  color: #fff;
  text-align: center;
}

.slider-container {
  position: relative;
  padding-top: 78%;
  @include media-breakpoint-up(md) {
    padding-top: 50%;
  }
}
.slider-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.btn-slide-next {
  position: absolute;
  background: black;
  border: 1px solid white;
  border-radius: 10rem;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  right: 0.5rem;
  top: calc(100% - 4rem);
  @include media-breakpoint-up(sm) {
    right: 2.5%;
    transform: translateY(-50%);
    top: 50%;
    height: unset;
    width: 8rem;
    padding: 2.5rem 0;
  }
  @include media-breakpoint-up(md) {
    padding: 3rem 0;
    width: 10rem;
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 50%;
    @include media-breakpoint-up(sm) {
      width: 30%;
    }
  }
}
.slide-image {
  color: black;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 50%;
  overflow: hidden;
  img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.image-slider {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  display: none;
  &.previous {
    display: block;
    transform: translateX(-95%);
  }
  &.current {
    display: block;
    transform: translateX(5vw);
    z-index: 1;
    width: 90vw;
  }
  &.next {
    display: block;
    transform: translateX(95%);
  }
}
</style>
