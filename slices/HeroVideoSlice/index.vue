<template>
  <section class="section">
    <div class="video-outer">
      <media-video-player :url="slice.primary.VideoFull.url" />
    </div>
    <div class="video-footer">
      <div class="video-footer-logo">
        <prismic-image :field="slice.primary.Logo" />
      </div>
      <div class="video-footer-items">
        <div
          v-for="(item, i) in slice.items"
          :key="`video-footer-item-${i}`"
          class="video-footer-item"
        >
          <prismic-rich-text :field="item.TextTop" />
          <prismic-rich-text :field="item.TextBottom" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroVideoSlice',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss">
.section {
  p {
    margin-bottom: 0;
    font-size: 12px;
  }
}
</style>

<style lang="scss" scoped>
.section {
  color: white;
  position: relative;
}
.video-footer {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.video-footer-logo {
  width: 150px;
  margin-bottom: 20px;
  margin-left: 10px;
  img {
    width: 100%;
  }
}
.video-footer-items {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.video-footer-item {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  div {
    margin-bottom: 10px;
  }
}
</style>
