
/*********  template  *********/
const templatepage2 = /*html*/ `<div class="page-history"> 
  <!-- <topnav></topnav> -->
      <div class="history-wrap">
          {{news}}
      </div>
  </div>
 </div>
`
// import Service from '@/api/post.service.js'
/*********  script  *********/
export default {
  name: 'page2',
  components: {
    
  },
  data() {
    return {
      historyList: [],
      page:1,
      news:'page2'
    };
  },
  methods: {
    // requestNews () {
    //     let self = this
    //     Service.fetch('secret/secretsmyfollow')
    //     .then((data) => {
    //       console.log(data)
    //       self.news = data.data.news
    //     }).catch((err)=>{
    //       console.warn(err)
    //     })
    //   },
  },
  template: templatepage2,
  mounted() {
  },
  created() {
  },
};