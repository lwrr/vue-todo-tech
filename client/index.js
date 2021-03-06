import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
// 注册
store.watch(state => state.count + 1, (newValue) => {
  console.log('newValue=', newValue)
})
store.subscribe((mutations, state) => {
  console.log(mutations.type)
  console.log(mutations.payload)
})
store.subscribeAction((actions, state) => {
  console.log(actions.type)
  console.log(actions.payload)
})

router.beforeEach((to, from, next) => {
  console.log('before each invoked ')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked ')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked ')
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
