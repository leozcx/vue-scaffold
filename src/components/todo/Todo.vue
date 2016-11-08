<template>
  <div class="todo">
    <form>
      <div class="flex">
        <div>
          {{$t("message.name")}}: <input type='text' v-model='data.name'/>
        </div>
        <div>
          tel: <input type='text' v-model='data.value'/>
        </div>
        <div>
          <multiselect @input="save" v-model="selected" v-bind:options="options" label="name"></multiselect>
        </div>
      </div>
    </form>
    <button v-on:click='showAlert'> Set </button>
  </div>
</template>

<script>
import config from '../../config'
import Multiselect from 'vue-multiselect'
import VueNotifications from 'vue-notifications'

export default {
  name: 'todo',
  data () {
    return {
      selected: null,
      options: [{
        value: 'eva',
        name: 'eva',
        id: 1
      },
      {
        name: 'leo',
        value: 'leo',
        id: 2
      }]
    }
  },
  props: ['data'],
  methods: {
    save () {
      this.$http.put(config.personUrl + '/' + this.data._id, this.data).then((resp) => {
        console.log(resp)
      })
    },
    showAlert () {
      VueNotifications.warn({title: 't', message: 'Some Error'})
    }
  },
  created () {
    this.selected = this.options[0]
  },
  computed: {
    msgs: function () {
      return this.msg + ' eva'
    }
  },
  components: {
    Multiselect
  }
}
</script>

<style>
.todo {
  width: 50%;
}
</style>
