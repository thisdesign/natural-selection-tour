<template>
  <section class="section">
    <div v-for="event in slice.items" :key="event.date" class="event">
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
          {{ eventWeekday(event.date) }}, {{ eventMonth(event.date, 'short') }}
          {{ eventDay(event.date) }}rd
        </h5>
        <prismic-rich-text :field="event.description" />
      </div>
    </div>
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
  methods: {
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
  justify-content: space-between;
  @include media-breakpoint-up(sm) {
    display: flex;
    flex-wrap: wrap;
  }
}
a {
  color: #111;
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
  text-align: center;
  border: 1px solid white;
  border-radius: 1vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @include media-breakpoint-up(md) {
    width: 20%;
  }
  .month,
  .day {
    display: block;
  }
  .month {
    background: white;
    color: black;
    padding: 5px 0;
    font-size: 6vw;
    @include media-breakpoint-up(sm) {
      font-size: 1.5vw;
    }
  }
  .day {
    font-family: 'Natural-Selection';
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0.5;
    font-size: 20vw;
    padding: 20px;
    @include media-breakpoint-up(sm) {
      font-size: 5vw;
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
