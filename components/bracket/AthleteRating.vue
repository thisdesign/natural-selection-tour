<template>
  <div class="rating">
    <button class="open-ratings" @click="open = true">
      {{ run.average }}
    </button>
    <transition name="vt-fade" mode="out-in">
      <div v-if="open" class="rating-details">
        <element-btn-close class="close-btn" @click="open = false" />
        <span v-for="(scores, index) in run.scores" :key="index">
          {{ scores.judge }}_ {{ scores.score }}
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    run: {
      type: Object,
      default: () => {
        return {
          average: '',
          scores: [],
        }
      },
    },
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.close-btn {
  color: white;
  width: 10px;
  margin-top: 0.2rem;
  margin-right: 0.3rem;
  @include media-breakpoint-up(sm) {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    width: 15px;
  }
}
* {
  font-family: 'Sneak', sans-serif;
  font-size: 0.7rem;
  @include media-breakpoint-up(sm) {
    font-size: 0.8rem;
  }
  @include media-breakpoint-up(md) {
    font-size: 1rem;
  }
}
.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  background: rgba(41, 41, 41, 0.76);
  flex: 1 1 calc(100% / 3);
  max-width: 50%;
  button.open-ratings {
    background: transparent;
    padding: 0 0.2rem;
    border: none;
    height: 100%;
    width: 100%;
    color: white;
    &:focus {
      outline: none;
    }
  }
}
.rating-details {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  background: rgba(41, 41, 41, 1);
  span {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      border-right: 1px solid white;
    }
  }
}
</style>
