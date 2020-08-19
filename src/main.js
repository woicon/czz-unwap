import Vue from 'vue'
import App from './App.vue'
import {zh,en} from './lang.js'
import './assets/icon/icon.css'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false

// language
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en,
    zh
  }
})

// base mock data
Vue.prototype.$store = {
  coin:['CZZ','BCH','BTC','ETH','BSV','BSG']
}

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
