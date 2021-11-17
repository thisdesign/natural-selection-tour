<template lang="pug">
  .section-bar
    <div>{{title}}</div>
    <div>{{number}}</div>
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
