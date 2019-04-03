import Vue from 'vue'
import Bee from 'Bee'
import router from '@/router/index.js'
import store from '@/vuex/store'
import {
  mapGetters
} from 'vuex'
import {
  Button
} from 'vant';
const templateApp = /*html*/ `<div  id="App" class="App"> 
  <div  class="app" >
    <div class="color3 mm-big">
   {{isLoading}} {{ page }} 
    <button @click="forwardPage1"> Page1</button>
    <button @click="forwardPage2"> Page2 </button>
    <Button @click="forwardPage3" type="primary">Primary</Button>
    </div>
    <router-view> </router-view>
  </div>
 </div>
`




let App = {
  name: 'App',
  components: {
    Button
  },
  data() {
    return {
      page: '我是第23件',
      nomore: false
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    forwardPage3(more) {
      console.log('forwardPage3')
    },
    forwardPage1(more) {
      this.$router.push({
        name: 'page1'
      })
    },
    forwardPage2(more) {
      // this.$router.push({ name: 'page2' })
      this.$store.dispatch('setLoading', true)
    },
    loadHistoryData(more) {
      console.log('hello word')
    },
  },
  template: templateApp,
  mounted() {},
  created() {
    this.page = Bee.StringUtils.rndNum(10)
  },
};






new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  },
  router,
  store
})