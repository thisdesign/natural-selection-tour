<template>
  <div
    ref="mousePointer"
    class="mouse-pointer"
    :class="{ active: showPointer }"
  >
    <div class="inner">
      <span class="pointer"></span>
      <div class="name-wrapper">
        <transition name="vt-fade" mode="out-in">
          <span v-if="line1" :key="line1 + line2 + line3" class="rider-name">
            <span>{{ line1 }}</span>
            <br />
            <span v-if="line2">{{ line2 }}</span>
            <br />
            <span v-if="line3">{{ line3 }}</span>
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offsetX: {
      type: Number,
      default: 0,
    },
    offsetY: {
      type: Number,
      default: 0,
    },
    showPointer: {
      type: Boolean,
      default: false,
    },
    line1: {
      type: String,
      default: null,
    },
    line2: {
      type: String,
      default: null,
    },
    line3: {
      type: String,
      default: null,
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.onMouseMove)
  },
  destroy() {
    window.removeEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    onMouseMove(event) {
      if (this.$refs.mousePointer) {
        this.$refs.mousePointer.style.transform = `translate(${
          event.pageX
        }px, ${event.pageY - this.offsetY}px)`

        // this.$refs.mousePointer.style.transform = `translate(${
        //   event.pageX + this.offsetX
        // }px, ${event.pageY + this.offsetY}px)`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.mouse-pointer {
  position: fixed;
  z-index: 1000;
  cursor: none;
  pointer-events: none;
  top: -0.5rem;
  left: -0.5rem;
  opacity: 0;
  transition: opacity 300ms, transform 150ms ease-out;
  min-width: max-content;
  &.active {
    opacity: 1;
  }
  * {
    cursor: none;
    pointer-events: none;
  }
  .inner {
    display: flex;
    align-items: flex-start;
  }
  .pointer {
    background: white;
    width: 1rem;
    border-radius: 1rem;
    height: 1rem;
    margin-right: 1rem;
    display: block;
  }
  .name-wrapper {
    flex: 1 1 calc(100% - 2rem);
    position: relative;
  }
  .rider-name {
    font-family: 'Natural-Selection', sans-serif;
    color: white;
    line-height: 0.8;
    font-size: 2vw;
    display: table-caption;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    white-space: nowrap;
  }
}
</style>
