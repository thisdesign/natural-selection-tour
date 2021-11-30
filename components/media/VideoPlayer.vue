<template>
  <div class="video-player">
    <youtube
      :video-id="videoId"
      :player-vars="playerVars"
      width="100%"
      height="100%"
    ></youtube>
  </div>
</template>

<script>
import { Youtube, getIdFromUrl } from 'vue-youtube'

export default {
  components: {
    Youtube,
  },
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      videoId: '',
      playerVars: {
        controls: 0,
        autoplay: 1,
        mute: 1,
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
      },
    }
  },
  mounted() {
    this.videoId = getIdFromUrl(this.url)
  },
}
</script>

<style lang="scss">
.video-player {
  position: relative;
  width: 100%;
  padding-top: calc((9 / 16) * 100%);
  pointer-events: none;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
