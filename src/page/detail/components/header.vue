<template>
  <div class="container">
    <router-link tag="div" to="/" class="abs" v-show="showAbs">
      <span class="iconfont header-abs-bac">&#xe8b5;</span>
    </router-link>
    <div class="fix" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont back_icon">&#xe8b5;</div>
        </div>
      </router-link>
      详情展示
    </div>
  </div>
</template>

<script>
export default {
  name: "detailHeader",
  data(){
      return {
          showAbs:true,
          opacityStyle:{
              opacity:0
          },
          timer:null
      }
  },
  methods:{
      handleScroll(){
          let scrollTop=document.documentElement.scrollTop;
          if(this.timer){
              clearTimeout(this.timer);
          }
          this.timer=setTimeout(() => {
              if(scrollTop>50){
               let opacity=scrollTop/140;
          opacity= opacity>1 ? 1:opacity;
          console.log(opacity);
          this.opacityStyle={opacity}
              this.showAbs=false
          }else{
              this.showAbs=true;
          }
          }, 30);
      }
  },
  activated(){
      window.addEventListener('scroll',this.handleScroll)
  }
};
</script>

<style lang="less" scoped>
@import '~@/assets/style/variable.less';
.container{
height: 50rem;
.abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  padding-left: 0.1rem;
  box-sizing: border-box;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  .header-abs-bac {
    color: #fff;
  }
}
.fix{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    font-size: .3rem;
    color:#fff;
    background: @bgColor;
    .header-left{
        width: .64rem;
        padding-left:.2rem;
        color: #fff;
        box-sizing: border-box;
        float: left;
        .back_icon{
            font-size: .4rem;
        }
    }
}
}
</style>