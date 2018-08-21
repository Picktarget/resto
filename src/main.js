import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(iview);
Vue.use(VueI18n)

const i18n = new VueI18n({
  // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
  locale: 'zh-CN', // 语言标识
  messages: {
    'zh-CN': require('./common/lang/zh'),
    'en-US': require('./common/lang/en')
  }
});


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')