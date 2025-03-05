<template>
  <div>
    <iframe
      id="sweeps-component"
      :src="`/sweeps.html?id=${slice.primary.sweepstakes_id}`"
    ></iframe>
    <style>
      #sweeps-component {
        width: 100%;
        height: {{ slice.primary.iframe_height }}px;
        @media (max-width: 767px) {
          height: {{ slice.primary.iframe_mobile_height }}px;
        }
      }
    </style>
  </div>
</template>

<script>
export default {
  name: 'FeedEmbedSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
