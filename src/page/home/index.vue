<template>
    <div>
        <Header/>
        <HeaderSwiper/>
        <HomeIcons/>
        <HomeRecommend/>
        <HomeWeekend/>
    </div>
</template>

<script>
import Header from './components/header.vue'
import HeaderSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
    export default {
        name:"Home",
        components:{Header,HeaderSwiper,HomeIcons,HomeRecommend,HomeWeekend}
    }
</script>

<style lang="scss" scoped>

</style>
