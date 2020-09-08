import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {zh,en} from './lang.js'
import router from './router'
import 'assets/icon/icon.css'
import 'vue-js-modal/dist/styles.css'
import App from 'pages/App.vue'
import vmodal from 'vue-js-modal'
import VueGoodTablePlugin from 'vue-good-table'
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin)
Vue.use(VueI18n)
Vue.use(vmodal)
Vue.use(Message)
Vue.config.productionTip = false
 
// language
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en,
    zh
  }
})
// coin
Vue.prototype.$store = {
  coin:['CZZ','BCH','BTC','ETH','BSV','BSG'],
  walletAddress: 'cqr045su9x...c5vvgvqanc',
//  beaconAddress:'000000000000000000000000000000000000000a'
}

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
