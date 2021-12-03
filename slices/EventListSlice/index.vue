<template>
  <section class="section event-section site-padding">
    <div class="section-bar site-padding">
      <element-section-bar
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <!-- <vue-glide :options="sliderOptions" class="events-list">
      <vue-glide-slide
        v-for="(item, i) in slice.items"
        :key="`event-item-${i}`"
      >
        <div :class="`event-item ${item.Active ? '' : 'disable'}`">
          <div class="event-date">
            <span class="month">{{ item.Month }}</span>
            <span class="day">{{ item.Start }}</span>
            <span class="divider"></span>
            <span class="day">{{ item.End }}</span>
          </div>
          <div class="event-graphic">
            <prismic-image :field="item.Graphic" />
          </div>
          <prismic-rich-text class="event-title" :field="item.Title" />
          <div class="status-row">
            <prismic-rich-text class="event-location" :field="item.Location" />
            <element-status-icon class="status-icon" :status="item.Status" />
          </div>
          <prismic-rich-text
            class="event-description"
            :field="item.Description"
          />
          <div class="location-stats">
            <prismic-rich-text class="label" :field="item.SnowDescription" />
            <div class="snow-amount">
              <span class="number">{{ item.SnowAmount }}</span>
              <span class="unit">{{ item.SnowUnits }}</span>
            </div>
          </div>
          <button class="event-btn">Explore</button>
        </div>
      </vue-glide-slide>
    </vue-glide> -->
    <slider
      ref="slider"
      :options="sliderOptions"
      class="events-list"
      @slide="onSlide"
    >
      <slideritem v-for="(item, i) in slice.items" :key="`event-item-${i}`">
        <div :class="`event-item ${item.Active ? '' : 'disable'}`">
          <div class="event-date">
            <span class="month">{{ item.Month }}</span>
            <span class="day">{{ item.Start }}</span>
            <span class="divider"></span>
            <span class="day">{{ item.End }}</span>
          </div>
          <div class="event-graphic">
            <prismic-image :field="item.Graphic" />
          </div>
          <prismic-rich-text class="event-title" :field="item.Title" />
          <div class="status-row">
            <prismic-rich-text class="event-location" :field="item.Location" />
            <element-status-icon class="status-icon" :status="item.Status" />
          </div>
          <prismic-rich-text
            class="event-description"
            :field="item.Description"
          />
          <div class="location-stats">
            <prismic-rich-text class="label" :field="item.SnowDescription" />
            <div class="snow-amount">
              <span class="number">{{ item.SnowAmount }}</span>
              <span class="unit">{{ item.SnowUnits }}</span>
            </div>
          </div>
          <button class="event-btn">Explore</button>
        </div>
      </slideritem>
    </slider>
  </section>
</template>

<script>
// import { Glide, GlideSlide } from 'vue-glide-js'
// import 'vue-glide-js/dist/vue-glide.css'
import { slider, slideritem } from 'vue-concise-slider'

export default {
  name: 'EventListSlice',
  components: {
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide,
    slider,
    slideritem,
  },
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
        preventRebound: true,
        pagination: false,
        threshold: 100,
        currentPage: 0,
        loop: false,
        freeze: true,
      },
    }
  },
  methods: {
    slide() {
      this.$refs.slider.$emit('slideNext')
    },
    onSlide(data) {
      // if (this.$refs.slider.currentSlide)
      console.log(data.end)
      window.end = data.end
    },
  },
}
</script>

<style lang="scss">
.event-section {
  &.site-padding {
    padding-right: 0;
  }
  .section-bar.site-padding {
    padding-left: 0;
  }
}
.events-list {
  // .glide__slide {
  //   height: unset;
  //   margin-right: calc(5vw) !important;
  //   width: calc(100vw - 4rem) !important;
  //   @include media-breakpoint-up(xs) {
  //     margin-right: 0 !important;
  //     width: calc(50vw - 2rem) !important;
  //   }
  //   @include media-breakpoint-up(md) {
  //     width: calc(23.75vw) !important;
  //   }
  // }
  .slider-wrapper {
    align-items: stretch;
  }
  .slider-item {
    width: calc(100vw - 4rem);
    margin-right: 20px;
    white-space: normal;
    text-align: left;
    height: unset;
    font-size: 100%;
    @include media-breakpoint-up(xs) {
      width: calc(50vw - 2rem);
      margin-right: 0;
    }
    @include media-breakpoint-up(sm) {
      width: calc(100vw / 3 - 1rem);
    }
    @include media-breakpoint-up(md) {
      width: calc(97.5vw / 4 - 2.5vw / 4);
    }
  }
  .event-item {
    height: 100%;
    width: 100%;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include media-breakpoint-up(xs) {
      padding-right: 2rem;
    }
    &.disable {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .event-btn {
    margin-top: clamp(2.5rem, 5vw, 10rem);
    border-radius: 100rem;
    font-size: clamp(1.3rem, 2.8vw, 10rem);
    line-height: 1;
    padding: 0.5em;
    text-align: center;
    width: 100%;
  }
  .event-graphic {
    position: relative;
    padding-top: 50%;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
    }
  }
  .event-date {
    width: 100%;
    .divider {
      display: block;
      height: 1px;
      width: 25%;
      background: white;
      margin: auto;
    }
    .month {
      font-size: clamp(1.5rem, 1.5vw, 5rem);
    }
    .day {
      font-size: clamp(3rem, 8vw, 10rem);
      padding: clamp(20px, 2vw, 2vw) 1vw;
    }
  }
  .event-title {
    margin: 0;
    * {
      font-family: 'Natural-Selection';
      font-size: clamp(1.2rem, 2vw, 7rem);
      line-height: 0.9;
    }
  }
  .event-location * {
    font-size: clamp(0.8rem, 1vw, 5rem);
    font-weight: bold;
    padding-right: 1rem;
  }
  .event-description {
    margin: 0 auto auto;
  }
  .status-row {
    margin: clamp(0.8rem, 1vw, 5rem) 0;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
  }
  .status-icon {
    width: 15%;
  }
  .location-stats {
    width: 100%;
    background: white;
    color: black;
    padding: clamp(0.5rem, 1.5vw, 2rem);
    line-height: 1;
    min-height: 12%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: clamp(3rem, 5vw, 10rem);
    .label {
      margin-bottom: 2vw;
      width: 60%;
      * {
        font-size: clamp(0.85rem, 1.2vw, 3rem);
      }
    }
    .snow-amount {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .number {
      font-size: clamp(2rem, 3vw, 7rem);
      font-weight: 700;
    }
    .unit {
      font-size: clamp(1rem, 1.3vw, 7rem);
    }
  }
}
</style>
