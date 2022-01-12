<template>
  <div
    ref="bracket"
    class="bracket-columns site-padding"
    @mousedown="mouseDownHandler"
    @mousemove="mouseMoveHandler"
    @mouseup="mouseUpHandler"
    @touchstart="mouseDownHandler"
    @touchmove="mouseMoveHandler"
    @touchend="mouseUpHandler"
  >
    <div
      v-for="(round, roundIndex) in rounds"
      :key="roundIndex"
      class="bracket-column"
    >
      <div
        v-for="(heat, heatIndex) in getHeats(round, roundIndex)"
        :key="heatIndex"
        class="bracket-set"
      >
        <div class="connector-line"></div>
        <bracket-athlete
          v-for="(athlete, atheleteIndex) in heat"
          :key="atheleteIndex"
          :rider="athlete"
          :all-results="round.results"
        />
        <div class="bracket-lines">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap/all'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
export default {
  props: {
    rounds: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      grabbing: false,
      currentRound: 1,
      distanceX: 0,
      swipeDirection: null,
      bracket: this.$refs.bracket,
      scrollPosition: {
        left: 0,
        x: 0,
      },
    }
  },
  computed: {
    totalRounds() {
      return this.rounds.length
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin)
    this.setCurrentRound()
  },
  methods: {
    getHeats(round, roundIndex) {
      const entries = Array.from(round.entries)
      //   Have to find what the previous Heat each athlete was in
      entries.forEach((entry) => {
        if (this.rounds[roundIndex - 1]) {
          const previousRoundEntries = this.rounds[roundIndex - 1].entries
          const previousEntry = previousRoundEntries.find(
            (previousEntry) =>
              previousEntry.athlete.externalId === entry.athlete.externalId,
          )
          entry.previousHeat = previousEntry.category
        }
      })
      //   Sort the entries list by what previous heat they were in so that the columns line up correctly
      entries.sort((a, b) => {
        if (a.previousHeat && b.previousHeat) {
          if (a.previousHeat < b.previousHeat) return -1
          if (a.previousHeat > b.previousHeat) return 1
        }
        return 0
      })
      //   Grouping the athletes by heat
      const heats = []
      const numberOfHeats = entries.length / 2
      for (let i = 0; i < numberOfHeats; i++) {
        const currentHeat = []
        entries.forEach((entry) => {
          if (parseInt(entry.category) === i + 1) {
            currentHeat.push(entry)
          }
        })
        heats.push(currentHeat)
      }
      return heats
    },
    getColumnWidth() {
      return this.$refs.bracket.scrollWidth / 4
    },
    setCurrentRound() {
      if (this.currentRound > this.rounds.length) {
        this.currentRound = this.rounds.length
      } else if (this.currentRound < 1) {
        this.currentRound = 1
      }
      gsap.to(this.$refs.bracket, {
        duration: 0.5,
        scrollTo: {
          x: this.getColumnWidth() * (this.currentRound - 1),
          ease: 'power4',
        },
      })
    },

    mouseDownHandler(e) {
      this.grabbing = true
      this.$refs.bracket.style.cursor = 'grabbing'
      this.scrollPosition.left = this.$refs.bracket.scrollLeft
      this.scrollPosition.x = e.clientX ?? e.touches[0].clientX
    },
    mouseMoveHandler(e) {
      if (this.grabbing) {
        if (e.clientX) {
          this.distanceX = e.clientX - this.scrollPosition.x
        } else {
          this.distanceX = e.touches[0].clientX - this.scrollPosition.x
        }

        this.$refs.bracket.scrollLeft =
          this.scrollPosition.left - this.distanceX

        if (this.distanceX < -100) {
          this.swipeDirection = 'LEFT'
        } else if (this.distanceX > 100) {
          this.swipeDirection = 'RIGHT'
        } else {
          this.swipeDirection = null
        }
      }
    },
    mouseUpHandler() {
      this.grabbing = false

      const columnsSwiped = Math.round(
        Math.abs(this.distanceX) / this.getColumnWidth(),
      )

      this.$refs.bracket.style.cursor = 'grab'
      if (this.swipeDirection === 'LEFT') {
        if (this.currentRound < this.totalRounds) {
          this.currentRound += Math.max(columnsSwiped, 1)
        }
      } else if (this.swipeDirection === 'RIGHT') {
        if (this.currentRound > 1) {
          this.currentRound -= Math.max(columnsSwiped, 1)
        }
      }
      this.setCurrentRound()
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  user-select: none;
}
.bracket-columns {
  display: flex;
  overflow: hidden;
  cursor: grab;
}
.bracket-lines {
  position: absolute;
  right: 0;
  top: 20%;
  height: 60%;
  span {
    position: absolute;
    height: 1px;
    width: 1.5rem;
    background: white;
    display: block;
    &:first-child {
      top: 0;
      width: 1.5rem;
    }
    &:nth-child(2) {
      top: 0;
      height: 100%;
      width: 1px;
      transform: translateX(1.5rem);
    }
    &:nth-child(3) {
      top: 0;
    }
    &:last-child {
      bottom: 0;
    }
  }
}
.bracket-set {
  margin-bottom: 1rem;
  position: relative;
}
.bracket-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 3rem;

  &:first-child {
    .bracket-set {
      &:nth-child(odd) {
        .bracket-lines span.line {
          &:last-child {
            width: 3rem;
          }
        }
      }
      &:nth-child(even) {
        .bracket-lines span.line {
          &:first-child {
            width: 3rem;
          }
        }
      }
    }
  }

  &:not(:first-child) {
    .bracket-set span.line {
      &:nth-child(3) {
        top: 50%;
        transform: translateX(100%);
      }
    }
  }

  &:last-child {
    .bracket-set span.line {
      display: none;
    }
  }
  &:nth-child(n + 3) {
    .connector-line {
      width: 1px;
      top: 50%;
      height: 256px;
      transform: translateY(-50%);
      background: white;
      position: absolute;
      @include media-breakpoint-up(sm) {
        height: 384px;
      }
    }
  }
  &:nth-child(n + 4) {
    .connector-line {
      height: 512px;
      @include media-breakpoint-up(sm) {
        height: 768px;
      }
    }
  }
}
</style>
