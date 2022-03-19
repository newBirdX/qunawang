<template>
    <div class="container">
        <Banner/>
        <Header/>
        <List :list="list"/>
    </div>
</template>

<script>
import Banner from './components/banner.vue'
import Header from './components/header.vue'
import List from './components/list.vue'
    export default {
        name:"detail",
        components:{Banner,Header,List},
        data(){
            return {
                list:[{
                    title:"成人票",
                    children:[{
                        title:"成人三馆联票",
                        children:[{
                        title:"成人三馆联票--东方店"
                    }]
                    },{
                        title:"成人五馆联票"
                    }]
                },{
                    title:"学生票"
                },{
                    title:"儿童票"
                },{
                    title:"老年票"
                }]
            }
        }
    }
</script>

<style lang="less" scoped>
// .container{
//     height: 50rem;
// }
</style>