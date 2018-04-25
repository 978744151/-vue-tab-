import Vue from 'vue'
import Router from 'vue-router'
import pay from '@/components/pay'
import ios_pay from '@/components/ios_pay'

import home from '@/components/home'
import draw from '@/components/draw'
import feedback from '@/components/feedback'
import zfbrun from '@/components/zfbrun'
import yuandou from '@/components/yuandou'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'pay',component: pay},
    {path: '/ios_pay',name: 'ios_pay',component: ios_pay},
    {path: '/home',name: 'home',component: home},
    {path: '/draw',name: 'draw',component: draw},
    {path: '/feedback',name: 'feedback', component: feedback},
    {path: '/zfbrun',name: 'zfbrun', component: zfbrun},
    {path: '/yuandou',name: 'yuandou', component: yuandou},
  ]
})
