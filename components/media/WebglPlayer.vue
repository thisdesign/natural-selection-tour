<template>
  <div class="webgl">
    <div class="wrapper">
      <h2 v-if="loading" class="loading">Loading...</h2>
      <canvas
        id="canvas"
        ref="canvas"
        class="canvas"
        width="1400"
        height="1400"
      />
    </div>
  </div>
</template>

<script>
import Viewer from '@/scripts/3d/Viewer'
export default {
  name: 'WebglViewer',
  props: {
    model: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  watch: {
    model(newModel) {
      console.log('new model', newModel)
    },
  },
  mounted() {
    Viewer.init(this.$refs.canvas)
    console.log('model', this.items)
    if (this.model !== '') {
      this.loading = true
      Viewer.laodModel(this.model).then(() => (this.loading = false))
    }
  },
}
</script>

<style lang="scss" scoped>
.webgl {
  height: 100%;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 0;
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
