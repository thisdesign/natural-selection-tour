<template>
  <header :class="`header site-padding ${floatingHeader ? 'floating' : ''}`">
    <div class="nav-controls-wrapper">
      <nuxt-link to="/" class="logo">
        <prismic-image :field="globals.data.Logo" />
      </nuxt-link>
      <button
        class="hamburger-btn"
        :class="{ open: navOpen }"
        @click="toggleNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="main-menu" :class="{ open: navOpen }">
      <div class="main-menu-inner">
        <nav class="nav">
          <div
            v-for="(item, index) in globals.data['main-links']"
            :key="`mainLink${index}`"
            :class="`menu-link ${item.Active ? 'active' : ''}`"
          >
            <nuxt-link
              v-if="item.link.link_type === 'Document'"
              :to="`${item.link.type === 'page' ? '/' : '/partner/'}${
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
                :to="`${item.Link.type === 'page' ? '/' : '/partner/'}${
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
    floatingHeader() {
      return this.$store.state.ui.options.floatingHeader
    },
  },
  watch: {
    $route() {
      this.navOpen = false
      this.toggleNav(false)
    },
  },
  methods: {
    toggleNav(toggle) {
      const body = document.querySelector('body')
      if (toggle) this.navOpen = !this.navOpen
      if (this.navOpen) {
        body.style.overflow = 'hidden'
        body.style.position = 'fixed'
        body.style.width = '100%'
      } else {
        body.style.removeProperty('overflow')
        body.style.removeProperty('position')
        body.style.removeProperty('width')
      }
    },
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
  &.floating {
    position: absolute;
  }
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
}
.hamburger-btn {
  width: 1.4rem;
  height: 1.4rem;
  position: relative;
  padding: 0;
  z-index: 100;
  border: none;
  background: transparent;
  overflow: hidden;
  &:focus {
    outline: none;
    background: transparent;
  }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    background: white;
    left: 0;
    transition: transform 300ms, opacity 500ms;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      bottom: 0;
    }
  }
  &.open {
    span {
      &:first-child {
        top: 50%;
        transform: rotate(-45deg);
        transform-origin: center;
      }
      &:nth-child(2) {
        top: 50%;
        opacity: 0;
        transform: translate(100%, -50%);
      }
      &:last-child {
        top: 50%;
        transform: rotate(45deg);
        transform-origin: center;
      }
    }
  }
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
  display: block;
  height: 73px;
}

.main-menu {
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 6rem 2rem 0rem;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  transition: opacity 700ms, visibility 700ms, max-height 1000ms;
  @include media-breakpoint-up(sm) {
    background: transparent;
    visibility: visible;
    opacity: 1;
    position: relative;
    width: unset;
    height: unset;
    max-height: unset;
    padding: 0;
  }
  @include media-breakpoint-up(sm) {
    width: 50%;
  }
  &.open {
    opacity: 1;
    max-height: 100vh;
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
  .main-menu-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(85vh - 6rem);
    @include media-breakpoint-up(sm) {
      height: 100%;
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
    // justify-content: space-between;
    text-align: left;
    align-items: center;
    flex-direction: row;
  }
  .menu-link {
    display: none;
    &.active {
      display: block;
    }
    margin-bottom: clamp(1rem, 4vh, 3rem);
    @include media-breakpoint-up(sm) {
      margin-bottom: 0;
      margin-right: 7vw;
    }
  }
  .menu-link a {
    font-size: 1.8rem;
    text-decoration: none;
    line-height: 1;
    position: relative;
    @include media-breakpoint-up(sm) {
      display: flex;
      font-size: 20px;
      margin-bottom: 0;
    }
    &:after {
      @include media-breakpoint-up(sm) {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        margin-bottom: -10px;
        width: 0;
        height: 3px;
        background: $white;
        transform: skew(-25deg);
        pointer-events: none;
        transition: width 300ms;
      }
    }
    &:hover {
      &:after {
        width: 10px;
      }
      // text-shadow: -0.05ex 0 currentColor, 0.05ex 0 currentColor;
    }
    &.nuxt-link-active {
      // text-shadow: -0.05ex 0 currentColor, 0.05ex 0 currentColor;
      font-style: italic;
      &:after {
        width: 10px;
        // opacity: 1;
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
    margin-bottom: clamp(0.5rem, 3vh, 1.8rem);
  }
}
.nav-social {
  padding-bottom: 1.7rem;
  a:first-child {
    margin-right: 0.5rem;
  }
}
</style>
