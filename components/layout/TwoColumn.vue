<template>
  <section class="section site-padding">
    <div class="col col-left">
      <element-section-bar
        ref="mainBar"
        :number="sectionNumber"
        :title="sectionTitle"
      />
      <slot></slot>
    </div>
    <div :class="`col col-right ${shouldShow ? 'show' : ''}`">
      <div class="content-wrap">
        <div>
          <element-section-bar
            ref="sideBar"
            :number="sidebarSectionNumber"
            :title="sidebarSectionTitle"
          />
          <div v-if="sidebarStatus === 'video-loop'">
            <div class="video-wrapper">
              <video
                :src="sidebarMedia.url"
                autoplay
                muted
                playsinline
                loop
              ></video>
            </div>
          </div>
          <div
            v-if="
              sidebarStatusAvailable === true && sidebarStatus !== 'video-loop'
            "
            class="status"
            :class="getStatus(sidebarStatus).color"
          >
            <span class="status-title">{{ statusTitle }}</span>
            <element-status-icon class="status-icon" :status="sidebarStatus" />
          </div>
          <div class="middle-content">
            <PrismicRichText
              v-if="sidebarContent && sidebarContent.length > 0"
              :field="sidebarContent"
              class="sidebar-content"
            />
          </div>
        </div>
        <div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
          <element-cta-button
            v-if="sidebarCta && sidebarCtaLink"
            class="partners-cta-btn"
            :link="sidebarCtaLink"
            :title="sidebarCta"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GetStatus from '@/mixins/GetStatus'
export default {
  mixins: [GetStatus],
  props: {
    sectionNumber: {
      type: String,
      default: '',
    },
    sectionTitle: {
      type: String,
      default: '',
    },
    sidebarSectionNumber: {
      type: String,
      default: '',
    },
    sidebarSectionTitle: {
      type: String,
      default: '',
    },
    sidebarStatus: {
      type: String,
      default: '',
    },
    sidebarStatusAvailable: {
      type: Boolean,
      default: true,
    },
    sidebarCtaLink: {
      type: Object,
      default: () => {},
    },
    sidebarCta: {
      type: String,
      default: '',
    },
    sidebarContent: {
      type: Array,
      default: undefined,
    },
    sidebarMedia: {
      type: Object,
      default() {
        return {}
      },
    },
    shouldShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeClass: 'blue',
    }
  },
  computed: {
    statusTitle() {
      return this.sidebarStatus ? this.sidebarStatus.replace('-', ' ') : ''
    },
  },
  watch: {
    shouldShow() {
      if (this.$refs.mainBar) {
        this.$refs.mainBar.show()
      }
      if (this.$refs.sideBar) {
        setTimeout(() => {
          this.$refs.sideBar.show()
        }, 500)
      }
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
section {
  @include media-breakpoint-up(sm) {
    display: flex;
  }
}

.col {
  flex: 1 1 auto;
}
.col-left {
  @include media-breakpoint-up(sm) {
    width: 75%;
    padding-right: 2rem;
  }
}
.col-right {
  transition: opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s;
  opacity: 0;
  transform: translateY(5vh);
  padding-bottom: 5vw;
  &.show {
    opacity: 1;
    transform: translateY(0);
  }
  @include media-breakpoint-up(sm) {
    width: 25%;
  }
}

.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include media-breakpoint-up(sm) {
    height: 100%;
  }
}
.video-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 175%;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.status {
  margin: 0 0 3rem 0;
  @include media-breakpoint-up(sm) {
    // margin: 0 0 auto 0;
  }
}
.status-title {
  display: block;
  text-transform: capitalize;
  line-height: 1;
  font-size: 16vw;
  color: currentColor;
  margin-bottom: 22vw;
  @include media-breakpoint-up(sm) {
    font-size: 4vw;
    margin-bottom: 3vw;
    word-spacing: 10vw;
  }
}
.status-icon {
  margin-bottom: auto;
  width: 100%;
}
.footer {
  margin-top: 15px;
}
.sidebar-content {
  margin-bottom: 20px;
  &::v-deep em {
    font-style: italic;
  }
}
</style>
