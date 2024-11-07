<template>
  <div>
    <app-header />
    <div
      :class="`header-offset ${
        options.floatingHeader === false ? 'push-down' : ''
      }`"
    >
      <Nuxt />
    </div>
    <app-code />
    <app-footer />
    <element-modal v-if="showModal" />
    <element-mailCta v-if="!showModal" />
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'

if (process.client) {
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(SplitText)
}

export default {
  async middleware({ route, redirect, store, $prismic }) {
    await Promise.all([
      store.dispatch('globals/loadGlobals', $prismic),
      store.dispatch('riders/loadRiders', $prismic),
      store.dispatch('partners/loadPartners', $prismic),
    ])
    const DATA = store.state.globals.results.data
    if (
      DATA.redirect_active === true &&
      DATA.redirect_url.url &&
      DATA.redirect_url.url.length > 0
    ) {
      window.location.href = DATA.redirect_url.url
    }
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
    options() {
      return this.$store.state.ui.options
    },
    floatingHeader() {
      return this.$store.state.ui.options.floatingHeader
    },
    showModal() {
      return this.$store.state.ui.options.emailModal === true
    },
  },
  mounted() {
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
        window.location = this.globals.data.mediaKit.url
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-offset.push-down {
  padding-top: 110px;
  @include media-breakpoint-up(md) {
    padding-top: 145px;
  }
}
</style>
