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
      <span>{{ sidebarStatus }}</span>
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
}
</script>
