<template>
  <div
    id="webgl-player"
    :key="`webgl${$route.params.uid}`"
    class="webgl"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
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
    <element-mouse-pointer
      :show-pointer="show"
      :line1="line1"
      :line2="line2"
      :line3="line3"
      :offset-y="offsetY"
    />
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
      offsetX: 0,
      offsetY: 0,
      show: false,
      name: '',
    }
  },
  computed: {
    line1() {
      const NAME = this.name.split(' ')
      return NAME[0] ? NAME[0] : ''
    },
    line2() {
      const NAME = this.name.split(' ')
      return NAME[1] ? NAME[1] : ''
    },
    line3() {
      const NAME = this.name.split(' ')
      return NAME[2] ? NAME[2] : ''
    },
  },
  mounted() {
    Viewer.init(document.getElementById('canvas'), this.viewerCallback)
    this.loading = true
    Viewer.laodModel('modelA', this.model).then(() => {
      this.loading = false
      this.$emit('model-loaded')
    })
  },
  methods: {
    handleMouseEnter() {
      this.calculateOffset()
      this.show = true
    },
    handleMouseMove() {
      this.calculateOffset()
    },
    handleMouseLeave() {
      this.show = false
    },
    calculateOffset() {
      const container = document.getElementById('webgl-player')
      const bounds = container.getBoundingClientRect()
      this.offsetY = bounds.top + window.scrollY - 80
      this.offsetX = 0
    },
    viewerCallback({ name, value }) {
      if (name === 'update') {
        this.name = value
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.webgl {
  height: 100%;
  cursor: none;
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
  z-index: 999;
}
</style>
