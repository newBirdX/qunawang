<template>
    <div>
        <div class="recommend-title">周末游</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"weekend",
        props:['weekendList'],
        data(){
            return {
            }
        }
    }
</script>

<style lang="less" scoped>
.recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
    .item-img-wrapper{
        overflow: hidden;
        height: 0;
        padding-bottom: 37.09%;
    }
    .item-img{
        width: 100%;
    }
    .item-info{
        flex: 1;
        padding:0 .1rem;
        .item-title{
            line-height: .54rem;
            font-size: .32rem;
        }
        .item-desc{
            line-height: .4rem;
            color: #ccc;
        }
    }
</style>