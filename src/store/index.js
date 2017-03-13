import Vue from 'vue'
import Vuex from 'vuex'
import Plan from './plan'

// web自动回use
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        Plan
    }
})
