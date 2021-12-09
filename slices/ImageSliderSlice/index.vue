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
      <div @click="slideNext">
        <element-btn-slide-next class="slide-next-btn" />
      </div>
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

.slide-next-btn {
  position: absolute;
  right: 0.5rem;
  top: calc(100% - 4rem);
  @include media-breakpoint-up(sm) {
    right: 2.5%;
    transform: translateY(-50%);
    top: 50%;
  }
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
  transform: translateX(-100%);
  &.previous {
    display: block;
    transform: translateX(-97.5%);
  }
  &.current {
    display: block;
    transform: translateX(2.5vw);
    z-index: 1;
    width: 95vw;
    @include media-breakpoint-up(sm) {
      transform: translateX(1vw);
      width: 99vw;
    }
  }
  &.next {
    display: block;
    transform: translateX(97.5%);
  }
}
</style>
