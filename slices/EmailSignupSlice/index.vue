<template>
  <section class="section site-padding">
    <div class="text">
      <PrismicRichText :field="slice.primary.content" />
    </div>
    <div class="email">
      <element-email theme="light" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'
export default {
  name: 'EmailSignupSlice',
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
}
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.text {
  width: 100%;
}
.email {
  width: 100%;
  max-width: 300px;
  flex-grow: 0;
}
.title {
  margin-bottom: 2em;
}
</style>
