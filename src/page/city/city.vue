<template>
    <div>
        <CityHeader/>
        <CitySearch/>
    </div>
</template>

<script>
import CityHeader from './component/header.vue'
import CitySearch from './component/search.vue'
    export default {
        name:"cityComponent",
        components:{CityHeader,CitySearch}
    }
</script>

<style lang="less" scoped>

</style>