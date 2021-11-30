<template>
  <div class="app">
    <slice-zone type="page" uid="riders" :slice-props="{ riders }" />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const riders = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'rider'),
    )
    if (riders) {
      const ridesResults = {}
      riders.results.forEach((element) => {
        ridesResults[element.id] = element
      })
      return { riders: ridesResults }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
