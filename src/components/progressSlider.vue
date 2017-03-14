<template>
  <div >
    <slider class="slider" interval="3000" auto-play="true">
      <div class="" v-for="item in progressList">
        <text>{{item.title}}</text>
        <text>{{item.finished}}</text>
        <text>/</text>
        <text>{{item.sum}}</text>
      </div>
    </slider>
  </div>
</template>

<script>

  export default {
    props: {
      progressList: {
          type: Array,
          default: [
            {title: '任务1', sum: 20, finished: 5, },
            {title: '任务2', sum: 20, finished: 0},
            {title: '任务3', sum: 20, finished: 15}
          ]
      },
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style>
  .slider { margin-top: 25px; margin-left: 25px; width: 100%; height: 300px; border-width: 2px; border-style: solid; border-color: #41B883; }
  .frame { width: 700px; height: 700px; position: relative; }
</style>
