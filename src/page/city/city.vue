<template>
    <div>
        <CityHeader/>
        <CitySearch/>
        <CityList :hotCities="hotCities" :cities="cities" :letter="letter"/>
        <CityAlpha :cities="cities" @change="handleLetterChange"/>
    </div>
</template>

<script>
import CityHeader from './component/header.vue'
import CitySearch from './component/search.vue'
import CityList from './component/list.vue'
import CityAlpha from './component/alphaBet.vue'
import axios from 'axios'
    export default {
        name:"cityComponent",
        components:{CityHeader,CitySearch,CityList,CityAlpha},
        data(){
            return {
                hotCities:[],
                cities:[],
                letter:""
            }
        },
        methods:{
            getCityInfo(){
                axios.get('/mock/city.json',{
                    params:new Date().getTime()
                }).then(res=>{
                    console.log(res.data.data);
                    let data=res.data.data;
                    this.hotCities=data.hotCities;
                    this.cities=data.cities;
                })
            },
            //通过事件订阅方式，在父组件获取子组件传递的数据
            handleLetterChange(letter){
                // console.log( "father",letter);
                this.letter=letter;
            }
        },
        mounted(){
            this.getCityInfo();
        }
    }
</script>

<style lang="less" scoped>

</style>