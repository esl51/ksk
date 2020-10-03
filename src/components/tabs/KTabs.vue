<template>
  <div
    class="k-tabs"
    :style="{
      'height': height
    }"
  >
    <ul class="k-tabs__list">
      <slot />
    </ul>
  </div>
</template>

<script>
import ResizeSensor from 'css-element-queries/src/ResizeSensor'
export default {
  data: () => ({
    nav: [],
    height: null,
    resizeTimeout: null
  }),
  mounted () {
    this.$nextTick(() => {
      const tabs = this.$el.querySelectorAll('.k-tab')
      tabs.forEach(tab => {
        const tabBody = tab.querySelector('.k-tab__body')
        tabBody.resizeSensor = new ResizeSensor(tabBody, () => {
          this.recalc(tab)
        })
      })
    })
  },
  methods: {
    activate (tab) {
      this.$children.forEach((tab) => {
        tab.isActive = false
      })
      tab.isActive = true
      this.$nextTick(() => {
        this.recalc(tab.$el)
      })
    },
    recalc (tab) {
      if (window.innerWidth >= 768) {
        const list = this.$el.querySelector('.k-tabs__list')
        const body = tab.querySelector('.k-tab__body')
        this.height = (list.offsetHeight + body.offsetHeight) + 'px'
      } else {
        this.height = null
      }
    }
  }
}
</script>
