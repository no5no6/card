<template>
  <div >
    <div class="titleRow tabbar" >
      <div v-for="(item, index) in tabData" @click="tabChange(index, item.path)">
        <div class="tabItem">
          <div>
            <image :style="{width: item.imageWidth ? item.imageWidth : '60px', height: item.imageHeight ? item.imageHeight : '60px'}" :src="item.checked ? item.checkedImage : item.image">
            </image>
            <text :style="{color: item.checked ? item.checkedTextColor : item.textColor}">{{item.text}}</text>
          </div>
          <div class="tabTip" :style="{background: item.tip ? 'red' : '#f5f3f3'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      tabData: {
          type: Array,
          default: [
            {text: 'tab1', checked: true},
            {text: 'tab2', checked: false},
            {text: 'tab3', checked: false}
          ]
      },
    },
    methods: {
      tabChange(index, path){
        this.tabData[index].tip = false;
        this.tabData.forEach((item, idx) => {item.checked = index === idx;});
        this.$emit('tabChange', index, path);
      },
      setTip(index){
        this.tabData[index].tip = true;
      }
    }
  }
</script>

<style>
  .titleRow { flex-direction: row; justify-content: space-between; align-items: center}
  .tabbar { background: #f5f3f3; height: 150px; padding: 20px;}
  .tabTip {width: 5px; height: 5px; border-radius: 10px; padding: 10px;}
  .tabItem {flex-direction: row; align-items: flex-start}
</style>
