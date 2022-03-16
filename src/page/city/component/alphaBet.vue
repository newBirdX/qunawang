<template>
<ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
</ul>
</template>

<script>
    export default {
        name:"alphaBet"
    }
</script>

<style lang="less" scoped>
@import '~@/assets/style/variable.less';
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item{
        text-align: center;
        color: @bgColor;
        line-height: .4rem;
    }
}
</style>