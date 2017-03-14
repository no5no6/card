import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Gift from '../views/Gift.vue';
import Set from '../views/Set.vue';
import Test from '../views/Test.vue';

// Vue.use(VueRouter);

export default new VueRouter({
  routes: [
      {
          path: '/set',
          component: Set
      },
      {
          path: '/gift',
          component: Gift
      },
      {
          path: '/test',
          component: Test
      },
      {
          path: '/home',
          component: Home
      },
      {
          path: '/',
          component: Home
      }
  ]
})
