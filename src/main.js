import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// base mock data
Vue.prototype.$store = {
  coin:['CZZ','BCH','BTC','ETH','BSV','BSG']
}

new Vue({
  render: h => h(App),
}).$mount('#app')
