<template>
  <div class="">
    <div class="titleRow titleBar">
      <image :src="logoUrl" class="logo"></image>
      <div class="titleRow searchDiv">
        <image :src="serachUrl" class="searchImage"></image>
        <span class="searchSpan"></span>
        <text class="searchText">{{seracText}}</text>
      </div>
    </div>
    <div>
      <progress-slider :progressList="progressList"></progress-slider>
    </div>
    <div class="divBtnGroup">
      <a class="button">
        <text class="text">开始背词</text>
      </a>
    </div>
  </div>
</template>

<script>
  import ProgressSlider from '../components/progressSlider';

  export default {
    data() {
      return {
        logoUrl: './src/image/logo.png',
        serachUrl: './src/image/search.png',
        seracText: '查词',
        progressList: [
          {title: '游戏机', sum: 20, finished: 5, },
          {title: '笔记本', sum: 20, finished: 0},
          {title: '音箱', sum: 20, finished: 15}
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
      ProgressSlider
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
  .button {width: 450px; margin-top: 30px; margin-left: 150px; padding-top: 20px; padding-bottom: 20px; border-width: 2px; border-style: solid; border-color: #DDDDDD; background-color: #F5F5F5 }
  .text {font-size: 60px; color: #666666; text-align: center; }
  .divContent {width: 100%; height: 100%}
</style>
