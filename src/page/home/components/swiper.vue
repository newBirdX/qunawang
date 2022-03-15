<template>
  <div class="wraper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- <p>aaa</p> -->
  </div>
</template>

<script>
export default {
  name: "homeSwiper",
  props:['swiperList'],
  data(){
      return {
          swiperOptions:{
            //添加点
            pagination:".swiper-pagination",
            //循环轮播
            loop:true
          }
      }
  }
};
</script>

<style lang="less" scoped>
.wraper /deep/ .swiper-pagination-bullet-active{
  background: #fff;
}
.wraper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}
.swiper-img{
  width: 100%;
}
</style>