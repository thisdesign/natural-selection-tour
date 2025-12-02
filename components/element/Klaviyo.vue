<template>
  <div :class="`klaviyo-form-${formId}`"></div>
</template>

<script lang="js">
export default {
  name: 'Klaviyo',
  props: {
    theme: {
      type: String,
      default: "dark",
    },
    modal: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      formId: 'RRjuMS'
    }
  },
  mounted() {
    // Optional: If the form isn't rendering immediately in an SPA,
    // you might need to trigger Klaviyo's form rendering logic.
    // This is often not necessary if the script is loaded correctly.
    if (window._klForms) {
      window._klForms.push(this.formId);
    }
  },
  methods: {
    handleSubmit(e) {
      if(window.fbq) {
        window.fbq('track', 'CompleteRegistration');
      }
    }
  }
}
</script>

<style lang="scss">
.klaviyo-form-RRjuMS {
  h1 {
    text-align: left !important;
  }
  form {
    padding: 0px !important;
    margin-left: -5px;
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
}
// .light {
//   .email-container {
//     position: relative;
//     margin-bottom: 50px;
//   }

//   &.has-modal {
//     .email-container {
//       margin-bottom: 10px;
//     }
//   }
//   input.email {
//     border: 1px solid white;
//     padding: 6px 35px 6px 6px;
//     text-transform: uppercase;
//     color: white;
//     &::placeholder {
//       color: rgba(255, 255, 255, 0.75);
//       font-size: 10px;
//     }
//   }
//   .submit-button {
//     background-image: url('../../assets/svg/mail.svg');
//     background-color: transparent;
//     background-size: contain;
//   }
//   .submit-container {
//     position: absolute;
//     right: 6px;
//     top: 2px;
//   }
// }
// .title {
//   margin-bottom: 5px;
// }
// input.email {
//   background-color: transparent;
//   border: 0;
//   border-bottom: 1px solid black;
//   border-radius: 0;
//   padding: 3px 0;
//   width: 100%;
//   &::placeholder {
//     color: #666;
//   }
//   &:focus {
//     outline: 0;
//   }
// }
// .submit-container {
//   margin-left: 10px;
//   margin-bottom: 15px;
// }
// .submit-button {
//   cursor: pointer;
//   width: 24px;
//   height: 24px;
//   background: black;
//   border-radius: 0;
//   display: block;
//   outline: 0;
//   border: 0;
//   background-image: url('../../assets/svg/arrow.svg');
//   background-size: 16px 16px;
//   background-position: center;
//   background-repeat: no-repeat;
// }
// .email-container {
//   display: flex;
//   width: 100%;
// }
// .flex-grow {
//   flex-grow: 1;
// }
</style>
