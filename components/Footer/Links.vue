<template>
  <div>
    <ul>
      <li><nuxt-link to="">About</nuxt-link></li>
      <li><nuxt-link to="/events">Events</nuxt-link></li>
      <li><nuxt-link to="/riders">Riders</nuxt-link></li>
      <li><nuxt-link to="">Streams</nuxt-link></li>
      <li><nuxt-link to="">SHOP</nuxt-link></li>
      <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
    </ul>
    <ul>
      <li><nuxt-link to="/partners">Partners</nuxt-link></li>
      <li><nuxt-link to="/randomizer">RANDOMIZER</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </div>
</template>
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
