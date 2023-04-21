<template>
  <div class="mail-cta" @click="open"></div>
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
    open () {
      this.$store.dispatch('ui/setOptions', {
        emailModal: true,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mail-cta {
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url('../../assets/svg/mail.svg');
  background-position: center;
  background-size: 60% auto;
  background-repeat: no-repeat;
  border: 1px solid white;
  border-radius: 20px;
  cursor: pointer;
}
.modal {
  width: 400px;
  height: 400px;
  background-color: yellow;
}
</style>
