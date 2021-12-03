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
              <div style="position: absolute; z-index: 10">{{ i }}</div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-slide-next" @click="slideNext">Next Slide</button>
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
  padding-top: 50%;
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
  right: 0;
  top: 50%;
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
  height: 300px;
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
  &.current {
    display: block;
    transform: translateZ(50vw);
  }
  &.next {
    display: block;
    transform: translateX(50vw) rotateY(90deg);
  }
}
</style>
