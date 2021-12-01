<template>
  <section class="section">
    <div class="col col-left">
      <element-section-bar :number="sectionNumber" :title="sectionTitle" />
      <slot></slot>
    </div>
    <div class="col col-right">
      <element-section-bar
        :number="sidebarSectionNumber"
        :title="sidebarSectionTitle"
      />
      <div class="status" :class="statusColor">
        <span class="status-title">{{ statusTitle }}</span>
        <svg
          class="status-icon"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="currentColor" cx="50" cy="50" r="50" />
          <text
            x="50"
            y="50"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="450%"
            font-family="Natural-Selection"
          >
            P
          </text>
        </svg>
      </div>
      <slot name="footer"></slot>
      <!-- <prismic-rich-text :field="slice.primary.SidebarFooterText" /> -->
    </div>
  </section>
</template>

<script>
export default {
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
  },
  data() {
    return {
      activeClass: 'blue',
    }
  },
  computed: {
    statusTitle() {
      return this.sidebarStatus.replace('-', ' ')
    },
    statusColor() {
      if (this.sidebarStatus === 'terrain-prep') {
        return 'yellow'
      } else if (this.sidebarStatus === 'live') {
        return 'blue'
      } else if (this.sidebarStatus === 'archived') {
        return 'smoke-blue'
      } else {
        return ''
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
  @include media-breakpoint-up(sm) {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.status {
  margin: 0 auto auto 0;
}
.status-title {
  display: block;
  text-transform: capitalize;
  line-height: 1;
  font-size: 16vw;
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
.yellow {
  color: $yellow-primary;
}
.blue {
  color: $blue-primary;
}
.smoke-blue {
  color: $blue-smoke;
}
</style>
