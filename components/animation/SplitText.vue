<template>
  <div ref="text" class="split-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ea
    adipisci.
  </div>
</template>
<script>
import gsap, { SplitText } from 'gsap/all'
export default {
  name: 'SplitText',
  data() {
    return {
      splitText: null,
      timeline: null,
    }
  },
  mounted() {
    this.timeline = gsap.timeline({ paused: true })
    this.splitText = new SplitText(this.$refs.text, { type: 'lines, chars' })
    this.splitText.lines.forEach((line, index) => {
      gsap.set(line, { overflow: 'hidden', marginTop: '-30px' })
      const children = line.children
      gsap.set(children, {
        opacity: 0,
        y: '50%',
        rotate: '20deg',
        transformOrigin: '0% 100%',
      })
      this.timeline.to(
        children,
        {
          opacity: 1,
          y: '0',
          rotate: '0deg',
          duration: 0.4,
          stagger: 0.015,
        },
        (index + 1) * 0.2,
      )
    })
  },
  methods: {
    animate() {
      this.timeline.play()
    },
  },
}
</script>
<style lang="scss" scoped>
.split-text {
  font-size: 10vw;
  line-height: 1.2;
}
</style>
