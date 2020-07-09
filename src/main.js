import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Todo from './components/Todo'

Vue.config.productionTip = false
Vue.component('Todo', Todo)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
