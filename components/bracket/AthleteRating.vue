<template>
  <div class="rating">
    <button class="open-ratings" @click="open = true">
      {{ results.average }}
    </button>
    <div v-if="open" class="rating-details">
      <element-btn-close class="close-btn" @click="open = false" />
      <span v-for="(result, index) in results.scores" :key="index">
        {{ result }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Object,
      default: () => {},
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
}
.rating {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid white;
  button.open-ratings {
    background: transparent;
    padding: 0;
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
