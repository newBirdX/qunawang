<template>
    <div>
        <Header/>
        <HeaderSwiper :swiperList="swiperList" v-if="isShow"/>
        <HomeIcons :iconList="iconList"/>
        <HomeRecommend :recommendList="recommendList"/>
        <HomeWeekend :weekendList="weekendList"/>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState } from 'vuex'
import Header from './components/header.vue'
import HeaderSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
    export default {
        name:"Home",
        components:{Header,HeaderSwiper,HomeIcons,HomeRecommend,HomeWeekend},
        data(){
            return {
                swiperList:[],    
                iconList:[],
                recommendList:[],
                weekendList:[],
                lastCity:""
            }
        },
        methods:{
            getHomeInfo(){
                axios.get("/mock/index.json?city="+this.city).then(response=>{
                        let res=response.data.data;
                        console.log(response.data.data);
                    this.swiperList=res.swiperList;
                    this.iconList=res.iconList;
                    this.recommendList=res.recommendList;
                    this.weekendList=res.weekendList

                })
            }
        },
        computed:{
            isShow(){
                if(this.swiperList.length){
                    return true
                }
            },
            ...mapState(['city'])
        },
        mounted(){
            this.getHomeInfo();
            this.lastCity=this.city
        },
        activated(){
            if(this.lastCity!==this.city){
                this.getHomeInfo();
                this.lastCity=this.city
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
