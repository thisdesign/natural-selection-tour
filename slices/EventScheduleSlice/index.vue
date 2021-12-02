<template>
  <section class="section">
    <element-section-bar
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div class="events">
      <div
        v-for="(event, index) in getPaginatedEvents()"
        :key="event.date"
        class="event"
        :class="{ hidden: index >= amountToShow && collapsed }"
      >
        <div class="event-image">
          <prismic-image :field="event.image" />
        </div>
        <div class="event-date">
          <span class="month">
            {{ eventMonth(event.date) }}
          </span>
          <span class="day">
            {{ eventDay(event.date) }}
          </span>
        </div>
        <div class="event-description">
          <h5>
            {{ eventWeekday(event.date) }},
            {{ eventMonth(event.date, 'short') }} {{ eventDay(event.date) }}rd
          </h5>
          <prismic-rich-text :field="event.description" />
        </div>
      </div>
    </div>
    <button class="btn-show-more" v-if="collapsed" @click="expandEvents()">
      More
    </button>
  </section>
</template>

<script>
export default {
  name: 'EventScheduleSlice',
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
      collapsed: true,
      amountToShow: 2,
      eventItems: this.slice.items,
    }
  },
  methods: {
    expandEvents() {
      this.collapsed = false
    },
    getPaginatedEvents() {
      return this.eventItems
    },
    eventMonth(eventDate, length = 'long') {
      const date = new Date(eventDate)
      return date.toLocaleString('default', { month: length })
    },
    eventDay(eventDate) {
      const date = new Date(eventDate)
      return date.getDate()
    },
    eventWeekday(eventDate, length = 'long') {
      const date = new Date(eventDate)
      return date.toLocaleString('default', { weekday: length })
    },
  },
}
</script>

<style scoped lang="scss">
.section {
  position: relative;
}
a {
  color: #111;
}

.btn-show-more {
  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.events {
  justify-content: space-between;
  @include media-breakpoint-up(sm) {
    display: flex;
    flex-wrap: wrap;
  }
}

.event {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10vw;
  @include media-breakpoint-up(sm) {
    padding-right: 1vw;
    width: 48%;
    margin-bottom: 6vw;
  }
  @include media-breakpoint-up(md) {
    flex-wrap: nowrap;
  }
  &.hidden {
    display: none;
    @include media-breakpoint-up(sm) {
      display: flex;
    }
  }
}
.event-image {
  position: relative;
  overflow: hidden;
  padding-top: 35%;
  border-radius: 1vw;
  width: 48%;
  @include media-breakpoint-up(md) {
    padding-top: 13%;
    width: 25%;
  }
  @include media-breakpoint-up(lg) {
    padding-top: 18%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.event-date {
  width: 48%;
  @include media-breakpoint-up(md) {
    width: 20%;
  }
}
.event-description {
  width: 100%;
  margin-top: 4vw;
  @include media-breakpoint-up(md) {
    margin-top: 0;
    width: 50%;
  }
}
</style>
