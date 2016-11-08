import Vue from 'vue'
import App from './App'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'

require('./main.less')

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

var VueResource = require('vue-resource')
var VueI18n = require('vue-i18n')
var locales = {
  zh: {
    message: {
      name: '姓名'
    }
  }
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
Vue.use(VueNotifications, options)
Vue.use(VueI18n)
Vue.config.lang = 'zh'
Vue.locale('zh', locales.zh)

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mounted () {
    miniToastr.init()
  }
})
