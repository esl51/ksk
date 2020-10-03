<template>
  <button
    class="k-button"
    @click="$emit('click')"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <slot />
  </button>
</template>
