<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section waypoint ${waypointActive ? 'active' : ''}`"
  >
    <div class="slider-container">
      <div class="slider-wrapper">
        <div ref="slider" class="image-slider">
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="slide"
            :class="{ single: slice.items.length < 2 }"
          >
            <div class="slide-image">
              <prismic-image :field="item.Image" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="slice.items.length > 1" @click="slideNext">
        <element-btn-slide-next class="slide-next-btn" />
      </div>
    </div>
  </section>
</template>

<script>
import { CubeSlider } from '@/scripts/CubeSlider'
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'ImageSliderSlice',
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
    return {}
  },
  mounted() {
    this.slider = new CubeSlider(this.$refs.slider)
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
  overflow: hidden;
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
    z-index: 2;
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
    &.single {
      width: 100vw;
      transform: none;
    }
  }
  &.next {
    display: block;
    transform: translateX(100%);
  }
}
</style>
