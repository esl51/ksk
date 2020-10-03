<template>
  <div class="k-delivery-method">
    <k-tabs>
      <k-tab
        title="Доставка"
        @activate="activateDelivery"
      >
        <div class="row">
          <div class="col col--t-6">
            <k-field
              label="ФИО"
              :invalid-state="!Object.keys(deliveryErrors).includes('name')"
              :invalid-message="deliveryErrors.name"
            >
              <k-input
                v-model="name"
                placeholder="Только кириллица"
              />
            </k-field>
          </div>
          <div class="col col--t-6">
            <k-field
              label="Телефон"
              :invalid-state="!Object.keys(deliveryErrors).includes('phone')"
              :invalid-message="deliveryErrors.phone"
            >
              <k-input
                v-model="phoneMasked"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                mask="+7 (###) ###-##-##"
                @focus="!phoneMasked ? phoneMasked = '+7 (' : null"
                @blur="phoneMasked === '+7 (' ? phoneMasked = null : null"
              />
            </k-field>
          </div>
        </div>
        <k-field
          label="Адрес доставки"
          :invalid-state="!Object.keys(deliveryErrors).includes('address')"
          :invalid-message="deliveryErrors.address"
        >
          <k-input
            v-model="address"
            placeholder="Город, улица, дом"
          />
        </k-field>
        <k-field
          label="Комментарий"
          :invalid-state="!Object.keys(deliveryErrors).includes('comment')"
          :invalid-message="deliveryErrors.comment"
        >
          <k-textarea
            v-model="comment"
          />
        </k-field>
        <div class="button-footer">
          <k-button @click="submitDelivery">
            Отправить
          </k-button>
        </div>
      </k-tab>
      <k-tab
        title="Самовывоз"
        @activate="activatePickup"
      >
        <k-field
          :invalid-state="!Object.keys(pickupErrors).includes('place')"
          :invalid-message="pickupErrors.place"
        >
          <div class="row">
            <div
              v-for="item in places"
              :key="item.id"
              class="col col--t-6"
            >
              <k-radio
                v-model="place"
                name="place"
                :value="item.id"
                :label="item.title"
              />
            </div>
          </div>
        </k-field>
        <yandex-map
          class="k-delivery-map"
          :coords.sync="coords"
          :zoom.sync="zoom"
          :controls="['zoomControl']"
          :detailed-controls="mapControls"
          :show-all-markers="true"
          @map-was-initialized="mapInit"
        >
          <ymap-marker
            v-for="item in places"
            :key="item.id"
            marker-type="placemark"
            :marker-id="'delivery-marker-' + item.id"
            :coords="item.coords"
            :icon="markerIcon"
            :options="markerOptions"
          />
        </yandex-map>
        <div class="button-footer">
          <k-button @click="submitPickup">
            Отправить
          </k-button>
        </div>
      </k-tab>
    </k-tabs>
  </div>
</template>

<script>
import { validator } from '@/mixins/validator'
import KTabs from './tabs/KTabs'
import KTab from './tabs/KTab'
import KField from './forms/KField'
import KInput from './forms/KInput'
import KTextarea from './forms/KTextarea'
import KButton from './forms/KButton'
import KRadio from './forms/KRadio'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import geotagImg from '@/assets/img/geotag.svg'

export default {
  components: {
    KTabs,
    KTab,
    KField,
    KInput,
    KTextarea,
    KButton,
    KRadio,
    yandexMap,
    ymapMarker
  },
  mixins: [
    validator
  ],
  props: {
    places: { type: Array, default: null }
  },
  data: () => ({
    method: null,
    name: null,
    phoneMasked: null,
    phone: null,
    address: null,
    comment: null,
    place: null,
    map: null,
    coords: [55.80, 37.50],
    zoom: 12,
    mapControls: {
      zoomControl: {
        size: 'small',
        position: { bottom: '32px', right: '16px' }
      }
    },
    markerIcon: {
      layout: 'default#image',
      imageSize: [32, 44],
      imageOffset: [-16, -44]
    },
    markerOptions: {
      cursor: 'default'
    },
    geotagImg,
    deliveryErrors: {},
    deliveryRules: {
      name: ['required', 'name'],
      phone: ['required', 'phone'],
      address: ['required'],
      comment: ['required']
    },
    pickupErrors: {},
    pickupRules: {
      place: ['required']
    }
  }),
  watch: {
    phoneMasked: {
      immediate: true,
      handler () {
        this.phone = this.phoneMasked !== null ? this.phoneMasked.replace(/[^0-9]/g, '') : null
      }
    },
    place () {
      this.changePlace()
    }
  },
  created () {
    this.markerIcon.imageHref = this.geotagImg
  },
  methods: {
    focusFirstInput () {
      this.$nextTick(() => {
        const activeTab = this.$el.querySelector('.k-tab--active')
        const firstInput = activeTab.querySelector('input,textarea,select')
        if (firstInput) {
          firstInput.focus()
        }
      })
    },
    changePlace () {
      this.$nextTick(() => {
        if (this.map) {
          this.map.container.fitToViewport()
          if (this.place !== null) {
            const place = this.places.find(item => item.id === parseInt(this.place))
            this.coords = place.coords
            this.zoom = 16
            this.map.setCenter(this.coords, this.zoom)
          } else {
            this.map.setBounds(this.map.geoObjects.getBounds())
          }
        }
      })
    },
    mapInit (map) {
      this.map = map
      if ('ontouchstart' in window) {
        map.behaviors.disable('scrollZoom')
        map.behaviors.disable('multiTouch')
        map.behaviors.disable('drag')
      }
    },
    activateDelivery () {
      this.method = 'delivery'
      this.focusFirstInput()
    },
    activatePickup () {
      this.method = 'pickup'
      this.focusFirstInput()
      this.changePlace()
    },
    submitDelivery () {
      if (this.validateObject('deliveryRules', 'deliveryErrors')) {
        this.$emit('success', {
          method: this.method,
          name: this.name,
          phone: this.phone,
          address: this.address,
          comment: this.comment
        })
      } else {
        this.$emit('error', this.deliveryErrors)
      }
    },
    submitPickup () {
      if (this.validateObject('pickupRules', 'pickupErrors')) {
        this.$emit('success', {
          method: this.method,
          place: parseInt(this.place)
        })
      } else {
        this.$emit('error', this.pickupErrors)
      }
    }
  }
}
</script>

<style lang="scss">
.k-delivery-map {
  @include vmargin(35px);
  width: 100%;

  @include media("<tablet") {
    height: 300px;
  }
  @include media(">=tablet") {
    height: 550px;
  }
}
</style>
