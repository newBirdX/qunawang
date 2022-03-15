<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
                    <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"homeRecommend",
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
.item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    // background: #f00;
    .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
        border-radius: .2rem;
    }
    .item-info{
        flex: 1;
        padding: .1rem;
        .item-title{
            line-height: .54rem;
            font-size: .32rem;
        }
        .item-desc{
            line-height: .4rem;
            color: #ccc;
        }
        .item-button{
            margin-top: .2rem;
            background: #ff9300;
            padding: 0 .2rem;
            border-radius: .06rem;
            color: #fff;
        }
    }

}
</style>