<template>
  <div>
    <div class="modal-outer">
      <div class="background" @click="close" />
      <div class="modal">
        <button class="close" @click="close"></button>
        <h3>Stay Informed</h3>
        <div class="modal-content">
          <p>
            Join the NST Fam and be the first to know about live event days,
            exclusive content, new products, behind the scenes and more.
          </p>
          <element-email theme="light" :modal="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'Modal',
  props: {
    theme: {
      type: String,
      default: "dark",
    }
  },
  methods: {
    close() {
      localStorage.setItem('ns_emo', 'true')
      this.$store.dispatch('ui/setOptions', {
        emailModal: false,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-outer {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
  cursor: pointer;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.close {
  position: absolute;
  top: 12px;
  right: 8px;
  width: 20px;
  height: 20px;
  display: block;
  background: transparent;
  padding: 0;
  border-radius: 50%;
  border: 1px solid black;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70%;
    width: 1px;
    background: black;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover {
    background: white;
    border: 1px solid black;
  }
}
.modal {
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 360px;
  background: black;
  border: 1px solid white;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.6));
  @media (max-width: 415px) {
    width: calc(100vw - 40px);
  }
  .modal-content {
    padding: 12px 14px;
  }
  h3 {
    background-color: rgb(255, 230, 0);
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: 500;
  }
  p {
    color: white;
    font-size: 13px;
    font-family: 'Sneak', sans-serif;
  }
}
</style>
