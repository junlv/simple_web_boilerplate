const templatepage1 = /* html*/ `<div class="page-history"> 
  <!-- <topnav></topnav> -->
      <div class="history-wrap">
          {{news}}
      </div>
  </div>
 </div>
`
// import Service from '@/api/post.service.js'
/** *******  script  *********/
export default {
    name: 'page1',
    components: {

    },
    data() {
        return {
            historyList: [],
            page: 1,
            news: 'paged4444'
        };
    },
    methods: {

    },
    template: templatepage1,
    mounted() {},
    created() {},
};