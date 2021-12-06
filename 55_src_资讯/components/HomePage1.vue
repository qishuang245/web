<template>
<div class="tools">
<ul @mouseleave="mouseLeave()">
<li @click="toTop(step)">回到顶部</li>
<li @mouseover="mouseOver(1)">QQ</li>
<li @mouseover="mouseOver(2)">微信</li>
</ul>
<div v-if="showIndex === 1">玩QQ</div>
<div v-if="showIndex === 2">玩微信</div>
</div>
</template>

<script>
export default {
 name: 'HomePage1',
 props: {
 step: { //此数据是控制动画快慢的
  type: Number,
  default: 50
 }
 },
 data() {
 return {
  isActive: false,
  showIndex:0,//默认显示下标
 }
 },
 methods: {
 toTop(i) {
  //参数i表示间隔的幅度大小，以此来控制速度 
  document.documentElement.scrollTop -= i;
  if (document.documentElement.scrollTop > 0) {
  var c = setTimeout(() => this.toTop(i), 16);
  } else {
  clearTimeout(c);
  }
 },
 handleScroll() {
  //获取滚动距顶部的距离，显示
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 60) {
  this.isActive = true;
  } else {
  this.isActive = false;
  }
 },
 mouseOver(index) {
 //鼠标移到哪个工具上，对应内容显示出来
  this.showIndex = index;
 },
 mouseLeave(){
 //鼠标移出工具区域后1秒，内容区域消失 
  let timer = setTimeout(() => {
   this.showIndex = 0;
   clearTimeout(timer)
  }, 500);
 }
 },
 mounted: function () {
 window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
 },
 destroyed() {
 window.removeEventListener('scroll', this.handleScroll); //离开页面需要移除这个监听的事件
 }
 
}
</script>