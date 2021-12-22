<template>
  <div class="webgl">
    <div class="wrapper">
      <div v-if="loading" class="loading">
        <video
          autoplay
          loop
          muted
          playsinline
          style="pointer-events: none"
          src="https://prismic-io.s3.amazonaws.com/naturalselectiontour/4ac4c888-8d8e-4d37-9f6b-aed34689a4f6_2021_1220_NaturalSelection_Web_AnimPreloader01.mp4"
        />
      </div>
      <canvas id="canvas" ref="canvas" class="canvas" />
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
  mounted() {
    Viewer.init(this.$refs.canvas)
    if (this.model !== '') {
      this.loading = true
      Viewer.laodModel(this.model).then(() => {
        this.loading = false
        this.$emit('model-loaded')
      })
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
  width: 138px;
  height: 100px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 0;
  z-index: 100;
  border-radius: 5px;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
