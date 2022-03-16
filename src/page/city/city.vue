<template>
    <div>
        <CityHeader/>
        <CitySearch/>
        <CityList/>
        <CityAlpha/>
    </div>
</template>

<script>
import CityHeader from './component/header.vue'
import CitySearch from './component/search.vue'
import CityList from './component/list.vue'
import CityAlpha from './component/alphaBet.vue'
    export default {
        name:"cityComponent",
        components:{CityHeader,CitySearch,CityList,CityAlpha}
    }
</script>

<style lang="less" scoped>

</style>