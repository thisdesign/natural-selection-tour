<template>
  <section class="section">
    <div class="site-padding">
      <element-section-bar
        ref="bar"
        :number="slice.primary.SectionNumber"
        :title="slice.primary.SectionTitle"
      />
    </div>
    <div
      ref="bracket"
      class="bracket-columns site-padding"
      @mousedown="mouseDownHandler"
      @mousemove="mouseMoveHandler"
      @mouseup="mouseUpHandler"
    >
      <div v-for="(round, index) in rounds" :key="index" class="bracket-column">
        <div
          v-for="(heat, heatIndex) in round.heats"
          :key="heatIndex"
          class="bracket-set"
        >
          <div class="connector-line"></div>
          <bracket-athlete
            v-for="(rider, atheleteIndex) in heat.athletes"
            :key="atheleteIndex"
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
  </section>
</template>

<script>
export default {
  name: 'BracketSlice',
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
      rounds: [
        {
          heats: [
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
          ],
        },
        {
          heats: [
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
          ],
        },
        {
          heats: [
            {
              athletes: [1, 2],
            },
            {
              athletes: [1, 2],
            },
          ],
        },
        {
          heats: [
            {
              athletes: [1, 2],
            },
          ],
        },
      ],
      grabbing: false,
      scrollPosition: {
        left: 0,
        x: 0,
      },
    }
  },
  mounted() {
    window.bracket = this.$refs.bracket
  },
  methods: {
    mouseDownHandler(e) {
      this.grabbing = true
      this.$refs.bracket.style.cursor = 'grabbing'
      this.scrollPosition.left = this.$refs.bracket.scrollLeft
      this.scrollPosition.x = e.clientX
    },
    mouseMoveHandler(e) {
      if (this.grabbing) {
        const dx = e.clientX - this.scrollPosition.x
        this.$refs.bracket.scrollLeft = this.scrollPosition.left - dx
      }
    },
    mouseUpHandler() {
      this.grabbing = false
      this.$refs.bracket.style.cursor = 'grab'
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  padding-right: 0;
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
      height: 384px;
      top: 50%;
      transform: translateY(-50%);
      background: white;
      position: absolute;
    }
  }
  &:nth-child(n + 4) {
    .connector-line {
      height: 768px;
    }
  }
}
</style>
