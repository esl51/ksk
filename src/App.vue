<template>
  <div class="sections">
    <div class="section">
      <div class="section__inner">
        <h1 class="section__title">
          Выберите способ доставки
        </h1>
        <k-delivery-method
          :places="[
            {
              'id': 1,
              'title': 'Пункт Выдачи заказов Песчаная улица, дом 13',
              'coords': [55.801131, 37.508167]
            },
            {
              'id': 2,
              'title': 'Пункт Выдачи заказов Подсосенский переулок, 11',
              'coords': [55.757556, 37.651592]
            },
            {
              'id': 3,
              'title': 'Пункт Выдачи заказов г. Клин',
              'coords': [56.332526, 36.728671]
            }
          ]"
          @success="handleSuccess"
          @error="handleError"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KDeliveryMethod from '@/components/KDeliveryMethod'
export default {
  components: {
    KDeliveryMethod
  },
  methods: {
    handleSuccess (data) {
      this.$noty.success('<pre>' + JSON.stringify(data, null, 2) + '</pre>')
    },
    handleError (data) {
      this.$noty.error('<pre>' + JSON.stringify(data, null, 2) + '</pre>')
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/main';
</style>
