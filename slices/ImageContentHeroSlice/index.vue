<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.15, 0.85] },
    }"
    class="section partners site-padding waypoint"
    :class="{ 'no-image': !slice.primary.Hero, active: waypointActive }"
  >
    <div class="content-col">
      <div v-if="slice.primary.Logo" class="partner-logo">
        <prismic-image :field="slice.primary.Logo" />
      </div>
      <div>
        <prismic-rich-text
          class="partners-title"
          :field="slice.primary.title"
        />
        <prismic-rich-text
          class="partners-description"
          :field="slice.primary.description"
        />
      </div>
      <element-cta-button
        v-if="slice.primary.CtaTitle"
        class="partners-cta-btn"
        :link="slice.primary.CtaLink"
        :title="slice.primary.CtaTitle"
      />
    </div>
    <div v-if="slice.primary.Hero" class="image-col">
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
import WaypointMixin from '@/mixins/Waypoint'
export default {
  name: 'ImageContentHeroSlice',
  mixins: [WaypointMixin],
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
    if (section) {
      const header = document.querySelector('header')
      if (header) {
        section.style.paddingTop = `${header.offsetHeight}px`
      }
    }
  },
  methods: {
    handleNext() {
      this.$router.push('/partners/' + this.slice.NextUid)
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
.partner-logo {
  img {
    width: 100%;
  }
}
.section {
  color: #fff;
  position: relative;
  @include media-breakpoint-up(sm) {
    min-height: 600px;
    height: 95vh;
  }
  &.no-image {
    height: auto;
    min-height: auto;
    .content-col {
      width: 100%;
      @include media-breakpoint-up(sm) {
        padding: 8rem 0;
      }
    }
    .partners-description {
      width: 100%;
      margin: 0;
      max-width: 800px;
      margin-top: 3rem;
    }
  }
}

.partner-logo,
.partners-title {
  @include media-breakpoint-up(sm) {
    width: 50%;
  }
  @include media-breakpoint-up(md) {
    width: calc(95vw / 4);
  }
}

.partners-description {
  margin: 0rem 0 2rem;
  @include media-breakpoint-up(sm) {
    margin: 0 0 14vh;
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
