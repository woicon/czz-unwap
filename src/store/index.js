import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    wallet: {
      address:null
    },
    coin:['CZZ','BCH','BTC','ETH','BSV','BSG'],
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store