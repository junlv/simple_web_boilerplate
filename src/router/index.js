import Vue from 'vue'
import VueRouter from 'VueRouter'
Vue.use(VueRouter)

import page2 from '@/pages/page2/page2.js'
import page1 from '@/pages/page1/page1.js'

const router = new VueRouter({
    routes: [
        {
            path: '/index',
            name: 'index',
        },
        {
            path: '/page1',
            name: 'page1',
            component: page1
        },
        {
            path: '/page2',
            name: 'page2',
            component: page2
        },
        { path: '*', redirect: { name: 'index' } }
    ]
})

router.afterEach((to, from) => {
    // if (to.meta && to.meta.accessrole) {
    //   // let accessrole = to.meta.accessrole
    //   Vue.prototype.$XAuth.refresh()
    // }
})

router.beforeEach((to, from, next) => {
    // if (to.meta) {
    //   if (!Vue.prototype.$XAuth.isLegalAccess(to.meta.accessrole)) {
    //     let authpath = Vue.prototype.$XAuth.authPath(to.meta.accessrole)
    //     console.log(authpath)
    //     next({
    //       path: authpath
    //     })
    //   }
    // }
    next()
})

export default router
