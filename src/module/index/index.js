
import Vue from 'vue'
import Bee from 'Bee'
import router from '@/router/index.js'


const templateApp = /*html*/ `<div  id="App" class="App"> 
  <div  class="app" >
    <div class="color3 mm-big">
   ab {{ page }} 23224
    <button @click="forwardPage1"> forwardPage1</button>
    <button @click="forwardPage2"> forwardPage2 </button>
    </div>
    <router-view> </router-view>
  </div>
 </div>
`



let App =  {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      page:'我是第23件',
      nomore:false
    };
  },
  methods: {
    forwardPage1(more) {
      this.$router.push({ name: 'page1' })
    },
    forwardPage2(more) {
      this.$router.push({ name: 'page2' })
    },
    loadHistoryData(more) {
      console.log('hello word')
    },
  },
  template: templateApp,
  mounted() {
  },
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
  router
})