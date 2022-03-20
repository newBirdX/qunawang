<template>
  <div class="banner" @click="showImg">
    <img
      :src="bannerImg"
      alt=""
      class="banner-img"
    />
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe8ba;</span>30
      </div>
    </div>
    <CommonGailary :imgs="imgs" v-show="isShow" @close="handleClose"/>
  </div>
</template>

<script>
//gailary组件是图片画廊组件
import CommonGailary from "@/common/gailary/gailary.vue";
export default {
  name: "detail-banner",
  components: { CommonGailary },
  props:['imgs','sightName','bannerImg'],
  data() {
    return {
      isShow:false
    };
  },
  methods:{
    showImg(){
      this.isShow=true;
    },
    handleClose(){
      this.isShow=false;
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  background: #f00;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>