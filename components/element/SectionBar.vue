<template lang="pug">
  .section-bar.font-sneak(ref='bar')
    <div class="section-title">{{number}}_{{title}}</div>
    <div class="section-number">{{number}}</div>
</template>

<script>
import gsap, { SplitText } from 'gsap/all'
export default {
  name: 'SectionBar',
  props: {
    title: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      timeline: null,
    }
  },
  mounted() {
    this.timeline = gsap.timeline({ paused: true })
    const titleSpitText = new SplitText(
      this.$refs.bar.querySelector('.section-title'),
      { type: 'chars' },
    )
    const numberSpitText = new SplitText(
      this.$refs.bar.querySelector('.section-number'),
      { type: 'chars' },
    )
    this.timeline.fromTo(
      titleSpitText.chars,
      { opacity: 0 },
      {
        duration: 0.2,
        opacity: 1,
        stagger: 0.05,
      },
      0.5,
    )
    this.timeline.fromTo(
      numberSpitText.chars,
      { opacity: 0 },
      {
        duration: 0.2,
        opacity: 1,
        stagger: 0.05,
      },
      1,
    )
  },
  methods: {
    show() {
      console.log('playing')
      this.timeline.play()
    },
  },
}
</script>

<style lang="scss" scoped>
.section-bar {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid $white;
  text-transform: uppercase;
  color: $white;
  font-size: 10px;
  padding: 20px 0;
  margin-bottom: 1vw;
}

.section-title {
  display: flex;
  align-items: center;
  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: $white;
    border-radius: 50%;
    margin-right: 20px;
  }
}
</style>
