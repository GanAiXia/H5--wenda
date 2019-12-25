<template>
    <div id="content">
        <div class="cont">
            <div>
                <div>得分：{{ scores }}</div>
                <h3>第{{ progress }}题  共{{ aaq.length }}题</h3>
            </div>
            <div v-for="(item, index) in aaq" :key="index" v-show="item.isShow" >
                <h4>{{ item.question }}</h4>
                <div class="imgpersom">
                    <img :src="'/static/images/' + (index+1) + '.jpg'">
                </div>
                <ItemContent :item = "item" :fatherIndex="index" :nextQuest="nextQuest" :canClick="canClick"></ItemContent>
            </div>            
        </div>
        <Alert v-show="alertShow" :scores="scores"></Alert>
    </div>
</template>

<script>
    import ItemContent from '../components/ItemContent'
    import Alert from '../components/Alert'
    export default {
       data () {
           return {
               aaq: [
                   {question: '猜猜这位小姐姐做了什么面部抗衰项目？', answer: [{answer:'超皮秒嫩肤祛斑',isAnswer: false}, {answer:'蜜糖花瓣唇',isAnswer: false}, {answer:'玻尿酸填充太阳穴',isAnswer: true}], score: 20, isShow: true},
                   {question: '猜猜这位小姐姐脸部做了哪些抗衰和皮肤保养项目？', answer: [{answer:'热玛吉/水光针/线雕/提拉素',isAnswer: true}, {answer:'面部埋线提升',isAnswer: false}, {answer:'水光针',isAnswer: false}], score: 20, isShow: false},
                   {question: '猜猜这位小姐姐做了什么面部抗衰项目？', answer: [{answer:'射频美肤',isAnswer: false}, {answer:'埋线提升',isAnswer: true}, {answer:'瘦脸针',isAnswer: false}], score: 20, isShow: false},
                   {question: '猜猜这位小姐姐做了哪些项目？', answer: [{answer:'线雕/童颜针',isAnswer: true}, {answer:'水光嫩肤',isAnswer: false}, {answer:'面部吸脂',isAnswer: false}], score: 20, isShow: false},
                   {question: '猜猜这位小姐姐面部做了什么美肤项目', answer: [{answer:'皮秒祛斑',isAnswer: true}, {answer:'激光点痣',isAnswer: false}, {answer:'菲洛嘉水光',isAnswer: false}], score: 20, isShow: false}
               ],
               scores: 0,
               progress: 1,
               canClick: true,
               alertShow: false
           }
       },
       components: {
         ItemContent,
         Alert
       },
       methods: {
           nextQuest(fatherIndex, isAnswer){
               const {aaq, scores, progress} = this
                let score = 0
                this.canClick = false
                setTimeout(() => {
                    if (isAnswer) {
                    score = aaq[fatherIndex].score
                    this.scores = scores + score
                    }else{
                        score = 0
                    }

                    if (progress < aaq.length) {
                            this.aaq[fatherIndex].isShow = false
                            this.aaq[fatherIndex + 1].isShow = true
                            this.progress = progress + 1 
                            this.canClick = true
                    }else{
                        this.canClick = false
                        setTimeout(() => {
                                this.alertShow = true                      
                        }, 100);
                    }                    
                }, 1000);
                

  
               window.console.log(fatherIndex)
               window.console.log(this.scores,progress,aaq)
           }
       },
    }
</script>

<style scoped lang="stylus">
#content
    width 100%
    height 100%
    background-image url('../common/images/loignBg.jpg')
    background-size cover
    .cont
        padding-top 0.6rem
        margin 0 0.5rem
        color rgb(87, 71, 21)
        div
            font-size 0.3rem
            padding-top 0.3rem
            overflow hidden
            h3
                font-size 0.5rem
                text-align center
            h4
                width 100%
                text-align justify
                margin 0 auto
                line-height 0.45rem
                font-size 0.3rem
            .imgpersom
                width 3rem
                margin 0 auto
                img
                    width 100%    
</style>