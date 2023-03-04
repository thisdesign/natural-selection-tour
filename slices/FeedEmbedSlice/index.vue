<template>
  <div ref="element" class="container">
    <div v-if="slice.primary.feedActive === true">
      <blockquote
        style="width: 100%"
        :cite="slice.primary.feedurl"
        class="caffeine-embed"
      ></blockquote>
    </div>
    <div class="content" v-else>
      <prismic-rich-text :field="slice.primary.inactiveDescription" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedEmbedSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  mounted() {
    const scrpt = document.createElement('script')
    scrpt.setAttribute('src', 'https://www.caffeine.tv/embed.js')
    this.$refs.element.appendChild(scrpt)
  },
}
</script>

<style scoped>
.container {
  padding: 3rem 0;
}
.content {
  text-align: center;
  color: white;
}
</style>
