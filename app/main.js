import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import VueDevtools from 'nativescript-vue-devtools'

import App from './components/App'

import reducers from './vuex'

Vue.use(Vuex)

const store = new Vuex.Store(reducers)

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
