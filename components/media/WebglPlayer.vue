<template>
  <div class="webgl">
    <div class="wrapper">
      <canvas id="canvas" ref="canvas" class="canvas" />
    </div>
  </div>
</template>

<script>
import Viewer from '@/scripts/3d/Viewer'
export default {
  name: 'WebglViewer',
  mounted() {
    Viewer.init(this.$refs.canvas)
  },
}
</script>

<style lang="scss" scoped>
.webgl {
  height: 100%;
}
.wrapper {
  position: relative;
  padding-top: 100%;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 0;
}
</style>
