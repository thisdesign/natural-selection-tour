<template>
  <div ref="playerWrapper" class="video-player">
    <video ref="videoPlayer" :poster="options.poster" class="video-js"></video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {},
    )

    const playerWrapper = this.$refs.playerWrapper
    const videoPlayer = {
      elem: this.$refs.videoPlayer,
      get width() {
        return this.elem.offsetWidth
      },
      get height() {
        return this.elem.offsetHeight
      },
    }
    function setHeight() {
      setTimeout(() => {
        if (videoPlayer.height >= playerWrapper.offsetHeight) {
          playerWrapper.style.width = `${
            (playerWrapper.offsetHeight / 9) * 16
          }px`
        } else if (videoPlayer.height < playerWrapper.offsetHeight) {
          playerWrapper.style.removeProperty('width')
        }
      }, 100)
    }
    setHeight()
    window.addEventListener('resize', setHeight)
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
<style lang="scss">
.video-js {
  .vjs-big-play-button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .vjs-control-bar {
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    padding-bottom: 10px;
  }
  .vjs-progress-control {
    order: -1;
    width: 100%;
    margin-bottom: 10px;
    .vjs-progress-holder {
      margin: 0;
    }
  }
  .vjs-time-control {
    order: -1;
    margin-left: 0;
    margin-right: auto;
  }
  .vjs-play-progress.vjs-slider-bar {
    background-color: rgb(255, 235, 0);
    &:before {
      display: none;
    }
  }
  .vjs-play-control {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.video-player {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: height 200ms;
}
</style>
