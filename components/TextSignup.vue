<template>
  <div class="signup-form">
    <div class="st-signupform">
      <form
        :id="`st-join-web-form-${formID}`"
        class="st-signupform-content"
        action="https://app2.simpletexting.com/join/joinContact"
        method="POST"
      >
        <div class="step1-form">
          <div class="required">
            <label class="st-signupform__label" for="firstname">
              First Name

              <span class="required-mark">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.84534 5.66669H1.00004C0.631851 5.66669 0.333374 5.36821 0.333374 5.00002C0.333374 4.63183 0.631851 4.33335 1.00004 4.33335H3.84534L2.42269 1.86925C2.2386 1.55039 2.34785 1.14266 2.66671 0.958568C2.98557 0.774473 3.3933 0.883724 3.57739 1.20259L5.00004 3.66669L6.42269 1.20259C6.60679 0.883724 7.01451 0.774473 7.33337 0.958568C7.65224 1.14266 7.76149 1.55039 7.57739 1.86925L6.15474 4.33335H9.00004C9.36823 4.33335 9.66671 4.63183 9.66671 5.00002C9.66671 5.36821 9.36823 5.66669 9.00004 5.66669H6.15474L7.57739 8.13079C7.76149 8.44965 7.65224 8.85738 7.33337 9.04147C7.01451 9.22557 6.60679 9.11632 6.42269 8.79745L5.00004 6.33335L3.57739 8.79745C3.3933 9.11632 2.98557 9.22557 2.66671 9.04147C2.34785 8.85738 2.2386 8.44965 2.42269 8.13079L3.84534 5.66669Z"
                    fill="#E63655"
                  ></path>
                </svg>
              </span>
            </label>

            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="John"
              maxlength="1600"
              data-type="text"
            />
          </div>
          <div id="js-error-firstname" class="st-error-message"></div>

          <div class="required">
            <label class="st-signupform__label" for="phone">
              Phone

              <span class="required-mark">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.84534 5.66669H1.00004C0.631851 5.66669 0.333374 5.36821 0.333374 5.00002C0.333374 4.63183 0.631851 4.33335 1.00004 4.33335H3.84534L2.42269 1.86925C2.2386 1.55039 2.34785 1.14266 2.66671 0.958568C2.98557 0.774473 3.3933 0.883724 3.57739 1.20259L5.00004 3.66669L6.42269 1.20259C6.60679 0.883724 7.01451 0.774473 7.33337 0.958568C7.65224 1.14266 7.76149 1.55039 7.57739 1.86925L6.15474 4.33335H9.00004C9.36823 4.33335 9.66671 4.63183 9.66671 5.00002C9.66671 5.36821 9.36823 5.66669 9.00004 5.66669H6.15474L7.57739 8.13079C7.76149 8.44965 7.65224 8.85738 7.33337 9.04147C7.01451 9.22557 6.60679 9.11632 6.42269 8.79745L5.00004 6.33335L3.57739 8.79745C3.3933 9.11632 2.98557 9.22557 2.66671 9.04147C2.34785 8.85738 2.2386 8.44965 2.42269 8.13079L3.84534 5.66669Z"
                    fill="#E63655"
                  ></path>
                </svg>
              </span>
            </label>

            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="(XXX) XXX-XXXX"
              maxlength="1600"
              data-type="phone"
            />
          </div>
          <div id="js-error-phone" class="st-error-message"></div>

          <div class="st-terms-and-conditions">
            <div class="st-checkbox terms-checkbox">
              <input
                :id="`terms-agreed-checkbox-${formID}`"
                type="checkbox"
                name="terms-agreed"
              />
              <label
                class="st-terms-and-conditions-text"
                :for="`terms-agreed-checkbox-${formID}`"
              >
                Terms and conditions
              </label>
            </div>
            <div class="st-terms-and-conditions-caption st-font-caption">
              I agree to receive promotional messages sent via an autodialer,
              and this agreement isn’t a condition of any purchase. I also agree
              to the
              <a
                :href="`https://app2.simpletexting.com/web-forms/terms/${formID}`"
                target="_blank"
                >Terms of Service</a
              >
              and&nbsp;
              <a
                :href="`https://app2.simpletexting.com/web-forms/privacy-policy/${formID}`"
                target="_blank"
                >Privacy Policy</a
              >
              4 Msgs/Month. Msg &amp; Data rates may apply.
            </div>
            <div class="st-signupform-terms-agreed-error st-hidden">
              You have to agree on terms in order to proceed to the
              subscription.
            </div>
          </div>

          <div class="st-join-web-form-submit-button-box">
            <button id="subscribeNow" type="submit">Subscribe now</button>
            <p
              class="st-signupform-server-error-message st-color-red st-hidden"
            ></p>
          </div>
        </div>

        <div class="step2-confirmationText" style="display: none">
          <p>
            Thank you for signing up! You will receive messages from Natural
            Selection Tour.
          </p>
        </div>

        <!-- <footer>
          SMS marketing powered by
          <a
            href="https://www.simpletexting.com"
            title="SMS marketing - SimpleTexting.com"
            >SimpleTexting</a
          >
        </footer> -->
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { joinWebForm } from '@/scripts/SimpleTexting'
export default {
  data() {
    return {
      formID: '61d34ab945df49512708553b',
    }
  },
  mounted() {
    joinWebForm(
      window,
      document,
      this.formID,
      [
        {
          type: 'text',
          name: 'firstname',
          label: 'First name',
          required: true,
          maxLength: 10,
          format: null,
          options: null,
          value: '',
          placeholder: 'John',
        },
        {
          type: 'phone',
          name: 'phone',
          label: 'Phone',
          required: true,
          maxLength: 10,
          format: null,
          options: null,
          value: '',
          placeholder: '(XXX) XXX-XXXX',
        },
      ],
      'DuplicateContactPhoneException',
      'DuplicateContactEmailException',
      'CustomFieldsValidationException',
    )
  },
}
</script>

