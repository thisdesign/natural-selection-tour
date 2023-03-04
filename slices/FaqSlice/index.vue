<template>
  <section class="faq-slice site-padding">
    <element-section-bar
      ref="bar"
      :number="slice.primary.sectionNumber"
      :title="slice.primary.sectionTitle"
    />
    <div v-for="(item, index) in slice.items" :key="`faq-item-${index}`">
      <panel :question="item.question" :answer="item.answer" />
    </div>
  </section>
</template>

<script>
import FaqPanel from './FaqPanel'
export default {
  name: 'FaqSlice',
  components: {
    panel: FaqPanel,
  },
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
.faq-slice {
  margin-bottom: 40px;
  color: $white;
}
</style>
