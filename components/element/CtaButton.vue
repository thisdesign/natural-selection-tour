<template>
  <prismic-link :field="link">{{ title }}</prismic-link>
</template>
<script>
export default {
  props: {
    link: {
      default: () => {},
      type: Object,
    },
    title: {
      default: '',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  background: $white;
  color: $black;
  padding: 0.5rem 3rem;
  text-decoration: none;
  font-size: $font-large;
  border-radius: 55px;

  @media (max-width: 650px) {
    display: block;
    text-align: center;
  }
}
</style>
