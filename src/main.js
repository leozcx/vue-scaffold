import Vue from 'vue'
import App from './App'
require('./main.less')

var VueResource = require('vue-resource')
var VueI18n = require('vue-i18n')
var locales = {
  zh: {
    message: {
      name: '姓名'
    }
  }
}
Vue.use(VueI18n)
Vue.config.lang = 'zh'
Vue.locale('zh', locales.zh)

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
