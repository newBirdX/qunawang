<template>
    <div class="container">
        <Banner :imgs="imgs" :sightName="sightName" :bannerImg="bannerImg"/>
        <Header/>
        <List :list="list"/>
    </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/banner.vue'
import Header from './components/header.vue'
import List from './components/list.vue'
    export default {
        name:"detail",
        components:{Banner,Header,List},
        data(){
            return {
                list:[],
                imgs:[],
                sightName:"",
                bannerImg:""
            }
        },
        methods:{
            getDetailInfo(){
                // console.log(this.$route)
                // console.log(this.$router)
                axios.get('/mock/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                }).then(res=>{
                    let data=res.data.data;
                    console.log(data)
                    this.list=data.categoryList;
                    this.imgs=data.gallaryImgs;
                    this.sightName=data.sightName;
                    this.bannerImg=data.bannerImg
                })
            }
        },
        mounted(){
            this.getDetailInfo();
        }
    }
</script>

<style lang="less" scoped>
// .container{
//     height: 50rem;
// }
</style>