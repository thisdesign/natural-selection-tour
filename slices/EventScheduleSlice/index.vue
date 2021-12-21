<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section site-padding waypoint ${waypointActive ? 'active' : ''}`"
  >
    <element-section-bar
      ref="bar"
      :number="slice.primary.SectionNumber"
      :title="slice.primary.SectionTitle"
    />
    <div v-if="!isLoading" class="events">
      <div
        v-for="(event, index) in eventItems"
        :key="`event${index}`"
        class="event"
        :class="{ hidden: index >= amountToShow && collapsed }"
      >
        <div class="event-image">
          <img v-if="event.image" :src="event.image" />
        </div>
        <div class="event-date">
          <span class="month">
            {{ eventMonth(event.start) }}
          </span>
          <span class="day">
            {{ eventDay(event.start) }}
          </span>
        </div>
        <div class="event-description">
          <h5>
            {{ eventWeekday(event.start) }},
            {{ eventMonth(event.start, 'short') }} {{ eventDay(event.start) }}rd
          </h5>
          <div v-html="event.title"></div>
        </div>
      </div>
    </div>
    <button v-if="collapsed" class="btn-show-more" @click="expandEvents()">
      More
    </button>
  </section>
</template>

<script>
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'EventScheduleSlice',
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
      collapsed: true,
      amountToShow: 2,
    }
  },
  async fetch() {
    if (this.isLoading) {
      await this.$store.dispatch('events/loadEvents', fetch)
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['events/isLoading']
    },
    eventItems() {
      return this.$store.state.events.items
    },
  },
  watch: {
    waypointActive(active) {
      if (this.$refs.bar) {
        this.$refs.bar.show()
      }
    },
  },
  methods: {
    expandEvents() {
      this.collapsed = false
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
  width: 100%;
  border-radius: 10rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
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
  .month {
    font-size: 6vw;
    @include media-breakpoint-up(sm) {
      font-size: 1.5vw;
    }
  }
  .day {
    font-size: 20vw;
    @include media-breakpoint-up(sm) {
      font-size: 5vw;
    }
    @include media-breakpoint-up(md) {
      font-size: 4.3vw;
    }
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
