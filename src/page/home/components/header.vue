<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back_icon">&#xe8b5;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe651;</span>输入/景点/游玩</div>
        <div class="header-right">
            城市
             <span class="iconfont arrow_icon">&#xeb6d;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"headerComponent",
    }
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/variable.styl"
.header{
  display: flex;
  line-height:.86rem;
  background: $bgColor;
  color: #fff;
    .header-left{
        width: .64rem;
        padding-left:.2rem;
        box-sizing: border-box;
        float: left;
        .back_icon{
            font-size: .4rem;
        }
    }
    .header-input{
        flex: 1;
        background-color: #fff;
        border-radius: .1rem;
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        margin-bottom: .1rem;
        color: #ccc;
        padding-left:.1rem;
    }
    .header-right{
        width: 1.24rem;
        float: right;
        padding-left:.1rem;
        .arrow_icon{
            font-size: .24rem;
        }
    }
}

</style>