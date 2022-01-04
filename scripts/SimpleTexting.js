/* eslint-disable */
export function joinWebForm(
  win,
  doc,
  webFormId,
  formFields,
  DUPLICATE_PHONE_EXCEPTION,
  DUPLICATE_EMAIL_EXCEPTION,
  CUSTOM_FIELDS_VALIDATION_EXCEPTION,
) {
  const XHR =
    'onload' in new win.XMLHttpRequest()
      ? win.XMLHttpRequest
      : win.XDomainRequest

  let form
  let formServerErrorMessage
  let formTermsAgreedError
  let submitButton
  const fieldErrorClassName = 'st-signupform-validation-error'

  function setServerErrorMessage(message) {
    formServerErrorMessage.innerText = message

    if (message) {
      formServerErrorMessage.classList.add('st-hidden')
    } else {
      formServerErrorMessage.classList.remove('st-hidden')
    }
  }

  function isTermsAgreedAccepted() {
    return form.querySelector('input[name="terms-agreed"]').checked
  }
  function showTermsAgreedError() {
    submitButton.disabled = false
    formTermsAgreedError.classList.remove('st-hidden')
  }
  function hideTermsAgreedError() {
    formTermsAgreedError.classList.add('st-hidden')
  }

  function clearFormErrors() {
    const fields = form.querySelectorAll(`.${fieldErrorClassName}`)

    fields.forEach(function (field) {
      field.classList.remove(fieldErrorClassName)
      const fieldError = form.querySelector(`#js-error-${field.name}`)
      fieldError.innerText = ''
    })

    setServerErrorMessage('')
    hideTermsAgreedError()
  }

  function collectFormData() {
    const formData = new FormData(form)

    const data = {
      webFormId,
      fieldValues: {},
      listIds: [],
    }

    formData.forEach(function (value, name) {
      if (name === 'list') {
        data.listIds.push(value)
      } else if (name === 'phone') {
        data.fieldValues[name] = value.replace(/\D/g, '')
      } else if (!['terms-agreed', 'webFormId', 'country'].includes(name)) {
        data.fieldValues[name] = value
      }
    })

    return data
  }

  function convertServerErrorMessage(fieldName, errorMessage) {
    const field = formFields.find((formField) => formField.name === fieldName)

    if (errorMessage === 'Required field value is empty') {
      return `${field.label} is required`
    } else {
      if (field.type === 'phone') {
        return `${field.label} is required in (XXX) XXX-XXXX format`
      } else if (field.type === 'date') {
        return `${field.label} is required in MM/DD/YYYY format`
      } else if (field.type === 'zipCode') {
        if (field.format === 'US') {
          return `${field.label} is required in XXXXX format`
        } else {
          return `${field.label} is required in XXX-XXX format`
        }
      } else if (field.type === 'url') {
        return `${field.label} is required in http(s)://xxxxxx.xx format`
      } else if (field.type === 'gender') {
        return `${field.label} is required in M, m, F, f, Male, Female, male, female format`
      } else if (field.type === 'number') {
        return `${field.label} is required in number format`
      } else if (field.name === 'birthday') {
        return `${field.label} is required in MM/DD/YYYY format`
      }

      return errorMessage
    }
  }

  function parseServerValidationError(response) {
    let results = []

    try {
      const error = win.JSON.parse(response)

      if (error.code === DUPLICATE_PHONE_EXCEPTION) {
        results = [
          {
            fieldName: 'phone',
            errorMessage: 'Phone number already exists.',
          },
        ]
      } else if (error.code === DUPLICATE_EMAIL_EXCEPTION) {
        results = [
          {
            fieldName: 'email',
            errorMessage: 'Email already exists.',
          },
        ]
      } else if (error.code === CUSTOM_FIELDS_VALIDATION_EXCEPTION) {
        results = Object.entries(error.reasons).map(([key, value]) => ({
          fieldName: key,
          errorMessage: convertServerErrorMessage(key, value),
        }))
      } else {
        results = [
          {
            fieldName: error.invalidValueName,
            errorMessage: convertServerErrorMessage(key, error.reason),
          },
        ]
      }
    } catch (error) {
      console.log('parseServerValidationError', error)
      results = [
        {
          fieldName: '',
          errorMessage: 'Validation error.',
        },
      ]
    }

    return results
  }

  function handleLoadForm() {
    if (this.status === 200) {
      const formData = new FormData(form)
      const confirmationTextEl = form.querySelector('.step2-confirmationText')
      confirmationTextEl.innerText = confirmationTextEl.innerText.replace(
        '%%phone%%',
        formData.get('phone'),
      )

      form.querySelector('.step1-form').style.display = 'none'
      confirmationTextEl.style.display = 'block'

      form.reset()
    } else if (this.status === 418) {
      submitButton.disabled = false
      const validations = parseServerValidationError(this.responseText)

      if (validations.length > 0) {
        if (validations[0].fieldName) {
          validations.forEach((validation) => {
            const fields = form.querySelectorAll(
              `input[name="${validation.fieldName}"], textarea[name="${validation.fieldName}"]`,
            )
            fields.forEach((field) => {
              field.classList.add(fieldErrorClassName)
            })
            const fieldError = form.querySelector(
              `#js-error-${validation.fieldName}`,
            )
            fieldError.innerText = validation.errorMessage
          })
        } else {
          setServerErrorMessage(validations[0].errorMessage)
        }
      } else {
        setServerErrorMessage('Internal Error. Please, try later.')
      }
    } else {
      submitButton.disabled = false
      setServerErrorMessage('Internal Error. Please, try later.')
    }
  }

  function handleErrorForm() {
    submitButton.disabled = false
    setServerErrorMessage('Internal Error. Please, try later.')
  }

  function sendForm() {
    const data = collectFormData()
    const url = `${form.action}?r=${Date.now()}`
    const request = new XHR()

    request.open(form.method, url)

    request.onload = handleLoadForm
    request.onerror = handleErrorForm
    request.ontimeout = handleErrorForm

    try {
      request.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8',
      )
    } catch (_) {
      /* ignore if we can't set headers */
    }

    request.send(win.JSON.stringify(data))
  }

  function handleSubmitForm(event) {
    event.preventDefault()

    submitButton.disabled = true
    try {
      clearFormErrors()

      if (!isTermsAgreedAccepted()) {
        showTermsAgreedError()
      } else {
        sendForm()
      }
    } catch (e) {
      console.error(e)
      setServerErrorMessage('Internal Error. Please, try later.')
      submitButton.disabled = false
    }
  }

  function formatPhone(value) {
    const numbers = value.replace(/\D/g, '')
    const firstPart = numbers.substring(0, 3)
    const secondPart = numbers.substring(3, 6)
    const thirdPart = numbers.substring(6, 10)
    let result = ''

    if (firstPart) {
      result += `(${firstPart}`
    }

    if (secondPart) {
      result += `) ${secondPart}`
    }

    if (thirdPart) {
      result += `-${thirdPart}`
    }

    return result
  }

  function handleChangePhoneField(event) {
    const field = event.currentTarget
    field.value = formatPhone(field.value)
  }

  function handleChangeDateField(event) {
    const field = event.currentTarget
    const numbers = field.value.replace(/\D/g, '')
    const month = numbers.substr(0, 2)
    const day = numbers.substr(2, 2)
    const year = numbers.substr(4, 4)
    field.value = `${month}${day ? `/${day}` : ''}${year ? `/${year}` : ''}`
  }

  function handleChangeZipCodeField(event) {
    const field = event.currentTarget
    field.value = field.value.replace(/\D/g, '').substr(0, 5)
  }

  function handleChangePostalCodeField(event) {
    const field = event.currentTarget
    const numbers = field.value.replace(/([^a-zA-Z0-9])/g, '')
    const code1 = numbers.substr(0, 3)
    const code2 = numbers.substr(3, 3)
    field.value = `${code1}${code2 ? `-${code2}` : ''}`
  }

  function handleChangeNumberField(event) {
    const field = event.currentTarget
    field.value = field.value.replace(/[^0-9,\.]/g, '')
  }

  function handleLoad() {
    form = doc.querySelector(`#st-join-web-form-${webFormId}`)
    form.addEventListener('submit', handleSubmitForm)

    formServerErrorMessage = form.querySelector(
      '.st-signupform-server-error-message',
    )
    formTermsAgreedError = form.querySelector(
      '.st-signupform-terms-agreed-error',
    )
    submitButton = form.querySelector('#subscribeNow')

    const phoneFields = form.querySelectorAll('input[data-type="phone"]')
    phoneFields.forEach(function (field) {
      field.addEventListener('input', handleChangePhoneField)
    })

    const dateFields = form.querySelectorAll('input[data-type="date"]')
    dateFields.forEach(function (field) {
      field.addEventListener('input', handleChangeDateField)
    })

    const postalCodeFields = form.querySelectorAll(
      'input[data-type="zipCode"][data-format="CA"]',
    )
    postalCodeFields.forEach(function (field) {
      field.addEventListener('input', handleChangePostalCodeField)
    })

    const zipCodeFields = form.querySelectorAll(
      'input[data-type="zipCode"][data-format="US"]',
    )
    zipCodeFields.forEach(function (field) {
      field.addEventListener('input', handleChangeZipCodeField)
    })

    const numberFields = form.querySelectorAll('input[data-type="number"]')
    numberFields.forEach(function (field) {
      field.addEventListener('input', handleChangeNumberField)
    })
  }

  handleLoad()
}
