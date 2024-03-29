import Vue from 'vue'
import App from './App'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

import $Fn from './common/index.js'
Vue.prototype.$Fn = $Fn

const app = new Vue({
    ...App
})
app.$mount()
