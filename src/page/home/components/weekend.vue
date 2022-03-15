<template>
    <div>
        <div class="recommend-title">周末游</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
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
        data(){
            return {
                recommendList:[{
                    id:1,
                    imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                    title:"丽江古城",
                    desc:"丽江七天游,开心七天乐"
                },
                {
                    id:2,
                    imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                    title:"丽江古城",
                    desc:"丽江七天游,开心七天乐"
                },{
                    id:3,
                    imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                    title:"丽江古城",
                    desc:"丽江七天游,开心七天乐"
                },{
                    id:4,
                    imgUrl:"https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
                    title:"丽江古城",
                    desc:"丽江七天游,开心七天乐"
                }]
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
        padding-bottom: 33.9%;
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