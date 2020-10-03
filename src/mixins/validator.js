export const validator = {
  methods: {
    validate (value, rules) {
      let result = true
      let message = 'Неверное значение'
      const preparedValue = value !== null ? value.toString().trim() : ''
      rules.forEach(rule => {
        if (result) {
          switch (rule) {
            case 'required':
              if (!preparedValue.length > 0) {
                result = false
                message = 'Обязательное поле'
              }
              break

            case 'name':
              if (!/^[А-я\s-]*$/.test(preparedValue)) {
                result = false
                message = 'Допустимы только кириллица, пробел и тире'
              }
              break

            case 'phone':
              if (!/^[0-9]*$/.test(preparedValue)) {
                result = false
                message = 'Допустимы только цифры'
              }
              break
          }
        }
      })
      return result === true ? result : message
    },
    validateObject (rulesAttr, errorsAttr) {
      this[errorsAttr] = {}
      Object.keys(this[rulesAttr]).forEach(attr => {
        const result = this.validate(this[attr], this[rulesAttr][attr])
        if (result !== true) {
          this[errorsAttr][attr] = result
        }
      })
      return Object.keys(this[errorsAttr]).length === 0
    }
  }
}
