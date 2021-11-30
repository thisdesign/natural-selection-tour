<template>
  <div class="section">
    <layout-two-column
      :section-number="slice.primary.SectionNumber"
      :section-title="slice.primary.SectionTitle"
      :sidebar-status="slice.primary.SidebarStatus"
      :sidebar-section-number="slice.primary.SidebarSectionNumber"
      :sidebar-section-title="slice.primary.SidebarSectionTitle"
    >
      <div class="countdown">
        <prismic-rich-text :field="slice.primary.title" />
        <span>{{ slice.primary.TargetDate }}</span>
        <element-cta-button
          :link="slice.primary.CtaLink"
          :title="slice.primary.CtaTitle"
        />
        <prismic-rich-text :field="slice.primary.FooterContent" />
      </div>
      <template #footer>
        <prismic-rich-text :field="slice.primary.SidebarFooterText" />
      </template>
    </layout-two-column>
  </div>
</template>

<script>
export default {
  name: 'CountdownSlice',
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

<style lang="scss" scoped>
.section {
  color: white;
}
</style>
