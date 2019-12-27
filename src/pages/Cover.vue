<template>
<div class="cover">
    <div>
        <!-- <input type="text" v-model="seat" class="seat" placeholder="请输入座位号"> -->
        <a class="start" @click="goToQA">{{wendascore ? '获取分数' : '立即答题'}}</a>
    </div>
    <Alert v-show="alertShow" :scores="wendascore"></Alert>
</div>   
</template>

<script>
    import Alert from '../components/Alert'
    export default {
        components: {
           Alert 
        },
        data() {
            return {
                seat: '',
                wendascore: 0,
                alertShow: false
            }
        },
        mounted() {
            const res = localStorage.getItem('wendascore')
            if (res) {
                this.wendascore = res                
            }
        },
        methods: {

            goToQA(){
                const seat = this.seat.trim()
                this.$store.dispatch('setSeat', seat)
                if (!this.wendascore) {
                    this.$router.replace('content')                
                }else{
                    this.alertShow = true
                }
                
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
        top 10.8rem
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