<style lang="scss" scoped>
@import 'https://app2.simpletexting.com/join-web-form/style-new.css';

.signup-form {
  --primary-color: black;

  --text-primary: rgba(0, 14, 36, 0.87);
  --text-caption: rgba(0, 27, 72, 0.54);
  --text-red-50: rgba(230, 54, 85);

  --controls-border-color: rgba(0, 27, 72, 0.32);
  --controls-border-radius: 8px;
  --button-border-radius: 10rem;
  --input-focus-box-shadow: 0px 0px 0px 2px rgba(35, 153, 240, 0.5);
  --input-focus-border-color: var(--primary-color);

  --card-box-shadow: 0px 2px 8px rgba(0, 27, 72, 0.13);

  --st-color-white: #fff;
  --st-color-primary: rgba(35, 153, 240);
  --st-color-text-disabled: rgba(0, 27, 72, 0.32);
}
/* Fonts and helpers */
.st-title {
  font-size: 1.25em;
  font-weight: bold;
  line-height: 1.5em;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.st-general-error {
  font-size: 1.25em;
  line-height: 1.5em;
  color: var(--text-red-50);
  margin-bottom: 8px;
  text-align: center;
}

/* Error icon */
.st-general-error img {
  width: 1.25em;
  height: 1.25em;
  margin-bottom: -0.2em;
}

.st-font-caption {
  font-size: 12px;
  color: var(--text-caption);
  line-height: 14px;
}

.st-font-caption a {
  color: var(--text-caption);
}

.st-hidden {
  display: none;
}

/* Sign-Up form */
@media (max-width: 246px) {
  .st-signupform {
    justify-content: flex-start;
  }
}
.st-signupform {
  display: flex;
  justify-content: center;
}
.st-signupform-content {
  max-width: 540px;
  box-sizing: border-box;
  padding: 32px;
  color: var(--text-primary);
  line-height: 1.5;
  background: white;
  box-shadow: var(--card-box-shadow);
  border-radius: var(--controls-border-radius);
}

.st-signupform__label {
  color: var(--text-primary);
  font-weight: bold;
  font-size: 14px;
  line-height: 2em;
}

.st-signupform__label .required-mark {
  color: var(--text-red-50);
}

.st-signupform input:focus,
.st-signupform select:focus,
.st-signupform textarea:focus,
.st-signupform button:focus {
  outline: none;
}

.st-signupform .st-error-message {
  margin-bottom: 4px;
  color: var(--text-red-50);
}

.st-checkbox-list {
  margin-bottom: 4px;
}
.st-checkbox {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 16px;
  line-height: 18px;
}

.st-field-option {
  margin-bottom: 8px;
}

.st-field-option:last-child {
  margin-bottom: 0;
}

.st-checkbox label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.st-signupform input[type='text'],
textarea {
  width: 100%;
  background-color: white;
  border: 1px solid var(--controls-border-color);
  border-radius: var(--controls-border-radius);
  box-sizing: border-box;
  padding: 8px;
  font-size: 14px;
  margin: 4px 0;
  outline: none;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
}

.st-signupform input[type='text']:focus,
textarea:focus {
  border-color: var(--input-focus-border-color);
  box-shadow: var(--input-focus-box-shadow);
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
}

.st-signupform input[type='checkbox'] {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: var(--st-color-white);
  border: 1px solid var(--st-color-text-disabled);
  box-shadow: inset 0 0 3px rgb(0 0 0 / 15%);
  position: relative;
  transition: 0.3s all;
  cursor: pointer;
  box-sizing: border-box;
}

.st-signupform input[type='checkbox']:disabled {
  cursor: default;
}

.st-signupform input[type='checkbox']:before {
  content: '';
  /* background-image: url('../join-web-form/st-checkbox.svg'); */
  background-size: 8px;
  display: block;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  transition: 0.3s all;
}
.st-signupform input[type='checkbox']:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--st-color-white);
  opacity: 0;
  transition: 0.3s all;
  top: 7px;
  left: 3px;
}
.st-signupform input[type='checkbox']:checked {
  background-color: var(--st-color-primary);
  border-color: var(--st-color-primary);
}
.st-signupform input[type='checkbox']:checked:before {
  opacity: 1;
  background-size: 12px;
}
.st-signupform input[type='checkbox']:indeterminate {
  background-color: var(--st-color-primary);
  border-color: var(--st-color-primary);
}
.st-signupform input[type='checkbox']:indeterminate:after {
  opacity: 1;
}

