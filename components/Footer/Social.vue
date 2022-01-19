<template>
  <div class="social footer-social font-sneak">
    <div>
      <prismic-rich-text
        :field="globals.data.SocialTitle"
        :html-serializer="htmlSerializer"
      />
    </div>
    <div class="footer-icons">
      <a
        v-for="(item, index) in globals.data.SocialLinks"
        :key="`headerSocialLink${index}`"
        :href="item.Link.url"
        target="_blank"
      >
        <prismic-image :field="item.Icon" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterSocial',
  computed: {
    globals() {
      return this.$store.state.globals.results
    },
  },
  methods: {
    htmlSerializer(type, element, content, children) {
      // If element is a list item,
      if (type === 'paragraph') {
        // return some customized HTML.
        return `<span>${children.join('')}</span>`
      }
      /// Otherwise, return null.
      return null
    },
  },
}
</script>
<style lang="scss">
.footer-social {
  span {
    font-size: 12px;
    text-transform: uppercase;
  }
}
</style>
<style lang="scss" scoped>
.social {
  div {
    margin-bottom: 5px;
  }
  .footer-icons {
    display: flex;
    align-items: center;
  }
  a {
    padding-right: 4px;
    display: block;
    width: 2.3rem;
    margin-right: 0.2rem;
    img {
      width: 100%;
    }
  }
}
</style>
