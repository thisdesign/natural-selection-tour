<template>
  <section class="rider-gallery-slice site-padding">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div @mousemove="updateMouse" class="gallery">
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
  </section>
</template>

<script>
export default {
  name: 'RiderGallerySlice',
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
      currentRider: null,
      ridersMock: [
        { name: 'Austin Sweetin' },
        { name: 'Jeremy Branton' },
        { name: 'Brad Cooper' },
        { name: 'James Sweetin' },
      ],
    }
  },
  computed: {
    riders() {
      return this.$store.state.riders.results
    },
  },
  mounted() {
    this.$store.dispatch('riders/loadRiders')
  },
  methods: {
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
.gallery {
  display: flex;
  flex-wrap: wrap;
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
</style>
