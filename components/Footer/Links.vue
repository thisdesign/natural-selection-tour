<template>
  <div>
    <ul v-for="(list, listIndex) in linkLists" :key="`linkList${listIndex}`">
      <li v-for="(item, index) in list" :key="`footerPrimary${index}`">
        <nuxt-link
          v-if="item.Link.link_type === 'Document'"
          :to="`${item.Link.type === 'page' ? '/' : '/partner/'}${
            item.Link.uid
          }`"
        >
          <prismic-rich-text
            :field="item.LinkLabel"
            :html-serializer="htmlSerializer"
          />
        </nuxt-link>
        <a
          v-if="item.Link.link_type === 'Web'"
          :href="item.Link.url"
          target="_blank"
        >
          <prismic-rich-text
            :field="item.LinkLabel"
            :html-serializer="htmlSerializer"
          />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FooterLinks',
  computed: {
    linkLists() {
      return [
        this.globals.data.FooterPrimaryLinks,
        this.globals.data.FooterSecondaryLinks,
      ]
    },
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
<style lang="scss" scoped>
ul {
  list-style: none;
  padding-left: 0;
  font-family: 'Sneak', sans-serif;
}
a {
  font-size: 12px;
  line-height: 1.1;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
