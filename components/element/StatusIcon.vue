<template>
  <div>
    <svg
      :class="getStatus(status).color"
      width="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill="currentColor" cx="50" cy="50" r="50" />
      <text
        x="50"
        y="50"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="450%"
        font-family="Natural-Selection"
      >
        {{ getStatus(status).letter }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  methods: {
    getStatus(statusCode) {
      const status = {
        color: '',
        letter: 'X',
      }
      if (statusCode === 'terrain-prep') {
        status.color = 'yellow'
        status.letter = 'P'
      } else if (statusCode === 'live') {
        status.color = 'blue'
        status.letter = 'L'
      } else if (statusCode === 'archived') {
        status.color = 'smoke-blue'
        status.letter = 'A'
      } else if (statusCode === 'wx-hold') {
        status.color = 'red'
        status.letter = 'H'
      }
      return status
    },
  },
}
</script>

<style lang="scss" scoped>
.yellow {
  color: $yellow-primary;
}
.blue {
  color: $blue-primary;
}
.red {
  color: $red-primary;
}
.smoke-blue {
  color: $blue-smoke;
}
</style>
