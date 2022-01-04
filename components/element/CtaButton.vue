<template>
  <a v-if="url !== ''" class="btn" :href="url" target="_blank">{{ title }}</a>
  <button v-else-if="type === 'button'" class="btn" @click="onClick">
    {{ title }}
  </button>
  <prismic-link v-else :field="link">{{ title }}</prismic-link>
</template>
<script>
export default {
  props: {
    link: {
      default: () => {},
      type: Object,
    },
    url: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    type: {
      default: '',
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
a,
button {
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
