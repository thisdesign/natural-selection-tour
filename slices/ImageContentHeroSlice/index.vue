<template>
  <section class="section partners site-padding">
    <div class="content-col">
      <prismic-rich-text class="partners-title" :field="slice.primary.title" />
      <prismic-rich-text
        class="partners-description"
        :field="slice.primary.description"
      />
      <element-cta-button
        class="partners-cta-btn"
        :link="slice.primary.CtaLink"
        :title="slice.primary.CtaTitle"
      />
    </div>
    <div class="image-col">
      <div class="inner">
        <div class="image-wrapper">
          <prismic-image :field="slice.primary.Hero" />
        </div>
        <div @click="handleNext">
          <element-btn-slide-next v-if="slice.NextUid" class="next-btn" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageContentHeroSlice',
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
    const section = document.querySelector('.section.partners')
    const header = document.querySelector('header')
    section.style.paddingTop = `${header.offsetHeight}px`
  },
  methods: {
    handleNext() {
      this.$router.push('/partner/' + this.slice.NextUid)
    },
  },
}
</script>
<style lang="scss">
.section.partners {
  .partners-title {
    * {
      font-size: clamp(2rem, 3vw, 3vw);
      line-height: 1.2;
    }
  }
}
</style>
<style lang="scss" scoped>
.section {
  color: #fff;
  position: relative;
  @include media-breakpoint-up(sm) {
    min-height: 600px;
    height: 95vh;
  }
}

.partners-description {
  margin: 2rem 0;
  @include media-breakpoint-up(sm) {
    margin: 14vh 0;
    width: 50%;
  }
  @include media-breakpoint-up(md) {
    width: calc(95vw / 4);
  }
}
.content-col {
  position: relative;
  z-index: 1;
  padding: 3rem 0 4rem;
  @include media-breakpoint-up(sm) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    display: flex;
    width: 50%;
    height: 100%;
    min-width: 600px;
  }
}
.image-col {
  position: relative;
  @include media-breakpoint-up(sm) {
    height: 100%;
    width: calc(95vw / 4 * 3);
    right: 2.5vw;
    position: absolute;
    bottom: 0;
  }

  .next-btn {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 50%;
    transform: translateY(50%);
    @include media-breakpoint-up(sm) {
      bottom: 4rem;
      transform: none;
    }
  }
  .inner {
    width: 100%;
    height: 100%;
  }
  .image-wrapper {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    @include media-breakpoint-up(sm) {
      padding-top: 0;
      height: 80%;
      width: 90%;
      transform: translateX(-50%);
      left: 50%;
      bottom: 0;
      position: absolute;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
