<template>
  <button class="close-modal-btn" @click="handleClick">
    <span></span><span></span>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.close-modal-btn {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 0.7rem;
  margin-right: 0.7rem;
  width: 1rem;
  height: 1rem;
  background: none;
  border: none;
  padding: 0;
  transform: rotate(45deg);
  &:focus {
    outline: none;
  }
  span {
    border-radius: 10px;
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;
    &:first-child {
      transform: rotate(90deg) translate(1px, 0);
    }
    &:last-child {
      transform: translate(0, -1px);
    }
  }
}
</style>
