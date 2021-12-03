<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-image :field="slice.primary.Hero" />
    <element-cta-button
      :link="slice.primary.CtaLink"
      :title="slice.primary.CtaTitle"
    />
    <button v-if="slice.NextUid" @click="handleNext">Next</button>
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
  methods: {
    handleNext() {
      console.log(this.slice)
      this.$router.push('/partner/' + this.slice.NextUid)
    },
  },
}
</script>

<style scoped>
.section {
  color: #fff;
  padding: 4em;
  text-align: center;
}
</style>
