<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="events">
      <div
        v-for="(item, i) in slice.items"
        :key="`event-item-${i}`"
        :class="`event-item ${item.Active ? '' : 'disable'}`"
      >
        <span>{{ item.Month }}</span>
        <span>{{ item.Start }}</span>
        <span>{{ item.End }}</span>
        <prismic-image :field="item.Graphic" />
        <prismic-rich-text :field="item.Title" />
        <prismic-rich-text :field="item.Location" />
        <prismic-rich-text :field="item.Description" />
        <span>{{ item.Status }}</span>
        <prismic-rich-text :field="item.SnowDescription" />
        <span>{{ item.SnowAmount }}</span>
        <span>{{ item.SnowUnits }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventListSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.events {
  display: flex;
}
.event-item {
  width: 25%;
  color: $white;
  padding: 1rem;

  &.disable {
    opacity: 0.5;
    pointer-events: none;
  }

  img {
    width: 100%;
  }
}
</style>
