<template>
    <div class="cover">
        <h2>这是封面页</h2>
        <router-link :to="{name: 'content'}"><a class="start">开始问答</a></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="stylus">
.cover
    position relative
    width 100%
    height 100%
    background-image url('../common/images/index.jpg')
    background-size cover
    h2
        position absolute
        top 2rem
        left 1.8rem
        font-size 0.5rem
        text-align center
        color yellow
    .start
        position absolute
        bottom 2.5rem
        left 2.6rem
        font-size 0.3rem
        text-align center 
        color #fff   

</style>