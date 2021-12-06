<template>
  <div >
    <div class="scroll-div-outer" id='scrollDiv'>
      <div class="scroll-div-inner">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  methods:{
    checkDivScroolTop(){
      //获取节点
      var scrollDiv = document.getElementById('scrollDiv');
      //绑定事件
      scrollDiv.addEventListener('scroll', function() {
        console.log(scrollDiv.scrollTop);
      });
    }
  },
  mounted(){
    this.checkDivScroolTop();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scroll-div-outer{
    position:fixed;
    height: 100%;
    width: 100%;
    border: 1px solid #ccc;
    overflow: auto;
  }

   .scroll-div-inner{
    height: 200%;
    width: 200%;
    border: 1px solid #ccc;
  }
</style>