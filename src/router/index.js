import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Work from '../views/Work.vue';
import User from '../views/User.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
      {
          path: '/user',
          component: User
      },
      {
          path: '/work',
          component: Work
      },
      {
          path: '/index',
          component: Index
      },
      {
          path: '/',
          component: Index
      }
  ]
})
