<template>
  <section class="rider-gallery-slice site-padding">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="desktop-gallery" @mousemove="updateMouse">
      <rider
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        :rider="getRider(item.Rider.id)"
        @update-rider="updateCurrentRider"
        @hidename="hideCursorName"
      />
      <div v-show="showPointer" id="mouse-pointer">
        <div class="inner">
          <span class="pointer"></span>
          <span v-if="currentRider" class="rider-name">{{
            currentRider.Name[0].text
          }}</span>
        </div>
      </div>
    </div>
    <div class="mobile-gallery">
      <select
        id=""
        v-model="currentMobileRider"
        name=""
        @change="onRiderSelect"
      >
        <option disabled value="">Select A Rider</option>
        <option
          v-for="(item, i) in slice.items"
          :key="`slice-item-options-${i}`"
          :value="item.Rider.id"
        >
          {{ getRider(item.Rider.id).data.Name[0].text }}
        </option>
      </select>
      <slider ref="riderSlider" :options="riderSliderOptions" @slide="onSlide">
        <slideritem
          v-for="(item, i) in slice.items"
          :key="`slice-item-mobile-${i}`"
        >
          <prismic-image :field="getRider(item.Rider.id).data.Rider" />
        </slideritem>
      </slider>

      <div v-if="currentMobileRider">
        <prismic-rich-text
          class="rider-name"
          :field="currentMobileRider.data.Name"
        />
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
      currentRider: null,
      currentMobileRider: null,
      showPointer: false,
      riderSliderOptions: {
        preventRebound: true,
        pagination: false,
        threshold: 100,
        currentPage: 0,
        loop: false,
      },
    }
  },
  computed: {
    riders() {
      return this.$store.state.riders.results
    },
  },
  mounted() {
    this.$store.dispatch('riders/loadRiders')
    this.currentMobileRider = this.getRider(this.slice.items[0].Rider.id)
  },
  methods: {
    onRiderSelect(data) {
      this.currentMobileRider = this.getRider(data.target.value)
      this.$refs.riderSlider.$emit('slideTo', 2)
    },
    onSlide(data) {
      this.currentMobileRider = this.getRider(
        this.slice.items[data.currentPage].Rider.id,
      )
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
      this.showPointer = false
    },
    updateCurrentRider(rider) {
      this.currentRider = rider
      this.showPointer = true
    },
  },
}
</script>

<style scoped lang="scss">
.rider-gallery-slice {
}
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
  // margin-left: 2rem;
  // margin-top: -1rem;
  cursor: none;
  pointer-events: none;
  // cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDEwQzIwIDE1LjUyMjggMTUuNTIyOCAyMCAxMCAyMEM0LjQ3NzE1IDIwIDAgMTUuNTIyOCAwIDEwQzAgNC40NzcxNSA0LjQ3NzE1IDAgMTAgMEMxNS41MjI4IDAgMjAgNC40NzcxNSAyMCAxMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=')
  //     16 16,
  //   pointer;
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

.rider-info {
  display: flex;
  align-items: flex-start;
  line-height: 1.3;
  padding: 1vw 1vw 4vw;
  color: white;
  h4 {
    color: white;
  }
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
