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
      function onPlayerReady() {
        document.querySelector('.vjs-big-play-button').innerHTML = 'Play'
      },
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
    setTimeout(() => {
      if (this.player) {
        this.player.dispose()
      }
    }, 1000)
  },
}
</script>
<style lang="scss">
.video-js {
  &:hover {
    .vjs-big-play-button {
      background: black;
      color: white;
    }
  }
  .vjs-big-play-button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: unset;
    font-family: 'aktiv-grotesk', sans-serif;
    border: 1 px solid white;
    background: white;
    color: black;
    transition: 0.2s;
    border-radius: 10rem;
    font-size: clamp(2rem, 3.5vw, 3.5vw);
    padding: 4vw 10vw;
    width: calc(100% - 4rem);
    line-height: 1;

    @include media-breakpoint-up(sm) {
      padding: 2vw 10vw;
      width: unset;
    }
    @include media-breakpoint-up(md) {
      padding: 1vw 5vw;
    }
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
