<template>
  <header class="header floating">
    <div
      v-if="globals.data.status_active && navOpen === false"
      class="status"
      :style="`background-color:${globals.data.status_background_color}; color:${globals.data.status_text_color};`"
    >
      <prismic-rich-text :field="globals.data.status_text" />
    </div>
    <div class="header-inner site-padding">
      <div class="nav-controls-wrapper">
        <nuxt-link to="/" class="logo">
          <prismic-image :field="logo" />
        </nuxt-link>
        <div class="mobile-buttons">
          <div class="shop-link">
            <a :href="globals.data.shop_link.url" target="_blank" class="link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1209_7906)">
                  <path
                    d="M5 13.25C5 16.145 7.355 18.5 10.25 18.5H19.5V16H10.25C8.7335 16 7.5 14.7665 7.5 13.25V12H19L22 3H2V5.5H5V13.25ZM18.5315 5.5L17.198 9.5H7.5V5.5H18.5315Z"
                    fill="white"
                  />
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    fill="white"
                  />
                  <path
                    d="M15 22C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20C14.4477 20 14 20.4477 14 21C14 21.5523 14.4477 22 15 22Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1209_7906">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
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
      </div>
      <div class="main-menu" :class="{ open: navOpen }">
        <div class="main-menu-inner">
          <nav class="nav" @mouseleave="handleMouseOut">
            <div ref="follower" class="follower"></div>
            <div
              v-for="(item, index) in globals.data.header.navigation"
              :key="`mainLink${index}`"
              :class="`menu-link ${
                item.primary.page_type === options.pageType ? 'active-page' : ''
              }`"
              :data-type="item.primary.page_type"
              @mouseenter="handleMouseOver"
            >
              <nuxt-link
                v-if="item.primary.link.link_type === 'Document'"
                :to="`${item.primary.link.type === 'page' ? '/' : '/partner/'}${
                  item.primary.link.uid
                }`"
              >
                <prismic-rich-text
                  :field="item.primary.label"
                  :html-serializer="htmlSerializer"
                />
              </nuxt-link>
              <div
                v-if="item.items && item.items.length > 0"
                class="child-links"
              >
                <nuxt-link
                  v-for="(child, cIndex) in item.items"
                  :key="`menu-link-${index}-${cIndex}`"
                  :to="`/${child.child_link.uid}`"
                  class="child-link"
                >
                  <prismic-rich-text
                    :field="child.child_label"
                    :html-serializer="htmlSerializer"
                  />
                </nuxt-link>
              </div>
            </div>
          </nav>
          <div class="nav-footer">
            <div class="nav-footer-links">
              <div
                v-for="(item, index) in mobileLinks"
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
    </div>
  </header>
</template>

<script>
import gsap from 'gsap/all'
export default {
  data() {
    return {
      navOpen: false,
      animating: false,
    }
  },
  computed: {
    globals() {
      return this.$store.state.globals.results
    },
    options() {
      return this.$store.state.ui.options
    },
    floatingHeader() {
      return this.$store.state.ui.options.floatingHeader
    },
    mobileLinks() {
      return this.globals.data.MobileSecondaryLinks
    },
    logo() {
      const item = this.globals.data.header.navigation.find(
        (item) => item.primary.page_type === this.options.pageType,
      )
      if (item) {
        return item.primary.section_logo
      }
      return this.globals.data.default_logo
    },
  },

  watch: {
    $route() {
      this.navOpen = false
      this.toggleNav(false)
      this.handleMouseOut()
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
    handleMouseOver(e) {
      if (window.innerWidth < 1024) {
        return
      }
      this.currentType = e.target.dataset.type
      if (this.animating === true) {
        return
      }
      this.animating = true
      this.animateTarget(e.target)
    },
    animateTarget(target) {
      const tl = gsap.timeline({
        paused: true,
        overwrite: 'auto',
        onComplete: () => {
          this.animating = false
          if (
            this.currentType !== target.dataset.type &&
            this.currentType !== ''
          ) {
            this.animateTarget(
              document.querySelector(
                `.menu-link[data-type='${this.currentType}']`,
              ),
            )
          }
        },
      })

      if (!this.currentItem) {
        const activeLink = document.querySelector('.active-page')
        const firstLink = document.querySelector('.menu-link')
        gsap.set(this.$refs.follower, {
          x: activeLink ? activeLink.offsetLeft : firstLink.offsetLeft,
        })
      } else {
        const prevChildList = this.currentItem.querySelector('.child-links')
        if (prevChildList) {
          prevChildList.style.pointerEvents = 'none'
          tl.to(
            prevChildList,
            {
              opacity: 0,
              overwrite: true,
              duration: 0.3,
            },
            0,
          )
          tl.to(
            this.$refs.follower,
            {
              height: this.currentItem.offsetHeight,
              duration: 0.3,
            },
            0,
          )
        }
      }
      this.currentItem = target
      tl.to(this.$refs.follower, {
        opacity: 1,
        x: target.offsetLeft,
        duration: 0.3,
      })
      let offset = 0
      const childList = target.querySelector('.child-links')
      if (childList) {
        childList.style.pointerEvents = 'auto'
        offset = childList.offsetHeight
      }
      tl.to(this.$refs.follower, {
        height: target.offsetHeight + offset,
        duration: 0.3,
      })
      if (childList) {
        tl.to(
          childList,
          {
            opacity: 1,
            duration: 0.3,
          },
          '-=.3',
        )
      }

      tl.play()
    },
    handleMouseOut() {
      if (this.currentItem) {
        const tl = gsap.timeline({ overwrite: true })
        const activeLink = document.querySelector('.active-page')
        const firstLink = document.querySelector('.menu-link')
        const childLinks = this.currentItem.querySelector('.child-links')
        if (childLinks) {
          childLinks.style.pointerEvents = 'none'
          tl.to(childLinks, { opacity: 0, duration: 0.3 }, 0)
          tl.to(
            this.$refs.follower,
            {
              height: this.currentItem.offsetHeight,
              duration: 0.3,
            },
            0,
          )
        }
        tl.to(this.$refs.follower, {
          opacity: 0,
          duration: 0.3,
          x: activeLink ? activeLink.offsetLeft : firstLink.offsetLeft,
          height: this.currentItem.offsetHeight,
        })
      }
      this.currentItem = undefined
      this.animating = false
      this.currentType = ''
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
.status {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &::v-deep p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

header {
  &.floating {
    position: fixed;
  }
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 40px;
  text-align: right;
  color: $white;
  z-index: 100;
  &:before {
    content: '';
    position: absolute;
    top: 18px;
    left: 20px;
    height: 82px;
    border-radius: 40px;
    width: calc(100% - 40px);
    background: rgba(21, 21, 21, 0.7);
    backdrop-filter: blur(10px);
  }
  @include media-breakpoint-up(md) {
    top: 20px;
    left: 40px;
    width: calc(100% - 80px);
    &:before {
      top: 15px;
      height: 88px;
    }
  }
}
.header-inner {
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
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
  @include media-breakpoint-up(md) {
    display: none;
  }
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
}
.nav-controls-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @include media-breakpoint-up(md) {
    // width: unset;
  }
}

.logo {
  position: relative;
  z-index: 100;
  display: block;
  height: 50px;
  img {
    height: 100%;
    width: auto;
  }
}

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 8rem 4rem 0rem;
  overflow-y: scroll;
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  transition: opacity 700ms, visibility 700ms, max-height 1000ms,
    background-color 300ms ease-out 300ms;
  @include media-breakpoint-up(md) {
    // background: transparent;
    position: absolute;
    top: 27px;
    visibility: visible;
    opacity: 1;
    height: unset;
    max-height: unset;
    overflow-y: unset;
    padding: 0;
    left: 130px;
    width: calc(100% - 260px);
  }
  @include media-breakpoint-up(lg) {
    top: 24px;
  }
  &.open {
    opacity: 1;
    max-height: 100vh;
    visibility: visible;
    background: rgba(0, 0, 0, 1);
    // position: absolute;
    .menu-link,
    .footer-link {
      opacity: 1;
    }
  }
  // &:after {
  //   content: '';
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: black;
  //   z-index: -1;
  //   @include media-breakpoint-up(md) {
  //     display: none;
  //   }
  // }
  .main-menu-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(85vh - 6rem);
    @include media-breakpoint-up(md) {
      height: 100%;
    }
  }
}
.menu-link,
.footer-link {
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-delay: 300ms;
  transition-duration: 500ms;
  @include media-breakpoint-up(md) {
    opacity: 1;
  }
}
nav {
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: left;
  @include media-breakpoint-up(md) {
    height: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: row;
  }
  .menu-link {
    position: relative;
    margin-bottom: clamp(1rem, 4vh, 3rem);
    @include media-breakpoint-up(md) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 60px;
      border-radius: 40px;
      margin-bottom: 0;
      margin-right: 30px;
    }
    @include media-breakpoint-up(lg) {
      width: 196px;
      height: 70px;
    }
    &.active-page {
      @include media-breakpoint-up(md) {
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  .menu-link a {
    font-size: 1.8rem;
    text-decoration: none;
    line-height: 1;
    position: relative;
    transition: 0.3s;
    z-index: 101;
    @include media-breakpoint-up(md) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-bottom: 0;
    }
    &:after {
      // @include media-breakpoint-up(md) {
      //   content: '';
      //   position: absolute;
      //   bottom: 0;
      //   left: 0;
      //   display: block;
      //   margin-bottom: -8px;
      //   width: 0;
      //   height: 1px;
      //   background: $white;
      //   transform: skew(-25deg);
      //   pointer-events: none;
      //   transition: width 350ms ease-in-out;
      // }
    }
    &:hover {
      opacity: 0.6;
      // &:after {
      //   width: 100%;
      // }
      // text-shadow: -0.05ex 0 currentColor, 0.05ex 0 currentColor;
    }
    &.nuxt-link-active {
      // text-shadow: -0.05ex 0 currentColor, 0.05ex 0 currentColor;
      // font-style: italic;
      // &:after {
      //   width: 10px;
      // }
    }
  }
}

.shop-link {
  position: relative;
  z-index: 100;
}

.mobile-buttons {
  position: relative;
  z-index: 101;
  display: flex;
  gap: 20px;
  transform: translateY(5px);
}

.child-links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  @include media-breakpoint-up(md) {
    margin-top: 0px;
    flex-direction: column;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    padding-top: 30px;
    margin-bottom: -5px;
    opacity: 0;
    pointer-events: none;
  }
}

nav .menu-link a.child-link {
  font-size: 20px;
  @include media-breakpoint-up(md) {
    padding: 5px 0;
    transition: 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
}

.follower {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0;
  @include media-breakpoint-up(md) {
    display: block;
    width: 150px;
    height: 60px;
    border-radius: 40px;
  }
  @include media-breakpoint-up(lg) {
    width: 196px;
    height: 70px;
  }
}

.nav-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @include media-breakpoint-up(md) {
    display: none;
  }
}
.nav-footer-links {
  text-align: left;
  .link {
    display: block;
    text-decoration: none;
    // font-weight: 700;
    font-size: 20px;
    margin-bottom: clamp(0.5rem, 3vh, 1.8rem);
  }
}
.nav-social {
  padding-bottom: 1.7rem;
  display: flex;
  align-items: center;
  a {
    display: block;
    width: 2rem;
    margin-left: 0.7rem;
    img {
      width: 100%;
    }
  }
}
</style>
