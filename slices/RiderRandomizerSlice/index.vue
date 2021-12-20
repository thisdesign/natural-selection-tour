<template>
  <div class="randomizer" :style="{ cursor: 'pointer' }" @click="handleClick">
    <img
      v-if="state.ridersSelectedCount === 0"
      :src="require('./logo.svg')"
      class="logo"
    />

    <div class="title">
      <div class="js-title">
        <div v-for="item in currentRiderName" :key="item">
          {{ item }}
        </div>
      </div>
    </div>

    <div>
      <ul v-if="state.ridersRemainingCount" class="riderContainer">
        <Rider
          v-for="(rider, i) in ridersToShow"
          :key="`${rider.name}${i}`"
          ref="items"
          :data="rider"
          :index="i"
        />
      </ul>
      <ul v-else class="riderContainer">
        <Rider
          ref="items"
          :data="ridersToShow[0]"
          :index="0"
          :force-show="true"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/all'
import { getRandumNum, shuffle } from './util'
import { LENGTH } from './constants'
import Rider from './Rider'

gsap.registerPlugin(CSSPlugin)

export default {
  name: 'RiderRandomizerSlice',
  components: {
    Rider,
  },
  data() {
    return {
      tl: gsap.timeline(),
      ridersAndPositions: [],
      initialState: {},
      state: {},
    }
  },
  computed: {
    currentRiderName() {
      return this.state.currentSelectedRider
        ? this.state.currentSelectedRider.name.split(' ')
        : ['']
    },
    itemElements() {
      const arr = []
      for (let i = 0; i <= LENGTH; i++) {
        arr.push('.rider-' + i)
      }
      return arr
    },
    ridersToShow() {
      return this.state.currentSelectedRider
        ? [...this.state.ridersToShuffle, this.state.currentSelectedRider]
        : this.state.ridersToShuffle
    },
  },
  watch: {
    state(newState) {
      if (newState.ridersRemainingCount === 0) {
        gsap.set('.js-rider', { opacity: 1 })
      }
    },
  },
  created() {
    const RIDERS = this.$store.state.riders.results
    const RIDERS_POSITIONS = Object.keys(RIDERS).map((key, i) => {
      const RIDER = RIDERS[key]
      return {
        name: RIDER.data.Name[0].text,
        fileName: RIDER.data.Rider.url,
        rotation: getRandumNum(),
      }
    })

    this.initialState = {
      selectedRiders: [],
      ridersToShuffle: [],
      unselectedRiders: [...RIDERS_POSITIONS],
      currentSelectedRider: null,
      ridersRemaining: RIDERS_POSITIONS.length,
      animating: false,
      ridersSelectedCount: 0,
      ridersRemainingCount: RIDERS_POSITIONS.length,
    }

    this.ridersAndPositions = RIDERS_POSITIONS
    this.state = this.initialState
  },
  updated() {
    if (!this.state.currentSelectedRider) return
    this.$nextTick(() => {
      this.state.animating = true
      this.tl = gsap.timeline()

      this.hideEverything()

      this.tl.set(this.itemElements, {
        opacity: 1,
        delay: 0.2,
        stagger: {
          each: 0.1,
          ease: 'Power3.easeIn',
        },
      })

      this.tl
        .fromTo(
          '.js-title',
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            delay: 0.5,
            y: 0,
          },
        )
        .then(() => {
          this.state.animating = false
        })
    })
  },
  methods: {
    handleClick(event) {
      this.state.ridersRemainingCount
        ? this.randomlySelectRider()
        : this.resetDefaults()
    },
    hideEverything() {
      gsap.set([...this.itemElements, '.js-title'], {
        opacity: 0,
      })
    },
    resetDefaults() {
      this.state = this.initialState
    },
    randomlySelectRider() {
      if (this.state.animating) return
      if (this.state.ridersRemainingCount === 0) {
        this.state = this.initialState
      }
      const randomnIndex = Math.floor(
        Math.random() * this.state.unselectedRiders.length,
      )
      const randomlySelectedRider = this.state.unselectedRiders[randomnIndex]
      const selectedRiders = [
        randomlySelectedRider,
        ...this.state.selectedRiders,
      ].filter((r) => r)
      const unselectedRiders = shuffle([
        ...this.state.unselectedRiders.filter(
          (r) => r !== randomlySelectedRider,
        ),
      ])

      const ridersToShuffle = Array.from({ length: 50 })
        .map(() => [...unselectedRiders, randomlySelectedRider])
        .reduce((acc, cur) => [...cur, ...acc], [])
        .slice(0, LENGTH)
        .map((r) => ({ ...r, rotation: getRandumNum() }))

      const ridersSelectedCount = selectedRiders.length
      const ridersRemainingCount = unselectedRiders.length

      const newState = {
        ...this.state,
        selectedRiders,
        unselectedRiders,
        ridersToShuffle,
        currentSelectedRider: randomlySelectedRider,
        ridersSelectedCount,
        ridersRemainingCount,
      }

      this.state = newState
    },
  },
}
</script>

<style style="scss" scoped>
.randomizer {
  position: relative;
  background: #000;
  color: #fff;
  font-family: 'Natural-Selection';
  line-height: 0.85;
}
.riderContainer {
  position: relative;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  list-style: none;
  padding: 0;
}

.title {
  font-size: 6vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
  z-index: 100000;
  text-align: center;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 300px;
  z-index: 0;
  max-width: 50%;
  max-height: 20vh;
}
</style>
