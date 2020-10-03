<template>
  <div class="k-radio">
    <input
      :id="id"
      class="k-radio__input"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :checked="checked !== null && checked == value"
      @change="handleChange"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    >
    <label
      :for="id"
      class="k-radio__label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
import { control } from '@/mixins/control'
export default {
  mixins: [
    control
  ],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: { type: [String, Number], default: null },
    label: { type: String, default: null },
    checked: { type: [String, Number], default: null }
  },
  methods: {
    handleChange (event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
