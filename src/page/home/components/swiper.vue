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
  data(){
      return {
          swiperOptions:{
            //添加点
            pagination:".swiper-pagination",
            //循环轮播
            loop:true
          },
          swiperList:[
              {
              id:'0001',
              imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg'
            },
            {
              id:'0002',
              imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
            }
            ]
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