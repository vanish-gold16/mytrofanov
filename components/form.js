class FormValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }

    errorMessages = {
        valueMissing: () => 'this field is required',
        typeMismatch: () => 'enter a valid email',
        patternMismatch: ({title}) => title || 'pattern mismatch',
        tooShort: ({minLength}) => `minimum ${minLength} symbols`,
        tooLong: ({maxLength}) => `maximum ${maxLength} symbols`
    }

    constructor() {
        this.bindEvents()
    }

    bindEvents() {
        document.addEventListener(('blur'), (event) => {
            this.onBlur(event)
        }, {capture: true})
        document.addEventListener(('change'), (event) => {
            this.onChange(event)
        })
        document.addEventListener('submit', (event) => {
            this.onSubmit(event)
        })
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity

        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        })

        this.manageErrors(fieldControlElement, errorMessages)

        const isValid = errorMessages.length === 0

        fieldControlElement.ariaInvalid = !isValid

        return isValid
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = document.getElementById(
            fieldControlElement.getAttribute('aria-errormessage')
        )

        if (!fieldErrorsElement) {
            return
        }

        fieldErrorsElement.innerHTML = errorMessages
            .map((message) => `<span class='field-errors'>${message}</span>`)
            .join('')
    }

    onBlur(event) {
        const {target} = event

        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validateField(event.target)
        }
    }

    onChange(event) {
        const {target} = event
        const isRequired = target.required
        const isToggleType = ['checkbox'].includes(target.type)

        if (isToggleType && isRequired) {
            this.validateField(target)
        }
    }

    onSubmit(event) {
        let isFormValid = true
        let firstInvalidFieldControl = null

        const formElement = event.target
        const isFormElement = formElement.matches(this.selectors.form)

        if (!isFormElement) {
            return
        }

        const requiredControlElements = [...formElement.elements]
            .filter(({required}) => required)

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if (!isFieldValid) {
                isFormValid = false

                if (!firstInvalidFieldControl) {
                    firstInvalidFieldControl = element
                }
            }
        })

        if (!isFormValid) {
            event.preventDefault()
            firstInvalidFieldControl.focus()
        }
    }

}

new FormValidation()
