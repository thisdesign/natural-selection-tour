<template>
  <section class="rider-gallery-slice">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="gallery">
      <rider
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        :rider="getRider(item.Rider.id)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'RiderGallerySlice',
  props: {
    riders: {
      type: Object,
      default() {
        return {}
      },
    },
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods: {
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

<style scoped>
.rider-gallery-slice {
  padding: 1rem;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
}
</style>
