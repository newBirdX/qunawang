<template>
  <div class="container" @click="handleGailaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gailary-img" :src="item" alt="" />
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonGailary",
  props:{
    imgs:{default(){
      return []
    }}
  },
  methods:{
    handleGailaryClick(){
      this.$emit('close')
      // console.log(this.$parent.isShow)
    }
  },
  data(){
      return {
          swiperOptions:{
              pagination:'.swiper-pagination',
              paginationType:"fraction",
              observeParents:true,
              observer:true
          }
      }
  }
};
</script>

<style lang="less" scoped>
.container /deep/ .swiper-container{
    overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000;
  z-index: 99;
  .wrapper{
    //   overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 100%;
    //   background: #fff;
      .gailary-img{
          width: 100%;
      }
      .swiper-pagination{
          color: #fff;
          bottom: -1rem;
      }
}
}
</style>