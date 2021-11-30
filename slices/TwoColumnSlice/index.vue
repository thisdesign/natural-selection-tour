<template>
  <layout-two-column
    :section-number="slice.primary.SectionNumber"
    :section-title="slice.primary.SectionTitle"
    :sidebar-status="slice.primary.SidebarStatus"
    :sidebar-section-number="slice.primary.SidebarSectionNumber"
    :sidebar-section-title="slice.primary.SidebarSectionTitle"
  >
    <prismic-rich-text :field="slice.primary.title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-rich-text :field="slice.primary.Content" />
    <template #footer>
      <prismic-rich-text :field="slice.primary.SidebarFooterText" />
    </template>
  </layout-two-column>
</template>

<script>
export default {
  name: 'TwoColumnSlice',
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

<style scoped>
.section {
  color: white;
}
</style>
