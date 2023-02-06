<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section event-section duels site-padding waypoint ${
      waypointActive ? 'active' : ''
    }`"
  >
    <div class="section-bar site-padding">
      <element-section-bar
        ref="bar"
        :number="slice.primary.sectionNumber"
        :title="slice.primary.sectionTitle"
      />
    </div>
    <div class="slider-wrapper">
      <div class="arrow arrow-prev" @click="onPrev">
        <svg
          width="16"
          height="27"
          viewBox="0 0 16 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.26367"
            width="18.7573"
            height="2.44661"
            transform="rotate(45 2.26367 0)"
            fill="white"
          />
          <rect
            x="15.5269"
            y="13.2632"
            width="18.7573"
            height="2.44661"
            transform="rotate(135 15.5269 13.2632)"
            fill="white"
          />
        </svg>
      </div>
      <div class="arrow arrow-next" @click="onNext">
        <svg
          width="16"
          height="27"
          viewBox="0 0 16 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.26367"
            width="18.7573"
            height="2.44661"
            transform="rotate(45 2.26367 0)"
            fill="white"
          />
          <rect
            x="15.5269"
            y="13.2632"
            width="18.7573"
            height="2.44661"
            transform="rotate(135 15.5269 13.2632)"
            fill="white"
          />
        </svg>
      </div>
      <slider
        ref="slider"
        :options="sliderOptions"
        :class="`events-list ${
          slice.primary.CenterItems === true ? 'center' : ''
        }`"
      >
        <slideritem v-for="(item, i) in slice.items" :key="`event-item-${i}`">
          <div class="duel-riders">
            <rider
              :rider="getRider(item.player1.id)"
              :duels="true"
              class="rider-item"
            />
            <rider
              :rider="getRider(item.player2.id)"
              :duels="true"
              class="rider-item"
            />
            <div class="duel-vs">VS.</div>
          </div>
        </slideritem>
      </slider>
    </div>
  </section>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'DuelSlice',
  components: {
    slider,
    slideritem,
  },
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
      sliderOptions: {
        currentPage: 0,
        loopedSlides: 1,
        slidesToScroll: 1,
        loop: true,
        pagination: false,
      },
    }
  },
  computed: {
    riders() {
      return this.$store.state.riders.results
    },
  },
  watch: {
    waypointActive() {
      if (this.$refs.bar) {
        this.$refs.bar.show()
      }
    },
  },
  mounted() {
    // console.log(this.slice)
  },
  methods: {
    onPrev() {
      this.$refs.slider.$emit('slidePre')
    },
    onNext() {
      this.$refs.slider.$emit('slideNext')
    },
    getRider(key) {
      if (this.riders[key]) {
        return this.riders[key]
      } else {
        return {}
      }
    },
  },
}
</script>

<style lang="scss">
.duels {
  .duel-riders {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    @include media-breakpoint-up(md) {
      // margin-left: 50px;
    }
  }

  .duel-vs {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Natural-Selection', sans-serif;
    background-color: black;
    border: 1px solid white;
    font-size: 20px;
    border-radius: 20px;
    padding: 5px 20px;

    @include media-breakpoint-up(sm) {
      font-size: 40px;
      border-radius: 40px;
      padding: 5px 40px;
    }
  }

  .slider-wrapper {
    position: relative;
    width: calc(100% - 30px);
    @include media-breakpoint-up(lg) {
      width: calc(100% - 50px);
    }
    .arrow {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
      height: 60px;
      z-index: 100;
      align-items: center;
      justify-content: center;
      display: none;
      @include media-breakpoint-up(xs) {
        display: flex;
      }
    }
    .arrow-prev {
      left: -34px;
      @include media-breakpoint-up(sm) {
        left: -8px;
      }
      transform: translate(0%, -50%) rotate(180deg);
    }
    .arrow-next {
      right: -24px;
      @include media-breakpoint-up(sm) {
        right: 0px;
      }
      transform: translate(12px, -50%);
    }
  }
  &.event-section {
    &.active {
      .event-item {
        opacity: 1;
        transform: translateY(0);
        &.disable {
          opacity: 0.2;
        }
      }
    }
    padding-bottom: 3rem;
    &.site-padding {
      padding-right: 0;
    }
    .section-bar.site-padding {
      padding-left: 0;
    }
  }
  .events-list {
    // width: calc(100% - 100px);
    .slider-wrapper {
      align-items: stretch;
    }
    // &.center {
    //   .slider-wrapper {
    //     justify-content: center;
    //   }
    // }
    .slider-item {
      width: calc(100% + 30px);
      white-space: normal;
      text-align: left;
      height: unset;
      font-size: 100%;
      // @include media-breakpoint-up(xs) {
      //   width: calc(100% / 2);
      // }
      // @include media-breakpoint-up(sm) {
      //   width: calc(100% / 3);
      // }
      // @include media-breakpoint-up(md) {
      //   width: calc(100% / 4);
      // }
    }
    .event-item {
      cursor: pointer;
      opacity: 0;
      transform: translateY(5vh);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
      height: 100%;
      width: 100%;
      color: $white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // @include media-breakpoint-up(xs) {
      padding-right: 2rem;
      // }
      &.disable {
        pointer-events: none;
      }
      .content {
        padding: 0 8px;
      }
    }
    .slider-image {
      position: relative;
      margin-bottom: 10px;
      img {
        width: 100%;
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
    .event-title {
      margin: 0;
      * {
        // word-spacing: 10rem;
        font-family: 'Natural-Selection';
        font-size: clamp(1.2rem, 1.6vw, 6rem);
        line-height: 0.9;
        margin-bottom: 5px;
      }
    }
    .event-description {
      p {
        font-size: 0.875rem;
      }
    }
  }
}
</style>
