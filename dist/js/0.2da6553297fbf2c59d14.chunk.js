(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3SxG":function(e,t,a){"use strict";var i=a("k1MM");a.n(i).a},"4Tgb":function(e,t,a){},Vtdi:function(e,t,a){"use strict";a.r(t);a("LSZE"),a("ls82");var i=a("XfhM"),n=a.n(i),l=a("ttDd"),s=a("c+RD"),r=a.n(s),o=(a("fbCW"),a("2B1R"),a("sMBO"),a("rB9j"),a("UxlC"),a("QWBl"),a("tkto"),a("07d7"),a("JfAA"),a("SYor"),a("FZtP"),{methods:{validate:function(e,t){var a=!0,i="Неверное значение",n=null!==e?e.toString().trim():"";return t.forEach((function(e){if(a)switch(e){case"required":!n.length>0&&(a=!1,i="Обязательное поле");break;case"name":/^[А-я\s-]*$/.test(n)||(a=!1,i="Допустимы только кириллица, пробел и тире");break;case"phone":/^[0-9]*$/.test(n)||(a=!1,i="Допустимы только цифры")}})),!0===a?a:i},validateObject:function(e,t){var a=this;return this[t]={},Object.keys(this[e]).forEach((function(i){var n=a.validate(a[i],a[e][i]);!0!==n&&(a[t][i]=n)})),0===Object.keys(this[t]).length}}}),c=a("KtZj"),u=a.n(c),d={data:function(){return{nav:[],height:null,resizeTimeout:null}},mounted:function(){var e=this;this.$nextTick((function(){e.$el.querySelectorAll(".k-tab").forEach((function(t){var a=t.querySelector(".k-tab__body");a.resizeSensor=new u.a(a,(function(){e.recalc(t)}))}))}))},methods:{activate:function(e){var t=this;this.$children.forEach((function(e){e.isActive=!1})),e.isActive=!0,this.$nextTick((function(){t.recalc(e.$el)}))},recalc:function(e){if(window.innerWidth>=768){var t=this.$el.querySelector(".k-tabs__list"),a=e.querySelector(".k-tab__body");this.height=t.offsetHeight+a.offsetHeight+"px"}else this.height=null}}},p=a("KHd+"),h=Object(p.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-tabs",style:{height:e.height}},[a("ul",{staticClass:"k-tabs__list"},[e._t("default")],2)])}),[],!1,null,null,null).exports,m={props:{active:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{isActive:!1}},watch:{active:{immediate:!0,handler:function(){this.isActive=this.active,this.isActive&&this.activate()}}},created:function(){this===this.$parent.$children[0]&&this.activate()},methods:{activate:function(){this.$parent.activate(this),this.$emit("activate")}}},f=Object(p.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"k-tab",class:{"k-tab--active":e.isActive}},[a("button",{staticClass:"k-tab__toggle",on:{click:e.activate}},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),a("div",{staticClass:"k-tab__body"},[e._t("default")],2)])}),[],!1,null,null,null).exports,v={components:{KLabel:Object(p.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("label",{staticClass:"k-label"},[e._t("default")],2)}),[],!1,null,null,null).exports},props:{label:{type:String,default:null},invalidState:{type:Boolean,default:!0},invalidMessage:{type:String,default:null}}},k=Object(p.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-field",class:{"k-field--invalid":!e.invalidState}},[e.label?a("k-label",[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e._v(" "),e._t("default"),e._v(" "),!e.invalidState&&e.invalidMessage?a("div",{staticClass:"k-field__error"},[e._v("\n    "+e._s(e.invalidMessage)+"\n  ")]):e._e()],2)}),[],!1,null,null,null).exports,b={data:function(){return{id:null}},props:{name:{type:String,default:null},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1}},mounted:function(){this.id="control-"+this._uid}},y={mixins:[b],props:{value:{type:String,default:null},type:{type:String,default:"text"},placeholder:{type:String,default:null},mask:{type:String,default:null}}},_=Object(p.a)(y,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],staticClass:"k-input",attrs:{id:e.id,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,autofocus:e.autofocus},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")}}})}),[],!1,null,null,null).exports,g={mixins:[b],props:{value:{type:String,default:null},type:{type:String,default:"text"},placeholder:{type:String,default:null}}},$=Object(p.a)(g,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("textarea",{staticClass:"k-input k-input--text",attrs:{id:e.id,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,autofocus:e.autofocus},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")}}})}),[],!1,null,null,null).exports,x=Object(p.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"k-button",on:{click:function(t){return e.$emit("click")},focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")}}},[e._t("default")],2)}),[],!1,null,null,null).exports,C=(a("qePV"),{mixins:[b],model:{prop:"checked",event:"change"},props:{value:{type:[String,Number],default:null},label:{type:String,default:null},checked:{type:[String,Number],default:null}},methods:{handleChange:function(e){this.$emit("change",e.target.value)}}}),S=Object(p.a)(C,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-radio"},[a("input",{staticClass:"k-radio__input",attrs:{id:e.id,type:"radio",name:e.name,disabled:e.disabled,readonly:e.readonly,autofocus:e.autofocus},domProps:{value:e.value,checked:null!==e.checked&&e.checked==e.value},on:{change:e.handleChange,focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")}}}),e._v(" "),a("label",{staticClass:"k-radio__label",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null).exports,E=a("9c6q"),O=a.p+"img/7b624dda7db8302c87b23c7a56076ba6.svg",j={components:{KTabs:h,KTab:f,KField:k,KInput:_,KTextarea:$,KButton:x,KRadio:S,yandexMap:E.a,ymapMarker:E.b},mixins:[o],props:{places:{type:Array,default:null}},data:function(){return{method:null,name:null,phoneMasked:null,phone:null,address:null,comment:null,place:null,map:null,coords:[55.8,37.5],zoom:12,mapControls:{zoomControl:{size:"small",position:{bottom:"32px",right:"16px"}}},markerIcon:{layout:"default#image",imageSize:[32,44],imageOffset:[-16,-44]},markerOptions:{cursor:"default"},geotagImg:O,deliveryErrors:{},deliveryRules:{name:["required","name"],phone:["required","phone"],address:["required"],comment:["required"]},pickupErrors:{},pickupRules:{place:["required"]}}},watch:{phoneMasked:{immediate:!0,handler:function(){this.phone=null!==this.phoneMasked?this.phoneMasked.replace(/[^0-9]/g,""):null}},place:function(){this.changePlace()}},created:function(){this.markerIcon.imageHref=this.geotagImg},methods:{focusFirstInput:function(){var e=this;this.$nextTick((function(){var t=e.$el.querySelector(".k-tab--active").querySelector("input,textarea,select");t&&t.focus()}))},changePlace:function(){var e=this;this.$nextTick((function(){if(e.map)if(e.map.container.fitToViewport(),null!==e.place){var t=e.places.find((function(t){return t.id===parseInt(e.place)}));e.coords=t.coords,e.zoom=16,e.map.setCenter(e.coords,e.zoom)}else e.map.setBounds(e.map.geoObjects.getBounds())}))},mapInit:function(e){this.map=e,"ontouchstart"in window&&(e.behaviors.disable("scrollZoom"),e.behaviors.disable("multiTouch"),e.behaviors.disable("drag"))},activateDelivery:function(){this.method="delivery",this.focusFirstInput()},activatePickup:function(){this.method="pickup",this.focusFirstInput(),this.changePlace()},submitDelivery:function(){this.validateObject("deliveryRules","deliveryErrors")?this.$emit("success",{method:this.method,name:this.name,phone:this.phone,address:this.address,comment:this.comment}):this.$emit("error",this.deliveryErrors)},submitPickup:function(){this.validateObject("pickupRules","pickupErrors")?this.$emit("success",{method:this.method,place:parseInt(this.place)}):this.$emit("error",this.pickupErrors)}}},w=(a("3SxG"),{components:{KDeliveryMethod:Object(p.a)(j,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"k-delivery-method"},[a("k-tabs",[a("k-tab",{attrs:{title:"Доставка"},on:{activate:e.activateDelivery}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col--t-6"},[a("k-field",{attrs:{label:"ФИО","invalid-state":!Object.keys(e.deliveryErrors).includes("name"),"invalid-message":e.deliveryErrors.name}},[a("k-input",{attrs:{placeholder:"Только кириллица"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),e._v(" "),a("div",{staticClass:"col col--t-6"},[a("k-field",{attrs:{label:"Телефон","invalid-state":!Object.keys(e.deliveryErrors).includes("phone"),"invalid-message":e.deliveryErrors.phone}},[a("k-input",{attrs:{type:"tel",placeholder:"+7 (___) ___-__-__",mask:"+7 (###) ###-##-##"},on:{focus:function(t){!e.phoneMasked&&(e.phoneMasked="+7 (")},blur:function(t){"+7 ("===e.phoneMasked&&(e.phoneMasked=null)}},model:{value:e.phoneMasked,callback:function(t){e.phoneMasked=t},expression:"phoneMasked"}})],1)],1)]),e._v(" "),a("k-field",{attrs:{label:"Адрес доставки","invalid-state":!Object.keys(e.deliveryErrors).includes("address"),"invalid-message":e.deliveryErrors.address}},[a("k-input",{attrs:{placeholder:"Город, улица, дом"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),e._v(" "),a("k-field",{attrs:{label:"Комментарий","invalid-state":!Object.keys(e.deliveryErrors).includes("comment"),"invalid-message":e.deliveryErrors.comment}},[a("k-textarea",{model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1),e._v(" "),a("div",{staticClass:"button-footer"},[a("k-button",{on:{click:e.submitDelivery}},[e._v("\n          Отправить\n        ")])],1)],1),e._v(" "),a("k-tab",{attrs:{title:"Самовывоз"},on:{activate:e.activatePickup}},[a("k-field",{attrs:{"invalid-state":!Object.keys(e.pickupErrors).includes("place"),"invalid-message":e.pickupErrors.place}},[a("div",{staticClass:"row"},e._l(e.places,(function(t){return a("div",{key:t.id,staticClass:"col col--t-6"},[a("k-radio",{attrs:{name:"place",value:t.id,label:t.title},model:{value:e.place,callback:function(t){e.place=t},expression:"place"}})],1)})),0)]),e._v(" "),a("yandex-map",{staticClass:"k-delivery-map",attrs:{coords:e.coords,zoom:e.zoom,controls:["zoomControl"],"detailed-controls":e.mapControls,"show-all-markers":!0},on:{"update:coords":function(t){e.coords=t},"update:zoom":function(t){e.zoom=t},"map-was-initialized":e.mapInit}},e._l(e.places,(function(t){return a("ymap-marker",{key:t.id,attrs:{"marker-type":"placemark","marker-id":"delivery-marker-"+t.id,coords:t.coords,icon:e.markerIcon,options:e.markerOptions}})})),1),e._v(" "),a("div",{staticClass:"button-footer"},[a("k-button",{on:{click:e.submitPickup}},[e._v("\n          Отправить\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports},methods:{handleSuccess:function(e){this.$noty.success("<pre>"+JSON.stringify(e,null,2)+"</pre>")},handleError:function(e){this.$noty.error("<pre>"+JSON.stringify(e,null,2)+"</pre>")}}}),M=(a("XAuw"),Object(p.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sections"},[a("div",{staticClass:"section"},[a("div",{staticClass:"section__inner"},[a("h1",{staticClass:"section__title"},[e._v("\n        Выберите способ доставки\n      ")]),e._v(" "),a("k-delivery-method",{attrs:{places:[{id:1,title:"Пункт Выдачи заказов Песчаная улица, дом 13",coords:[55.801131,37.508167]},{id:2,title:"Пункт Выдачи заказов Подсосенский переулок, 11",coords:[55.757556,37.651592]},{id:3,title:"Пункт Выдачи заказов г. Клин",coords:[56.332526,36.728671]}]},on:{success:e.handleSuccess,error:e.handleError}})],1)])])}),[],!1,null,null,null).exports);n.a.use(l.a),n.a.use(r.a,{timeout:3e3,progressBar:!0,layout:"bottomLeft"}),new n.a({render:function(e){return e(M)}}).$mount("#app")},XAuw:function(e,t,a){"use strict";var i=a("4Tgb");a.n(i).a},k1MM:function(e,t,a){}},[["Vtdi",13,14,1,2,3,4,5,6,7,9,10,8,11,12]]]);