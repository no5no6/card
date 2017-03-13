<template>
  <div >
    <div class="titleRow titleBar">
      <image :src="logoUrl" class="logo"></image>
      <div class="titleRow searchDiv">
        <image :src="serachUrl" class="searchImage"></image>
        <span class="searchSpan"></span>
        <text class="searchText">{{seracText}}</text>
      </div>
    </div>
    <div class="titleRow">
    </div>
    <tabbar :tabData="this.tabData"></tabbar>
  </div>
</template>

<script>
  import Tabbar from '../components/tabbar';

  export default {
    data() {
      return {
        logoUrl: './src/image/logo.png',
        serachUrl: './src/image/search.png',
        seracText: '查词',
        tabData: [
          {checkedImage: './src/image/home-checked.png', image: './src/image/home.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '首页', checked: true},
          {checkedImage: './src/image/gift-checked.png', image: './src/image/gift.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '礼物', checked: false},
          {checkedImage: './src/image/test-checked.png', image: './src/image/test.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '测试', checked: false},
          {checkedImage: './src/image/set-checked.png', image: './src/image/set.png', textColor: '#8a8a8a', checkedTextColor: '#1296db', text: '设置', checked: false, tip: true}
        ]
      }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    },
    components: {
      Tabbar
    }
  }
</script>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .logo { width: 100px; height: 100px; margin: 15px}
  .searchText { font-size: 38px;}
  .searchImage { width: 50px; height: 50px; }
  .searchDiv {margin: 15px; background: rgba(128, 128, 128, 0.26); height: 60px; border: 2px solid rgba(128, 128, 128, 0.26); border-radius: 20px; padding: 20px;}
  .searchSpan {width: 10px;}
  .titleRow { flex-direction: row; justify-content: space-between; align-items: center}
  .titleBar {height:150px; }
</style>
