<template>
  <header class="header site-padding">
    <div class="nav-controls-wrapper">
      <nuxt-link to="/" class="logo">
        <prismic-image :field="globals.data.Logo" />
      </nuxt-link>
      <button class="close-btn" @click="navOpen = !navOpen">
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="main-menu" :class="{ open: navOpen }">
      <nav class="nav">
        <div
          v-for="(item, index) in globals.data['main-links']"
          :key="`mainLink${index}`"
          class="menu-link"
        >
          <nuxt-link
            v-if="item.link.link_type === 'Document'"
            :to="`${item.link.type === 'page' ? '' : 'partner/'}${
              item.link.uid
            }`"
          >
            <prismic-rich-text
              :field="item.label"
              :html-serializer="htmlSerializer"
            />
          </nuxt-link>
          <a
            v-if="item.link.link_type === 'Web'"
            :href="item.link.url"
            target="_blank"
          >
            <prismic-rich-text
              :field="item.label"
              :html-serializer="htmlSerializer"
            />
          </a>
        </div>
      </nav>
      <div class="nav-footer">
        <div class="nav-footer-links">
          <div
            v-for="(item, index) in globals.data.MobileSecondaryLinks"
            :key="`mobileSecondary${index}`"
            class="footer-link"
          >
            <nuxt-link
              v-if="item.Link.link_type === 'Document'"
              :to="`${item.Link.type === 'page' ? '' : 'partner/'}${
                item.Link.uid
              }`"
              class="link"
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
              class="link"
            >
              <prismic-rich-text
                :field="item.LinkLabel"
                :html-serializer="htmlSerializer"
              />
            </a>
          </div>
        </div>
        <div class="nav-social">
          <a
            v-for="(item, index) in globals.data.SocialLinks"
            :key="`headerSocialLink${index}`"
            :href="item.Link.url"
            target="_blank"
          >
            <prismic-image :field="item.IconAlt" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    }
  },
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

<style lang="scss" scoped>
header {
  position: absolute;
  width: 100%;
  text-align: right;
  color: $white;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @include media-breakpoint-up(sm) {
    // background: black;
  }
}
.close-btn {
  @include media-breakpoint-up(sm) {
    display: none;
  }
}
.nav-controls-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @include media-breakpoint-up(sm) {
    width: unset;
  }
}

.logo {
  position: relative;
  z-index: 100;
}

.main-menu {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 6rem 2rem 0rem;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 600ms, visibility 600ms;
  @include media-breakpoint-up(sm) {
    background: transparent;
    visibility: visible;
    opacity: 1;
    position: relative;
    width: unset;
    height: unset;
    padding: 0;
  }
  @include media-breakpoint-up(sm) {
    width: 50%;
  }
  &.open {
    opacity: 1;
    visibility: visible;
  }
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: black;
    z-index: -1;
    @include media-breakpoint-up(sm) {
      display: none;
    }
  }
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  @include media-breakpoint-up(sm) {
    height: 100%;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    flex-direction: row;
  }
  .menu-link {
    margin-bottom: 3rem;
  }
  .menu-link a {
    // margin: 0 60px;
    font-size: 1.8rem;
    text-decoration: none;
    line-height: 1;
    @include media-breakpoint-up(sm) {
      font-size: 20px;
      margin-bottom: 0;
    }
    @include media-breakpoint-up(md) {
      margin-right: 7vw;
    }
    &:after {
      @include media-breakpoint-up(sm) {
        content: '';
        display: block;
        margin-top: 5px;
        width: 8px;
        height: 3px;
        background: $white;
        transform: skew(-25deg);
        opacity: 0;
        pointer-events: none;
      }
    }
    &.nuxt-link-active,
    &:hover {
      font-weight: bold;
      font-style: italic;
      &:after {
        opacity: 1;
      }
    }
  }
}

.nav-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @include media-breakpoint-up(sm) {
    display: none;
  }
}
.nav-footer-links {
  text-align: left;
  .link {
    display: block;
    text-decoration: none;
    // font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1.8rem;
  }
}
.nav-social {
  padding-bottom: 1.7rem;
  a:first-child {
    margin-right: 0.5rem;
  }
}
</style>
