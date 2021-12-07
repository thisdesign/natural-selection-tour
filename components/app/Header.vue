<template>
  <header class="header site-padding">
    <div class="nav-controls-wrapper">
      <nuxt-link to="/" class="logo">
        <svg
          width="73"
          height="65"
          viewBox="0 0 73 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.9929 57.8636L68.0418 50.9829H62.9639L68.1442 60.0221H22.3922L27.5725 50.9829H22.4946L14.7607 64.457H68.2101C68.9737 64.45 69.7224 64.2425 70.382 63.8551C71.0417 63.4677 71.5896 62.9138 71.9716 62.248C72.3536 61.5821 72.5565 60.8275 72.5602 60.0586C72.5639 59.2897 72.3684 58.5331 71.9929 57.8636Z"
            fill="white"
          />
          <path
            d="M48.9231 57.8119H54.001L40.1063 33.5674L37.5674 37.9949L48.9231 57.8119Z"
            fill="white"
          />
          <path
            d="M44.0205 22.303L41.4669 17.8755L27.5723 42.12H32.6648L44.0205 22.303Z"
            fill="white"
          />
          <path
            d="M31.121 13.4705L36.3013 4.4313L59.1956 44.3378H48.8203L51.3593 48.7579H66.8124L40.0841 2.17703C39.6963 1.51405 39.1433 0.964481 38.4798 0.582661C37.8164 0.200841 37.0655 0 36.3013 0C35.5371 0 34.7861 0.200841 34.1227 0.582661C33.4592 0.964481 32.9063 1.51405 32.5185 2.17703L28.582 9.04298L31.121 13.4705Z"
            fill="white"
          />
          <path
            d="M15.9676 44.3379L13.4287 48.7654H41.2033L38.6498 44.3379H15.9676Z"
            fill="white"
          />
          <path
            d="M4.42951 60.0218L27.3092 20.1227L32.4749 29.1324L35.0138 24.7123L27.3092 11.2529L0.588185 57.8633C0.203674 58.5338 0.000845875 59.2943 2.64001e-06 60.0686C-0.000840595 60.8428 0.200331 61.6038 0.58338 62.2751C0.966429 62.9465 1.51791 63.5048 2.18263 63.8941C2.84735 64.2835 3.60198 64.4901 4.37098 64.4935H12.2219L14.7609 60.0734L4.42951 60.0218Z"
            fill="white"
          />
        </svg>
      </nuxt-link>
      <button class="mobile-close-nav" @click="navOpen = !navOpen">
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="main-menu" :class="{ open: navOpen }">
      <nav class="nav">
        <nuxt-link class="menu-link" to="events">The<br />Events</nuxt-link>
        <nuxt-link class="menu-link" to="riders">The<br />Riders</nuxt-link>
        <nuxt-link class="menu-link" to="streams">The<br />Streams</nuxt-link>
        <nuxt-link class="menu-link" to="shop">The<br />Shop</nuxt-link>
      </nav>
      <div class="nav-footer">
        <div class="nav-footer-links">
          <nuxt-link class="link" to="faq">FAQ</nuxt-link>
          <nuxt-link class="link" to="partners">Partners</nuxt-link>
          <nuxt-link class="link" to="contact">Contact</nuxt-link>
        </div>
        <div class="nav-social">
          <a href="" target="_blank">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1971 0C8.14647 0 0 8.13956 0 18.1816C0 28.2237 8.14647 36.3633 18.1971 36.3633C28.2477 36.3633 36.3942 28.2237 36.3942 18.1816C36.3942 8.13956 28.2477 0 18.1971 0ZM23.8193 18.0318H20.3589V30.7822H15.1167V18.1147H12.2634V13.7148H15.0308C15.0308 12.413 15.0424 11.2581 15.0308 10.0508C15.0308 6.58612 17.6919 5.58104 20.0838 5.58104H24.1148H24.1162V9.92718C23.777 9.92863 22.4581 9.92718 21.7797 9.92718C21.6938 9.92718 20.2686 9.84863 20.2686 11.2173C20.2774 11.7759 20.2686 13.7017 20.2686 13.7017H24.1322L23.8193 18.0318Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="" target="_blank">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1724 18.1826C12.1724 14.8356 14.8875 12.1213 18.2374 12.1213C21.5872 12.1213 24.3038 14.8356 24.3038 18.1826C24.3038 21.5297 21.5872 24.244 18.2374 24.244C14.8875 24.244 12.1724 21.5297 12.1724 18.1826ZM8.89242 18.1826C8.89242 23.3392 13.0765 27.5198 18.2374 27.5198C23.3983 27.5198 27.5823 23.3392 27.5823 18.1826C27.5823 13.026 23.3983 8.84548 18.2374 8.84548C13.0765 8.84548 8.89242 13.026 8.89242 18.1826ZM25.7684 8.47601C25.7684 9.68043 26.7452 10.6579 27.9521 10.6579C29.1575 10.6579 30.1358 9.68043 30.1358 8.47601C30.1358 7.27159 29.159 6.29555 27.9521 6.29555C26.7452 6.29555 25.7684 7.27159 25.7684 8.47601ZM10.8854 32.9833C9.1108 32.9018 8.14704 32.608 7.50648 32.3578C6.65628 32.0276 6.05065 31.6334 5.413 30.9977C4.77681 30.3621 4.38082 29.7569 4.05181 28.9075C3.8014 28.2674 3.50587 27.303 3.4258 25.5313C3.337 23.6141 3.31953 23.0396 3.31953 18.1841C3.31953 13.3286 3.33845 12.754 3.4258 10.8368C3.50733 9.06367 3.80286 8.10217 4.05181 7.46069C4.38228 6.6112 4.77681 6.00608 5.413 5.36896C6.0492 4.7333 6.65482 4.33765 7.50648 4.0089C8.14704 3.75871 9.11225 3.46342 10.8854 3.38342C12.8042 3.29469 13.3793 3.27724 18.2374 3.27724C23.0969 3.27724 23.672 3.29614 25.5907 3.38342C27.3654 3.46488 28.3277 3.76017 28.9697 4.0089C29.8199 4.33765 30.4255 4.7333 31.0632 5.36896C31.6994 6.00463 32.0939 6.6112 32.4244 7.46069C32.6748 8.10072 32.9703 9.06513 33.0504 10.8368C33.1392 12.7555 33.1567 13.3286 33.1567 18.1841C33.1567 23.0381 33.1392 23.6141 33.0504 25.5313C32.9689 27.3045 32.6733 28.2674 32.4244 28.9075C32.0939 29.7569 31.6994 30.3621 31.0632 30.9977C30.427 31.6334 29.8199 32.0276 28.9697 32.3578C28.3291 32.608 27.3639 32.9033 25.5907 32.9833C23.672 33.072 23.0969 33.0895 18.2374 33.0895C13.3793 33.088 12.8028 33.0705 10.8854 32.9833ZM10.7355 0.11055C8.7978 0.199281 7.47591 0.506204 6.31853 0.955678C5.12184 1.4197 4.10713 2.04227 3.09533 3.05323C2.08207 4.06272 1.45898 5.07513 0.994572 6.27228C0.544722 7.42869 0.237543 8.74947 0.148738 10.6856C0.0599323 12.6246 0.0395508 13.2442 0.0395508 18.1826C0.0395508 23.121 0.0599323 23.7407 0.150194 25.6782C0.238999 27.6143 0.546178 28.9351 0.996028 30.0915C1.46044 31.2872 2.08207 32.3025 3.09533 33.312C4.10713 34.323 5.12038 34.9441 6.31853 35.4096C7.47736 35.859 8.7978 36.166 10.7355 36.2547C12.6776 36.3434 13.2963 36.3652 18.2374 36.3652C23.1814 36.3652 23.8001 36.3449 25.7392 36.2547C27.6769 36.166 28.9988 35.859 30.1562 35.4096C31.3529 34.9441 32.3676 34.323 33.3794 33.312C34.3912 32.3011 35.0128 31.2872 35.4787 30.0915C35.9286 28.9351 36.2372 27.6143 36.3245 25.6782C36.4133 23.7378 36.4337 23.1196 36.4337 18.1826C36.4337 13.2457 36.4133 12.6246 36.3245 10.687C36.2357 8.75093 35.9286 7.43014 35.4787 6.27373C35.0128 5.07804 34.3912 4.06418 33.3794 3.05323C32.3676 2.04227 31.3529 1.4197 30.1577 0.955678C28.9988 0.506204 27.6769 0.197827 25.7407 0.11055C23.8015 0.0218191 23.1814 0 18.2388 0C13.2948 0 12.6761 0.0203645 10.7355 0.11055Z"
                fill="white"
              />
            </svg>
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
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  width: 100%;
  text-align: right;
  color: $white;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @include media-breakpoint-up(sm) {
    // background: black;
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
.mobile-close-nav {
  width: 1rem;
  height: 1rem;
  position: relative;
  padding: 0;
  z-index: 100;
  border: none;
  background: transparent;
  transform: rotate(45deg);
  &:hover {
    transform: rotate(405deg);
  }
  &:focus {
    outline: none;
  }
  @include media-breakpoint-up(sm) {
    display: none;
  }
  span {
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    &:first-child {
      transform: translate(0px, 2px) rotate(90deg);
    }
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
  @include media-breakpoint-up(sm) {
    position: relative;
    width: unset;
    height: unset;
    padding: 0;
  }
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  @include media-breakpoint-up(sm) {
    height: 100%;
    text-align: left;
    align-items: center;
    flex-direction: row;
  }
  .menu-link {
    // margin: 0 60px;
    font-size: 1.8rem;
    text-decoration: none;
    line-height: 1;
    margin-bottom: 3rem;
    @include media-breakpoint-up(sm) {
      font-size: 20px;
      margin-left: 8vw;
      margin-bottom: 0;
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
