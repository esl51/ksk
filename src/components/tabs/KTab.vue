<template>
  <li
    class="k-tab"
    :class="{
      'k-tab--active': isActive,
    }"
  >
    <button
      class="k-tab__toggle"
      @click="activate"
    >
      {{ title }}
    </button>
    <div class="k-tab__body">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false },
    title: { type: String, required: true }
  },
  data: () => ({
    isActive: false
  }),
  watch: {
    active: {
      immediate: true,
      handler () {
        this.isActive = this.active
        if (this.isActive) {
          this.activate()
        }
      }
    }
  },
  created () {
    if (this === this.$parent.$children[0]) {
      this.activate()
    }
  },
  methods: {
    activate () {
      this.$parent.activate(this)
      this.$emit('activate')
    }
  }
}
</script>
