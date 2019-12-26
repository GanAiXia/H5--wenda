<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <img src="../common/images/bsl10th.jpg">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">您的成绩为：{{scores}}分</p>
      <p class="tip_text tip_text2">* 凭此界面或截图，前往before after展台盖章，更有机会领取神秘奖品</p>
      <div class="confrim" @click="closeTip">返回首页</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      scores: Number,
      // seat: String
    },

    methods: {
      closeTip() {
        // 分发自定义事件(事件名: closeTip)
        this.$router.replace('/cover')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/stylus/mixins.styl'

  @keyframes tipMove
    0%
      transform: scale(1)
    35%
      transform: scale(.8)
    70%
      transform: scale(1.1)
    100%
      transform: scale(1)

  .alert_container
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgba(0, 0, 0, .5)
    .tip_text_container
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -3.9rem
      margin-left: -3.3rem
      width: 6.6rem
      animation: tipMove .4s;
      background-color: rgba(255, 255, 255, 1);
      border: 1px;
      padding-top: 20px
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px
      .tip_icon
        width: 5.6rem
        height: 3.3rem
        padding-top 0.1rem
        padding-bottom 0.3rem
        font-size 20px
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span:nth-of-type(1)
          width: 2px
          height: 30px
          background-color: #f8cb86;
        span:nth-of-type(2)
          width: 2px
          height: 2px
          border: 1px;
          border-radius: 50%;
          margin-top: 2px
          background-color #f8cb86
        img
          width 100%  
      .tip_text
        font-size 0.45rem
        color #735F3F
        line-height 0.45rem
        text-align center
        margin-top 10px
        padding 3px 8px
      .tip_text2
        font-size 0.25rem
        line-height 0.35rem
        text-align justify
        color #333
      .confrim
        font-size 18px
        font-weight bold
        margin-top 10px
        background-color #4cd964
        width 100%
        text-align center
        line-height 35px
        border 1px
        color #fff
        border-bottom-left-radius 5px
        border-bottom-right-radius 5px
</style>
