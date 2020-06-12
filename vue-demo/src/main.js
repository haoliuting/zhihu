// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import Common from "./common"
for (var i in Common) {
  Vue.component(i, Common[i])
}

import filters from "./filters"
for (var i in filters) {
  Vue.filter(i, filters[i])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
