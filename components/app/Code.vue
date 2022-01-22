<template>
  <section
    v-if="$store.state.ui.options.showCode"
    v-waypoint="{
      active: delayActive,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    :class="`section site-padding code-animation font-sneak waypoint ${
      waypointActive ? 'active' : ''
    }`"
  >
    <div class="columns">
      <div class="col indented">
        <div class="set">
          <div class="title">
            <prismic-rich-text :field="globalData.Intro" />
          </div>
        </div>
        <div class="set">
          <div class="title">
            <p>{{ globalData.LocationTitle }}</p>
          </div>
          <div class="row">
            <div class="loction-rte">
              <prismic-rich-text :field="globalData.Locations" />
            </div>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <prismic-rich-text :field="globalData.Footer" />
          </div>
        </div>
      </div>

      <div class="col indented">
        <div class="set">
          <div class="title">
            <p>{{ globalData.RiderTitle }}</p>
          </div>
          <div class="riders">
            <p
              v-for="(item, index) in $store.state.riders.results"
              :key="`riderName${index}`"
            >
              {{ item.data.Name[0].text }}
            </p>
          </div>
        </div>
        <div class="set">
          <div class="title">
            <prismic-rich-text :field="globalData.Footer" />
          </div>
        </div>
      </div>

      <div
        v-for="(col, colIndex) in columns"
        :key="`col${colIndex}`"
        class="col"
        :class="{ hidden: col[0].text === '' }"
      >
        <div
          v-for="(set, setIndex) in col"
          :key="`col${colIndex}_set${setIndex}`"
          class="set"
        >
          <div
            v-for="(row, rowIndex) in set.text.split('\n')"
            :key="`col${colIndex}_set${setIndex}row${rowIndex}`"
            class="row"
          >
            <p
              v-for="(item, index) in row.split('||')"
              :key="`col${colIndex}_set${setIndex}row${rowIndex}item${index}`"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap, { SplitText } from 'gsap/all'
import WaypointMixin from '@/mixins/Waypoint'

export default {
  name: 'CodeAnimation',
  mixins: [WaypointMixin],
  data() {
    return {
      delayActive: false,
    }
  },
  computed: {
    globalData() {
      return this.$store.state.globals.results.data
    },
    columns() {
      if (this.globalData.ColumnTwo) {
        return [
          this.globalData.ColumnTwo,
          this.globalData.ColumnThree,
          this.globalData.ColumnFour,
        ]
      } else {
        return []
      }
    },
  },
  watch: {
    waypointActive(isActive) {
      if (isActive) {
        const COLS = document.querySelectorAll('.code-animation .col')
        COLS.forEach((el, index) => {
          const splitText = new SplitText(el.querySelectorAll('p'), {
            type: 'chars',
          })
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 2,
              delay: 0.35 + index * 0.35,
              ease: 'Power1.easeInOut',
            },
          )
          gsap.fromTo(
            splitText.chars,
            { opacity: 0 },
            {
              duration: 0.01,
              opacity: 1,
              stagger: 0.005,
              delay: 0.35 + index * 0.35,
            },
          )
        })
      }
    },
  },
  mounted() {
    console.log(this.columns)
    setTimeout(() => {
      this.delayActive = true
    }, 300)
  },
}
</script>

<style lang="scss">
.code-animation {
  p {
    font-size: clamp(8px, 1vw, 12px);
    line-height: 1.1;
  }
  .loction-rte {
    p {
      margin-bottom: 0;
    }
  }
}
</style>

<style scoped lang="scss">
* {
  font-size: clamp(8px, 1vw, 12px);
  line-height: 1.1;
}
.section {
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  border-top: 1px solid white;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: none;
  @include media-breakpoint-up(sm) {
    display: block;
  }
}
p {
  margin: 0;
  padding: 0;
}
.section-title,
.copywrite {
  padding-left: 1rem;
}
.riders {
  columns: 2;
}
.columns {
  display: flex;
}
.title {
  margin-bottom: 1.1em;
}
.col {
  width: 25%;
  padding: 0 1rem;
  &.hidden {
    display: none;
  }
}
.indented {
  .riders,
  .row {
    padding-left: 2rem;
  }
}
.set {
  margin-bottom: 1.1em;
}
.row {
  display: flex;
  justify-content: space-between;
}
</style>
