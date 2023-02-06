<template>
  <SliceSimulator v-slot="props" :state="state">
    <SliceZone v-bind="props" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@prismicio/slice-simulator-vue'
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceSimulator,
    SliceZone,
  },
  data() {
    return { state: {} }
  },
}
</script>
