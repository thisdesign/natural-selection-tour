<template lang="pug">
  .section-bar
    <div class="section-title">{{number}}_{{title}}</div>
    <div  class="section-number">{{number}}</div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
.section-bar {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid $white;
  font-family: $monoFontFamily;
  text-transform: uppercase;
  color: $white;
  font-size: 12px;
  padding: 20px 0;
  margin-bottom: 3vw;
}

.section-title {
  display: flex;
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
