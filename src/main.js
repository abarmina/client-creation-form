import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },

  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
