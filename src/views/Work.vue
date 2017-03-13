<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">aaa {{target}}</text>
  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        target: '111'
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
