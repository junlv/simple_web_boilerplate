
import Vue from 'vue'

const templateApp = /*html*/ `<div  id="App" class="App"> 
  <div  class="app" >
    <div class="color3 mm-big">
    {{ page }}
    </div>
  </div>
 </div>
`

let App =  {
  name: 'App',
  components: {
  },
  data() {
    return {
      page:'我是第五个文件',
      nomore:false
    };
  },
  methods: {
    loadHistoryData(more) {
      console.log('hello word2')
    },
  },
  template: templateApp,
  mounted() {
  },
  created() {
  },
};





















new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
      App
  }
})