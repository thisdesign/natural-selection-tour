<template>
  <div class="bracket-rider">
    <div class="rider-info">
      <h3 class="rider-name">
        {{ rider.athlete.firstName }} <br />
        {{ rider.athlete.lastName }}
      </h3>
      <img
        v-if="rider.athlete.nationality"
        class="rider-nationality"
        :src="flag"
        :alt="rider.athlete.nationality"
      />
    </div>
    <div v-if="runs" class="rider-ratings">
      <bracket-athlete-rating
        v-for="(run, index) in runs"
        :key="index"
        :run="run"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rider: {
      type: Object,
      default: () => {
        return {
          fullName: 'Sage Kotsenburg',
          nationality: '',
        }
      },
    },
    allResults: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    runs() {
      // console.log(this.allResults.length)
      if (this.allResults) {
        if (this.allResults.length > 0) {
          const resultRider = this.allResults.find(
            (rider) =>
              this.rider.athlete.externalId === rider.externalAthleteId,
          )
          return resultRider.details[0].details.map((detail) => {
            return {
              average: detail.values[1],
              scores: detail.groups[0].details.map((scores) => {
                return {
                  judge: scores.values[0],
                  score: scores.values[1],
                  discard: scores.values[2],
                }
              }),
            }
          })
        } else {
          return null
        }
      } else {
        return null
      }
    },
    flag() {
      try {
        return require(`@/assets/svg/flags/${this.rider.athlete.nationality.toLowerCase()}.svg`)
      } catch {
        return require(`@/assets/svg/flags/_black.svg`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  color: white;
}
// .runs-2 {
//   width: 50%;
// }
// .runs-3 {
//   width: calc(100% / 3);
// }
.bracket-rider {
  width: 43vw;
  min-width: 320px;
  // background: rgba(41, 41, 41, 0.76);
  border: 1px solid #ffffff;
  height: 3rem;
  display: flex;
  margin-bottom: 0.5rem;
  position: relative;
  @include media-breakpoint-up(sm) {
    height: 5rem;
  }
}
.rider-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(41, 41, 41, 0.76);
  flex: 1 1 60%;
  padding: 2%;
}
.rider-name {
  font-family: 'Natural-Selection', sans-serif;
  font-size: clamp(0.8rem, 2vw, 2rem);
  line-height: 0.75;
  margin-bottom: 0;
  width: 95%;
}
.rider-ratings {
  display: flex;
  width: 40%;
}
.rider-nationality {
  height: 90%;
  max-height: 2.8rem;
  width: auto;
}
</style>
