<template>
  <div>
    <svg
      :class="status.color"
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
        {{ status.letter }}
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Object,
      default: () => {
        return { color: 'yellow', letter: 'T' }
      },
    },
  },
  methods: {},
}
</script>
