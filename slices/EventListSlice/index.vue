<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section event-section site-padding waypoint ${
      waypointActive ? 'active' : ''
    }`"
  >
    <div class="section-bar site-padding">
      <element-section-bar
        ref="bar"
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <slider
      ref="slider"
      :options="sliderOptions"
      :class="`events-list ${
        slice.primary.CenterItems === true ? 'center' : ''
      }`"
      @slide="onSlide"
    >
      <slideritem v-for="(item, i) in slice.items" :key="`event-item-${i}`">
        <div :class="`event-item event-${i} ${item.Active ? '' : 'disable'}`">
          <div v-if="item.HideDate === false" class="event-date">
            <span class="month">{{ item.Month }}</span>
            <span :style="{ color: item.StartColor }" class="day">{{
              item.Start
            }}</span>
            <span class="divider"></span>
            <span :style="{ color: item.EndColor }" class="day">{{
              item.End
            }}</span>
          </div>
          <div v-if="item.Graphic.url" class="event-graphic">
            <prismic-image :field="item.Graphic" />
          </div>
          <prismic-rich-text class="event-title" :field="item.Title" />
          <div class="status-row">
            <prismic-rich-text class="event-location" :field="item.Location" />
            <element-status-icon
              v-if="item.Status !== 'blank'"
              class="status-icon"
              :status="item.Status"
            />
          </div>
          <prismic-rich-text
            class="event-description"
            :field="item.Description"
          />
          <div
            v-if="item.Status !== 'blank'"
            v-waypoint="{
              active: true,
              callback: onShowSnow,
              options: { threshold: [0.45, 0.55] },
            }"
            class="location-stats"
          >
            <div
              :class="`location-snow-symbol item-${i}`"
              :style="{ height: `${50 + item.SnowPercent / 2}%` }"
            ></div>
            <prismic-rich-text class="label" :field="item.SnowDescription" />
            <div class="snow-amount">
              <span class="number">{{ item.SnowAmount }}</span>
              <span class="unit">{{ item.SnowUnits }}</span>
            </div>
          </div>
          <element-cta-button
            v-if="item.cta !== undefined && item.ctalink.url !== undefined"
            class="event-btn"
            :link="item.ctalink"
            :title="item.cta"
          />
        </div>
      </slideritem>
    </slider>
  </section>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import GetStatus from '@/mixins/GetStatus'
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'EventListSlice',
  components: {
    slider,
    slideritem,
  },
  mixins: [GetStatus, WaypointMixin],
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
        centeredSlides: false,
        preventRebound: true,
        pagination: false,
        threshold: 100,
        currentPage: 0,
        loop: false,
      },
    }
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
    onShowSnow({ el, going }) {
      if (going === 'in') {
        el.classList.add('show')
      }
    },
    onSlide(data) {},
  },
}
</script>

<style lang="scss">
.event-section {
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
  .slider-wrapper {
    align-items: stretch;
  }
  // &.center {
  //   .slider-wrapper {
  //     justify-content: center;
  //   }
  // }
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
    opacity: 0;
    transform: translateY(5vh);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    &.event-1 {
      transition-delay: 0.5s;
    }
    &.event-2 {
      transition-delay: 0.75s;
    }
    &.event-3 {
      transition-delay: 1s;
    }

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
      pointer-events: none;
    }
  }
  .event-btn {
    margin-top: clamp(2.5rem, 5vw, 10rem);
    border-radius: 100rem;
    font-size: clamp(1.3rem, 2.8vw, 10rem);
    line-height: 1;
    padding: 0.4em;
    text-align: center;
    width: 100%;
  }
  .event-graphic {
    position: relative;
    margin-bottom: 15px;
    img {
      width: 100%;
    }
  }
  .event-date {
    width: 100%;
    margin-bottom: 3rem;
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
      word-spacing: 10rem;
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
    position: relative;
    color: black;
    padding: clamp(0.5rem, 1.5vw, 2rem);
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: clamp(3rem, 5vw, 10rem);
    .location-snow-symbol {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: white;
      transform: scaleY(0);
      transition: transform 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: bottom left;
      &.item-0 {
        transition-delay: 0.1s;
      }
      &.item-1 {
        transition-delay: 0.2s;
      }
      &.item-2 {
        transition-delay: 0.3s;
      }
      transition-delay: 0.4s;
    }
    &.show {
      .location-snow-symbol {
        transform: scaleY(1);
      }
    }
    .label {
      margin-bottom: 2vw;
      padding-top: clamp(3rem, 7.5vw, 7.5vw);
      width: 60%;
      * {
        font-size: clamp(0.85rem, 1.2vw, 3rem);
        margin-bottom: 0;
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
