<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名称或拼音">
        </div>
    </div>
</template>

<script>
    export default {
        name:"search"
    }
</script>

<style lang="less" scoped>
@import '~@/assets/style/variable.less';
.search{
    height: .72rem;
    padding: .1rem;
    background: @bgColor;
    .search-input{
        width: 100%;
        height: .62rem;
        padding: 0 .1rem;
        box-sizing: border-box;
        line-height: .62rem;
        text-align: center;
        border-radius: .06rem;
        color: #666;
    }
}
</style>