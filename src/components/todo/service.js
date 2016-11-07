import Vue from 'vue'

var VueResource = require('vue-resource')

Vue.use(VueResource)

function getPerson () {
  Vue.http.get('/api/person').then((response) => {
    console.log(response.body)
  }, (response) => {
    // error callback
  })
}

var todoService = {
  getPerson: getPerson
}
export {todoService}

