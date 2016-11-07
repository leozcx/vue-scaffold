<template>
  <div>
    <form>
      <div class="flex">
        <div>
          {{$t("message.name")}}: <input type='text' v-model='data.name'/>
        </div>
        <div>
          tel: <input type='text' v-model='data.value'/>
        </div>
      </div>
    </form>
    <button v-on:click='save'> Set </button>
  </div>
</template>

  <script>
  import config from '../../config'

  export default {
    name: 'todo',
    data () {
      return {
      }
    },
    props: ['data'],
    methods: {
      save () {
        this.$http.put(config.personUrl + '/' + this.data._id, this.data).then((resp) => {
          console.log(resp)
        })
      }
    },
    computed: {
      msgs: function () {
        console.log(this.msg)
        return this.msg + ' eva'
      }
    }
  }
  </script>
