<template>
  <div ref="sweeps">
    <div :id="`vsscript_${slice.primary.sweepstakes_id}`"></div>
  </div>
</template>

<script>
export default {
  name: 'SweepstakesSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  mounted() {
    if (this.$refs.sweeps) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src =
        'https://app.viralsweep.com/vsa-widget-51f6c6-201609.js?sid=' +
        this.slice.primary.sweepstakes_id
      this.$refs.sweeps.append(s)
    }
  },
}
</script>
