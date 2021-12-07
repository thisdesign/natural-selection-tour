<template>
  <header class="header">
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
    <nav class="nav">
      <nuxt-link class="menu-link" to="events">The<br />Events</nuxt-link>
      <nuxt-link class="menu-link" to="riders">The<br />Riders</nuxt-link>
      <nuxt-link class="menu-link" to="streams">The<br />Streams</nuxt-link>
      <nuxt-link class="menu-link" to="shop">The<br />Shop</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  padding: 1rem;
  text-align: right;
  background: $solid-black;
  color: $white;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: right;
  align-items: center;
  .menu-link {
    margin: 0 60px;
    text-align: left;
    font-size: 20px;
    text-decoration: none;
    line-height: 1;
    &:after {
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
</style>
