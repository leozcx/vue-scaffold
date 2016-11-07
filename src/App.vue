<template>
  <div id="app">
    <ToDo v-for="item in users" v-bind:data='item'></ToDo>
  </div>
</template>

<script>
import ToDo from './components/todo/Todo.vue'
import config from './config'

export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  components: {
    ToDo
  },
  created: function () {
    this.getPerson()
  },
  methods: {
    getPerson () {
      let vm = this
      this.$http.get(config.personUrl).then((resp) => {
        vm.users = resp.body
      })
    }
  }
}
</script>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
