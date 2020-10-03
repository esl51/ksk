<template>
  <div
    class="k-field"
    :class="{
      'k-field--invalid': !invalidState
    }"
  >
    <k-label v-if="label">
      {{ label }}
    </k-label>
    <slot />
    <div
      v-if="!invalidState && invalidMessage"
      class="k-field__error"
    >
      {{ invalidMessage }}
    </div>
  </div>
</template>

<script>
import KLabel from './KLabel'
export default {
  components: {
    KLabel
  },
  props: {
    label: { type: String, default: null },
    invalidState: { type: Boolean, default: true },
    invalidMessage: { type: String, default: null }
  }
}
</script>
