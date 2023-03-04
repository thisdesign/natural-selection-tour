<template>
  <section class="faq-panel">
    <div class="question" @click="handleClick">
      <div>
        <prismic-rich-text :field="question" />
      </div>
      <div v-if="active" class="icon">-</div>
      <div v-else class="icon">+</div>
    </div>
    <div v-if="active" class="answer">
      <prismic-rich-text :field="answer" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqPanel',
  props: {
    question: {
      type: Array,
      default: () => {
        return []
      },
    },
    answer: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    handleClick() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="scss">
.faq-panel {
  margin-bottom: 40px;
  color: $white;
  p,
  a {
    line-height: 1.2;
    strong {
      font-weight: bold;
    }
  }
  .question {
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    p,
    a {
      font-size: $font-large;
    }
    .icon {
      display: inline-block;
      line-height: 0.6;
      font-size: 100px;
      flex-grow: 0;
      margin-left: 5vw;
    }
  }
  .answer {
    p,
    a {
      font-size: clamp(18px, 2.5vw, 36px);
    }
  }
}
</style>
