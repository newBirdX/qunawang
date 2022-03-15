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
        props:['iconList'],
        data(){
            return{
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