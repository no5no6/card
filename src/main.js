import App from './App.vue'
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

sync(store, router);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#root');

// App.el = '#root'
// export default new Vue(App)

// const app = new Vue({
//   store,
//   router
// }).$mount('#root')
