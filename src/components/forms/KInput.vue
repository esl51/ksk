<template>
  <input
    :id="id"
    v-mask="mask"
    class="k-input"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :autofocus="autofocus"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
</template>

<script>
import { control } from '@/mixins/control'
export default {
  mixins: [
    control
  ],
  props: {
    value: { type: String, default: null },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: null },
    mask: { type: String, default: null }
  }
}
</script>
