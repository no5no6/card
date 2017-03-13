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
    <div class="titleRow titleBar">
        <text >111111122</text>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        logoUrl: './src/image/logo.png',
        serachUrl: './src/image/search.png',
        seracText: '查词'
      }

    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
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
