<template>
  <section class="rider-gallery-slice" @mousemove="updateMouse">
    <div class="site-padding">
      <element-section-bar
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <div class="site-padding">
      <div class="desktop-gallery">
        <rider
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          :rider="getRider(item.Rider.id)"
          @update-rider="updateCurrentRider"
          @hidename="hideCursorName"
        />
        <div id="mouse-pointer" :class="{ active: pointer.showPointer }">
          <div class="inner">
            <span class="pointer"></span>
            <span v-if="pointer.currentRider" class="rider-name">{{
              pointer.currentRider.Name[0].text
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-gallery">
      <div class="site-padding">
        <select
          v-model="selectedRider"
          class="select-rider"
          @change="onRiderSelect"
        >
          <option disabled value="" selected>▼ Select A Rider</option>
          <option
            v-for="(item, i) in slice.items"
            :key="`slice-item-options-${i}`"
            :value="`${item.Rider.id}, ${i}`"
          >
            {{ getRider(item.Rider.id).data.Name[0].text }}
          </option>
        </select>
      </div>
      <slider ref="riderSlider" :options="riderSliderOptions" @slide="onSlide">
        <slideritem
          v-for="(item, i) in slice.items"
          :key="`slice-item-mobile-${i}`"
        >
          <div class="slider-image">
            <prismic-image :field="getRider(item.Rider.id).data.Rider" />
          </div>
        </slideritem>
      </slider>

      <div class="site-padding">
        <transition name="vt-fade" mode="out-in">
          <div v-if="currentMobileRider" :key="currentMobileRider.id">
            <div class="slider-rider-name">
              {{ currentMobileRider.data.Name[0].text }}
            </div>
            <div class="rider-info">
              <div class="rider-flag">
                <div class="flag-wrapper">
                  <prismic-image :field="currentMobileRider.data.Flag" />
                </div>
              </div>
              <div class="rider-info-col">
                <prismic-rich-text
                  class="rider-location"
                  :field="currentMobileRider.data.Location"
                />
                <div class="rider-stats">
                  <prismic-rich-text
                    :field="currentMobileRider.data.InformationLeft"
                  />
                  <prismic-rich-text
                    :field="currentMobileRider.data.InformationRight"
                  />
                </div>
              </div>
            </div>
            <div class="rider-description">
              <prismic-rich-text :field="currentMobileRider.data.Bio" />
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
  name: 'RiderGallerySlice',
  components: {
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
      currentMobileRider: null,
      selectedRider: '',
      pointer: {
        showPointer: false,
        currentRider: null,
      },
      riderSliderOptions: {
        preventRebound: true,
        pagination: false,
        centeredSlides: true,
        loop: true,
      },
    }
  },
  computed: {
    riders() {
      return this.$store.state.riders.results
    },
  },
  mounted() {
    console.log(this.riders)
    const section = document.querySelector('.rider-gallery-slice')
    const header = document.querySelector('header')
    section.style.paddingTop = `${header.offsetHeight}px`
    this.currentMobileRider = this.getRider(this.slice.items[0].Rider.id)
    window.addEventListener('resize', () => {
      this.sliderResize()
    })
  },
  methods: {
    sliderResize() {
      const slider = this.$refs.riderSlider
      if (slider) {
        slider.config.pageWidth = slider.$el.offsetWidth
        slider.config.pageHeight = slider.$el.offsetHeight
        if (
          slider.data.currentPage >= slider.config.sliderLength &&
          slider.config.loop
        ) {
          slider.slide(0, 'animationnone')
          return false
        }
        slider.slide(slider.data.currentPage, 'animationnone')
      }
    },
    onRiderSelect(data) {
      const value = data.target.value.split(',')
      this.currentMobileRider = this.getRider(value[0])
      this.$refs.riderSlider.$emit('slideTo', parseInt(value[1]))
    },
    onSlide(data) {
      if (data.currentPage >= 0 && data.currentPage < this.slice.items.length) {
        this.currentMobileRider = this.getRider(
          this.slice.items[data.currentPage].Rider.id,
        )
        this.selectedRider = `${this.slice.items[data.currentPage].Rider.id}, ${
          data.currentPage
        }`
      }
    },
    getRider(key) {
      if (this.riders[key]) {
        return this.riders[key]
      } else {
        return {}
      }
    },
    updateMouse(event) {
      const pointer = document.getElementById('mouse-pointer')
      pointer.style.left = event.clientX + 'px'
      pointer.style.top = event.clientY + 'px'
    },
    hideCursorName() {
      this.pointer.showPointer = false
    },
    updateCurrentRider(rider) {
      this.pointer.currentRider = rider
      this.pointer.showPointer = true
    },
  },
}
</script>

<style scoped lang="scss">
.mobile-gallery {
  color: white;
  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.desktop-gallery {
  display: none;
  flex-wrap: wrap;
  @include media-breakpoint-up(sm) {
    display: flex;
  }
}

#mouse-pointer {
  position: fixed;
  z-index: 1000;
  cursor: none;
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms;
  &.active {
    opacity: 1;
  }
  * {
    cursor: none;
    pointer-events: none;
  }
  .inner {
    display: flex;
    align-items: flex-start;
  }
  .pointer {
    background: white;
    width: 1rem;
    border-radius: 1rem;
    height: 1rem;
    margin-right: 1rem;
  }
  .rider-name {
    font-family: 'Natural-Selection';
    color: white;
    line-height: 0.8;
    font-size: 2vw;
    display: table-caption;
    width: 80%;
    word-spacing: 500px;
  }
}

/** Mobile Slider */
.select-rider {
  color: black;
  width: 100%;
  padding: 1rem;
  border-radius: 5rem;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  position: relative;
  appearance: none;
  text-transform: uppercase;
}
.slider-item {
  box-shadow: 0px 0px 0px 0px #000000;
  transition-timing-function: ease;
  transition: box-shadow 300ms;
  width: calc(100% - 4rem);
}
.slider-item.slider-active {
  box-shadow: 0px 0px 30px -4px #000000;
  z-index: 999;
}
.slider-item.slider-active-copy {
  box-shadow: 0px 0px 30px -4px #000000;
  z-index: 999;
}

.slider-image {
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  width: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.slider-rider-name {
  color: white;
  font-family: 'Natural-Selection';
  font-size: 8vw;
  line-height: 1;
  margin: 2rem 0;
}
.rider-info {
  display: flex;
  align-items: flex-start;
  line-height: 1.3;
  padding: 1vw 1vw 4vw;
  color: white;
}
.rider-flag {
  width: 18%;
  padding-right: 2vw;
  .flag-wrapper {
    border-radius: 50rem;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.rider-info-col {
  width: 82%;
}
.rider-location {
  font-weight: 700;
}
.rider-stats {
  columns: 2;
  span {
    display: block;
  }
}
</style>