.st-signupform button[type='submit'] {
  display: block;
  width: 100%;
  border-radius: var(--button-border-radius);
  box-sizing: border-box;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  line-height: 20px;
  background-color: var(--primary-color);
  border: 0 none;
  color: white;
  margin: 30px 0 24px;
}

.st-signupform button[type='submit']:disabled {
  cursor: default;
  background-color: var(--st-color-text-disabled);
  color: white;
}

.st-signupform input.st-signupform-validation-error,
textarea.st-signupform-validation-error,
.st-signupform input.st-signupform-validation-error:focus,
textarea.st-signupform-validation-error:focus {
  border-color: #f44336;
}

.st-signupform textarea {
  padding-right: 24px;
  resize: vertical;
  min-height: 80px;
  max-height: 200px;
}

.terms-checkbox {
  margin-bottom: 4px;
}
.st-signupform .st-terms-and-conditions {
  margin-top: 22px;
}
.st-signupform .st-terms-and-conditions-text {
  color: var(--text-primary);
  font-size: 16px;
  line-height: 18px;
}

.st-signupform .st-terms-and-conditions-caption {
  margin-left: 24px;
}

.st-signupform-terms-agreed-error {
  margin: 4px 0 0 24px;
  color: var(--text-red-50);
}

.st-signupform-server-error-message {
  color: var(--text-red-50);
}

.st-signupform footer {
  font-size: 14px;
  color: var(--text-primary);
  text-align: center;
}

.st-signupform footer a {
  color: var(--primary-color);
}
</style>
