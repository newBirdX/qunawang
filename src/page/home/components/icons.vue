<template>
<div class="icons">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="(item,index) in pages" :key="index">
    <div class="icon" v-for="item in item" :key="item.id">
        <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl" alt="">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
    </div>
    </swiper-slide>
    </swiper>
</div>
</template>

<script>
    export default {
        name:"homeIcons",
        data(){
            return{
                iconList:[{
                    id:"1",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
                    desc:"酒店"
                },
                {
                    id:"2",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/flight.png",
                    desc:"飞机"
                },
                {
                    id:"3",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/train.png",
                    desc:"火车票"
                },
                {
                    id:"4",
                    imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/package.png",
                    desc:"度假"
                },
                {
                    id:"5",
                    imgUrl:"https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
                    desc:"汽车票船票"
                },
                {
                    id:"6",
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:"海外酒店"
                },
                {
                    id:"7",
                    imgUrl:"https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
                    desc:"低价机票"
                },
                {
                    id:"8",
                    imgUrl:"https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
                    desc:"自由行"
                },
                {
                    id:"9",
                    imgUrl:"https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
                    desc:"自由行adsdasdadadasdasdadadadasdasdas"
                }],
                swiperOptions:{
                    loop:false
                }
            }
        },
        computed:{
            pages(){
                const pages=[];
                this.iconList.map((value,index)=>{
                    let page=Math.floor(index/8);
                    if(!pages[page]){
                        pages[page]=[]
                    }
                    pages[page].push(value)
                })
                return pages;
            }
        }
    }
</script>

<style lang="less" scoped>
@import '~@/assets/style/mixins.less';
.icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    margin-top: .1rem;
    // background: #f00;
}
.icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content{
            display: block;
            margin: 0 auto;
            height: 90%;
        }
    }
    .icon-desc{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        // background: #ccc;
        text-align: center;
        height: .44rem;
        line-height: .44rem;
        .ellipsis
    }
}
</style>