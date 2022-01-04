<template>
  <div
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section countdown waypoint ${waypointActive ? 'active' : ''}`"
  >
    <layout-two-column
      :section-number="slice.primary.SectionNumber"
      :section-title="slice.primary.SectionTitle"
      :sidebar-status="slice.primary.SidebarStatus"
      :sidebar-section-number="slice.primary.SidebarSectionNumber"
      :sidebar-section-title="slice.primary.SidebarSectionTitle"
      :should-show="waypointActive"
    >
      <div class="countdown">
        <prismic-rich-text
          class="countdown-title"
          :field="slice.primary.title"
        />
        <div ref="countdown" class="countdown-time">
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
              type="button"
              class="cta-button btn"
              :url="slice.primary.CtaLink.url"
              :title="slice.primary.CtaTitle"
              @click="openModal"
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
    <transition name="vt-fade" mode="out-in">
      <div v-if="modalOpen" class="optin-modal">
        <div class="optin-modal-inner">
          <button class="close-modal-btn" @click="closeModal">
            <span></span><span></span>
          </button>
          <TextSignup />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap, { SplitText } from 'gsap/all'
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'CountdownSlice',
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
      modalOpen: false,
      timer: {
        days: '00',
        hours: '00',
        minutes: '00',
      },
    }
  },
  watch: {
    waypointActive() {
      this.animate().then(() => {
        this.countdown()
      })
    },
  },
  mounted() {
    this.updateTime()
  },
  methods: {
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
    animate() {
      let count = 0
      return new Promise((resolve) => {
        const rows = this.$refs.countdown.querySelectorAll('.countdown-row')
        rows.forEach((row, index) => {
          const st = new SplitText(row, { type: 'chars' })
          gsap.fromTo(
            st.chars,
            {
              opacity: 0,
              y: '100%',
              rotate: '-20deg',
              transformOrigin: '0% 100%',
            },
            {
              opacity: 1,
              y: 0,
              rotate: 0,
              delay: 0.5 + index * 0.3,
              duration: 0.7,
              stagger: 0.05,
              onComplete: () => {
                st.revert()
                count++
                if (count === 3) {
                  resolve()
                }
              },
            },
          )
        })
      })
    },
    updateTime() {
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
    },
    countdown() {
      this.updateTime()
      setInterval(() => this.updateTime(), 1000)
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

<style lang="scss" scoped>
.optin-modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  .optin-modal-inner {
    background: white;
    max-width: 620px;
    margin: auto;
    border-radius: 10px;
    padding: 20px;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 0.7rem;
    margin-right: 0.7rem;
    width: 1rem;
    height: 1rem;
    background: none;
    border: none;
    padding: 0;
    transform: rotate(45deg);
    &:focus {
      outline: none;
    }
    span {
      border-radius: 10px;
      display: block;
      height: 2px;
      width: 100%;
      background: black;
      &:first-child {
        transform: rotate(90deg) translate(1px, 0);
      }
      &:last-child {
        transform: translate(0, -1px);
      }
    }
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
    overflow: hidden;
    line-height: 0.75;
    margin-bottom: 1rem;
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
    margin-bottom: 3rem;
    @include media-breakpoint-up(sm) {
      margin-top: 0;
      margin-bottom: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Natural-Selection';
      font-size: clamp(1.8rem, 3vw, 3.5rem);
    }
    * {
      text-transform: uppercase;
      font-size: clamp(0.6rem, 0.8vw, 0.8vw);
    }
  }
}
</style>
