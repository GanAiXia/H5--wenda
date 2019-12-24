<template>
    <div class="cover">
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
        bottom 1rem
        left 2.5rem
        font-size 0.4rem
        text-align center 
        color #fff
        display: block;
        width: 2.4rem;
        line-height: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        background: #2c3ea0;

</style>