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
      <!-- <div class="status" :class="statusColor">
        <span class="status-title">{{ statusTitle }}</span>
        <element-status-icon class="status-icon" :status="sidebarStatus" />
      </div> -->
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
</style>
