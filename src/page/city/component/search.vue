<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名称或拼音" v-model="keyWord">
        </div>
        <div class="search-content" v-show="keyWord">
            <ul>
                <li v-for="item in list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:"search",
        props:['cities'],
        data(){
            return {
                keyWord:"",
                list:[],
                timer:null
            }
        },
        computed:{
            hasNoData(){
                return !this.list.length;
            }
        },
        watch:{
            keyWord(){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                if(!this.keyWord){
                    this.list=[];
                    return
                }
                this.timer=setTimeout(() => {
                    const result=[];
                    for(let i in this.cities){
                        this.cities[i].map(value=>{
                            if(value.spell.indexOf(this.keyWord)>-1 ||value.name.indexOf(this.keyWord) >-1){
                                result.push(value)
                            }
                        })
                    }
                    this.list=result;
                }, 100);
            }
        },
        mounted(){
            this.scroll=new BScroll('.search-content')
        }
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
.search-content{
    position: absolute;
    top: 1.8rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: #eee;
    overflow: hidden;
    z-index: 1;
    .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        color: #666;
        background: #fff;
    }
}
</style>