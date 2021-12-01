<template>
  <div class="section">
    <layout-two-column
      :section-number="slice.primary.SectionNumber"
      :section-title="slice.primary.SectionTitle"
      :sidebar-status="slice.primary.SidebarStatus"
      :sidebar-section-number="slice.primary.SidebarSectionNumber"
      :sidebar-section-title="slice.primary.SidebarSectionTitle"
    >
      <div class="countdown">
        <prismic-rich-text
          class="countdown-title"
          :field="slice.primary.title"
        />
        <div class="countdown-time">
          <div class="countdown-row">
            <span>{{ timer.days }}</span>
            <span class="countdown-designation">Days</span>
          </div>
          <div class="countdown-row">
            <span>{{ timer.hours }}</span>
            <span class="countdown-designation">Hrs</span>
          </div>
          <div class="countdown-row">
            <span>{{ timer.minutes }}</span>
            <span class="countdown-designation">Min</span>
          </div>
        </div>
        <div class="cta-row">
          <element-cta-button
            class="cta-button"
            :link="slice.primary.CtaLink"
            :title="slice.primary.CtaTitle"
          />
          <prismic-rich-text
            class="last-updated"
            :field="slice.primary.FooterContent"
          />
        </div>
      </div>
      <template #footer>
        <prismic-rich-text
          class="two-column-footer"
          :field="slice.primary.SidebarFooterText"
        />
      </template>
    </layout-two-column>
  </div>
</template>

<script>
export default {
  name: 'CountdownSlice',
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
      timer: {
        days: '00',
        hours: '00',
        minutes: '00',
      },
    }
  },
  mounted() {
    this.countdown()
  },
  methods: {
    countdown() {
      setInterval(() => {
        const times = {}
        const eventDate = new Date(this.slice.primary.TargetDate)
        const currentTime = Date.now()
        let deltaTime = Math.abs(eventDate - currentTime) / 1000
        const timeUnitsInSeconds = {
          days: 86400,
          hours: 3600,
          minutes: 60,
        }

        Object.keys(timeUnitsInSeconds).forEach((key) => {
          times[key] = Math.floor(deltaTime / timeUnitsInSeconds[key])
          deltaTime -= times[key] * timeUnitsInSeconds[key]
        })

        this.timer = times
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.section {
  color: white;
}
.countdown-title {
  h1 {
    line-height: 0.9;
    font-size: 8vw;
  }
}
.countdown-time {
  font-family: 'Natural-Selection';
  line-height: 0.8;
  font-size: 40vw;
  @include media-breakpoint-up(sm) {
    font-size: 10vw;
    padding-bottom: 10vw;
  }
}
.countdown-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-transform: uppercase;
  @include media-breakpoint-up(sm) {
    justify-content: flex-start;
  }
}
.countdown-designation {
  display: block;
  margin-left: 5%;
  font-size: 0.1em;
  font-family: 'Sneak';
  @include media-breakpoint-up(sm) {
    font-family: 'Natural-Selection';
    font-size: 1em;
  }
}
.cta-row {
  display: flex;
  flex-direction: column-reverse;
  @include media-breakpoint-up(sm) {
    flex-direction: row;
  }
}
.cta-button {
  text-align: center;
  margin: 20vw 0 10vw;
  @include media-breakpoint-up(sm) {
    margin: 0 25% 0 0;
    width: 50%;
  }
}
.two-column-footer {
  font-family: 'Sneak';
  text-transform: uppercase;
  margin-top: 10vw;
  @include media-breakpoint-up(sm) {
    margin-top: 0;
  }
}
.last-updated {
  margin-top: 10vw;
  @include media-breakpoint-up(sm) {
    margin-top: 0;
  }
}
</style>
