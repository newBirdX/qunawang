<template>
    <div>
        <Header/>
        <HeaderSwiper/>
        <HomeIcons/>
    </div>
</template>

<script>
import Header from './components/header.vue'
import HeaderSwiper from './components/swiper.vue'
import HomeIcons from './components/icons.vue'
    export default {
        name:"Home",
        components:{Header,HeaderSwiper,HomeIcons}
    }
</script>

<style lang="scss" scoped>

</style>
