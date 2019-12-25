<template>
    <div class="cover">
        <input type="text" v-model="seat" class="seat" placeholder="请输入座位号">
        <a class="start" @click="goToQA">立即答题</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                seat: ''
            }
        },
        methods: {
            goToQA(){
                const seat = this.seat.trim()
                this.$store.dispatch('setSeat', seat)
                this.$router.replace('content')
            }
        },
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
        top 11.3rem
        left 2.5rem
        font-size 0.32rem
        text-align center 
        color #fff
        display: block;
        width: 2.4rem;
        line-height: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        background: #2c3ea0;
    .seat
        position absolute
        top 10.4rem
        left 2.5rem
        height 0.6rem
        width 2.4rem
        font-size 0.32rem
        text-align center
</style>