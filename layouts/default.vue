<template>
  <div>
    <app-header />
    <Nuxt />
    <app-code />
    <app-footer />
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
export default {
  async middleware({ store, $prismic }) {
    await Promise.all([
      store.dispatch('globals/loadGlobals', $prismic),
      store.dispatch('riders/loadRiders', $prismic),
      store.dispatch('partners/loadPartners', $prismic),
    ])
  },
  data() {
    return {
      keysPressed: [],
    }
  },
  computed: {
    globals() {
      return this.$store.state.globals.results
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin)
    window.addEventListener('keydown', this.onKeydown)
    window.addEventListener('keyup', this.onKeyup)
  },
  methods: {
    onKeydown(event) {
      if (!this.keysPressed.includes(event.key)) {
        this.keysPressed.push(event.key)
      }
      if (event.key === 'Escape') this.handleEscape()
      if (this.keysPressed[0] === 'Control' && this.keysPressed[1] === 'd') {
        this.handleCtrlD()
      }
    },
    onKeyup(event) {
      const keyIndex = this.keysPressed.indexOf(event.key)
      this.keysPressed.splice(keyIndex, 1)
    },
    handleEscape() {
      gsap.to(window, { duration: 1, scrollTo: { y: 0 } })
    },
    handleCtrlD() {
      if (this.globals.data.mediaKit) {
        console.log(this.globals.data.mediaKit.url)
      }
    },
  },
}
</script>
