<template>
    <div>
        <Header/>
        <HeaderSwiper/>
    </div>
</template>

<script>
import Header from './components/header.vue'
import HeaderSwiper from './components/swiper.vue'
    export default {
        name:"Home",
        components:{Header,HeaderSwiper}
    }
</script>

<style lang="scss" scoped>

</style>
