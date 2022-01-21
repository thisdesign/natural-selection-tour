<template>
  <li
    :class="`riderOuter js-rider rider-${index}`"
    :style="{ 'z-index': index }"
  >
    <img
      :src="`${data.fileName}`"
      :alt="data.name"
      :style="{
        transform: `rotate(${data.rotation}deg) translate(${data.xOffset}px, ${data.yOffset}px)`,
      }"
    />
  </li>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    forceShow: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.riderOuter {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vh;
  transform: translate3d(-50%, -50%, 0);
  opacity: 0;

  img {
    width: 100%;
  }
}
</style>
