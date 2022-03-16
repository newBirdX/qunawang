<template>
    <div class="list">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">秦皇岛</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">秦皇岛</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">秦皇岛</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">秦皇岛</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">秦皇岛</div>
                </div>
            </div>
            
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:"cityList",
        mounted(){
            this.scroll=new BScroll('.list')
        }
    }
</script>

<style lang="less" scoped>
.list{
    position: absolute;
    top: 1.8rem;
    left: 0;
    right: 0;
    bottom: 0;
    // background: red;
    overflow: hidden;
}
.border-topbottom{
    &:before{
        border-color: #ccc;
    }
    &:after{
        border-color: #ccc;
    }
}
.title{
    line-height: .54rem;
    padding-left: .2rem;
    background: #eee;
    color: #666;
    font-size: .26rem;
}
.button-list{
    padding: .1rem;
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    .button-wrapper{
        float: left;
        width: 33.3%;
        .button{
            margin: .1rem;
            padding: .1rem 0;
            border-radius: .06rem;
            text-align: center;
            border: .02rem solid #ccc;
        }
    }
}
.item-list{
    .item{
        line-height: .54rem;
        color: #666;
        padding-left: .2rem;
    }
}
</style>