<template>
    <div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-icon iconfont">&#xe8ba;</span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detailList :list="item.children" ></detailList>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"detailList",
        props:['list']
    }
</script>

<style lang="less" scoped>
.item-title{
    line-height: .8rem;
    padding: 0 .2rem;
    font-size: .32rem;
    .item-icon{
    position: relative;
    top: .01rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    color: #277fc6;
    font-size: .4rem;
}
}
.item-children{
        padding:0 .2rem;
    }
</style>