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
        <div class="event-date">
          <span class="month">{{ item.Month }}</span>
          <span class="day">{{ item.Start }}</span>
          <span class="divider"></span>
          <span class="day">{{ item.End }}</span>
        </div>
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
.event-date {
  .divider {
    display: block;
    height: 1px;
    width: 25%;
    background: white;
    margin: auto;
  }
}
</style>
