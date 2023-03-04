<template>
  <div id="mc_embed_signup" :class="theme">
    <p class="title">Sign-up for updates</p>
    <form
      id="mc-embedded-subscribe-form"
      action="https://naturalselectiontour.us20.list-manage.com/subscribe/post?u=3294d1d5508027146b45591c0&amp;id=baca33db60&amp;f_id=00184ae9f0"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_self"
    >
      <div id="mc_embed_signup_scroll" class="email-container">
        <div class="mc-field-group flex-grow">
          <input
            id="mce-EMAIL"
            type="email"
            value=""
            placeholder="email address"
            name="EMAIL"
            class="required email"
            required
          />
        </div>
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input
            type="text"
            name="b_3294d1d5508027146b45591c0_baca33db60"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="submit-container">
          <input
            id="mc-embedded-subscribe"
            type="submit"
            name="subscribe"
            value=""
            class="submit-button button"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="js">
export default {
  name: 'Email',
  props: {
    theme: {
      type: String,
      default: "dark",
    }
  }
}
</script>

<style lang="scss" scoped>
.light {
  input.email {
    border: 1px solid white;
    padding: 3px 6px;
  }
}
.title {
  margin-bottom: 5px;
}
input.email {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid black;
  border-radius: 0;
  padding: 3px 0;
  width: 100%;
  &::placeholder {
    color: #666;
  }
  &:focus {
    outline: 0;
  }
}
.submit-container {
  margin-left: 10px;
  margin-bottom: 15px;
}
.submit-button {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: black;
  border-radius: 0;
  display: block;
  outline: 0;
  border: 0;
  background-image: url('../../assets/svg/arrow.svg');
  background-size: 16px 16px;
  background-position: center;
  background-repeat: no-repeat;
}
.email-container {
  display: flex;
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
</style>
