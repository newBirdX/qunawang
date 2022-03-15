<template>
    <div class="header">
        <router-link to="/">
        <div class="header-left">
            <div class="iconfont back_icon">&#xe8b5;</div>
        </div>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name:"city-header"
    }
</script>

<style lang="less" scoped>
@import '~@/assets/style/variable.less';
.header{
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
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
</style>