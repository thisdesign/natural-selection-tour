<template>
  <div class="section countdown">
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
          <div class="button-container">
            <element-cta-button
              class="cta-button"
              :link="slice.primary.CtaLink"
              :title="slice.primary.CtaTitle"
            />
          </div>
          <prismic-rich-text
            class="last-updated font-sneak"
            :field="slice.primary.FooterContent"
          />
        </div>
      </div>
      <template #footer>
        <prismic-rich-text
          class="two-column-footer font-sneak"
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

          times[key] = times[key].toLocaleString('en-US', {
            minimumIntegerDigits: 2,
          })
        })

        this.timer = times
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
.last-updated {
  h1 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
}
</style>

<style lang="scss">
.countdown.section {
  color: white;
  padding-bottom: 3rem;
  .countdown-title {
    h1 {
      line-height: 0.9;
      font-size: clamp(1.8rem, 4vw, 4vw);
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
    letter-spacing: 0.05em;
    @include media-breakpoint-up(sm) {
      font-family: 'Natural-Selection';
      font-size: 1em;
    }
  }
  .cta-row {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;

    @include media-breakpoint-up(sm) {
      flex-direction: row;
    }
  }

  .button-container {
    width: 100%;
    margin-top: 2rem;
    @include media-breakpoint-up(sm) {
      margin-right: 20px;
      width: calc(100% / 3 * 2);
    }
  }
  .cta-button {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 3rem;
    @include media-breakpoint-up(sm) {
      padding: 0.5rem 0rem;
      width: 75%;
      margin-bottom: 0;
    }
  }
  .two-column-footer {
    text-transform: uppercase;
    margin-top: 10vw;
    width: 85%;
    display: none;
    @include media-breakpoint-up(sm) {
      margin-top: 0;
      display: block;
    }
    p {
      font-size: clamp(0.6rem, 0.8vw, 0.8vw);
      margin-bottom: 0;
    }
  }
  .last-updated {
    margin-top: 10vw;
    margin-right: auto;
    font-size: 10px;
    @include media-breakpoint-up(sm) {
      margin-top: 0;
    }
    * {
      text-transform: uppercase;
      font-size: clamp(0.6rem, 0.8vw, 0.8vw);
    }
  }
}
</style>
