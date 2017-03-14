<template>
  <div id='root' class="divColumn">
    <router-view></router-view>
    <tabbar class="tabbar" :tabData="this.tabData" @tabChange="tabChange"></tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar';
  import router from './router';

  export default {
    data() {
      return {
        tabData: [
          {checkedImage: './src/image/home-checked.png', image: './src/image/home.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '首页', checked: true, path: '/home'},
          {checkedImage: './src/image/gift-checked.png', image: './src/image/gift.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '奖励', checked: false, path: '/test'},
          {checkedImage: './src/image/test-checked.png', image: './src/image/test.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '测试', checked: false, path: '/gift'},
          {checkedImage: './src/image/set-checked.png', image: './src/image/set.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '设置', checked: false, path: '/set', tip: true}
        ]
      }
    },
    methods: {
      tabChange(index, path) {
        router.push(path);
      }
    },
    components: {
      Tabbar
    },
    mounted() {

    }
  }
</script>

<style>
  .divColumn { justify-content: space-between;}
  .tabbar {width: 100%;}
</style>
