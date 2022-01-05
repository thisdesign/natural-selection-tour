<template>
  <div class="bracket-rider">
    <div class="rider-info">
      <h3 class="rider-name">{{ rider.name }}</h3>
      <img src="/mocks/flag-mock.jpg" alt="" />
    </div>
    <div class="rider-ratings">
      <bracket-athlete-rating
        v-for="(results, index) in rider.results"
        :key="index"
        :results="results"
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
          name: 'Sage Kotsenburg',
          nationality: '',
          results: [
            {
              average: 90.5,
              scores: ['J1_ 91.6', 'J2_88.4', 'J3_ 99.9'],
            },
            {
              average: 90.5,
              scores: ['J1_ 90.2', 'J2_80.3', 'J3_ 79.8'],
            },
            {
              average: 90.5,
              scores: ['J1_ 97.8', 'J2_98.1', 'J3_ 69.5'],
            },
          ],
        }
      },
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.bracket-rider {
  width: 43vw;
  min-width: 285px;
  background: rgba(41, 41, 41, 0.76);
  border: 1px solid #ffffff;
  height: 5rem;
  display: flex;
  margin-bottom: 0.5rem;
  position: relative;
}
.rider-info {
  display: flex;
  align-items: center;
  width: 65%;
  padding: 0.5rem;
}
.rider-name {
  font-family: 'Natural-Selection', sans-serif;
  font-size: 2vw;
  line-height: 0.7;
  margin-bottom: 0;
}
.rider-ratings {
  display: flex;
  width: 35%;
}
</style>
