<template>
  <button class="btn-slide-next">
    <svg viewBox="0 0 39 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.345 13.625C30.4817 11.2783 31.545 9.51833 32.535 8.345H0.470001V6.035H32.535C31.545 4.86167 30.4817 3.10167 29.345 0.754999H31.27C33.58 3.43167 36 5.41167 38.53 6.695V7.685C36 8.93167 33.58 10.9117 31.27 13.625H29.345Z"
        fill="white"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.btn-slide-next {
  background: black;
  border: 1px solid white;
  border-radius: 10rem;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  @include media-breakpoint-up(sm) {
    height: unset;
    width: 8rem;
    padding: 2.5rem 0;
  }
  @include media-breakpoint-up(md) {
    padding: 3rem 0;
    width: 10rem;
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 50%;
    @include media-breakpoint-up(sm) {
      width: 30%;
    }
  }
}
</style>
