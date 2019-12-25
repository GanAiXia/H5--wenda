<template>
    <div id="content">
        <div class="cont">
            <div>
                <div>得分：{{ scores }}</div>
                <div>号：{{ userState }}</div>
                <h3>第{{ progress }}题  共{{ aaq.length }}题</h3>
            </div>
            <div v-for="(item, index) in aaq" :key="index" v-show="item.isShow" >
                <h4><span class="itemSon">{{ item.no }} </span> {{ item.question }}</h4>
                <ItemContent :item = "item" :fatherIndex="index" :nextQuest="nextQuest" :canClick="canClick"></ItemContent>
            </div>            
        </div>
        <Alert v-show="alertShow" :scores="scores"></Alert>
    </div>
</template>

<script>
    import ItemContent from '../components/ItemContent'
    import Alert from '../components/Alert'
    import {mapState} from 'vuex'
    export default {
       data () {
           return {
               aaq: [
                   {question: '图中的小姐姐，是通过什么项目变成现在的样子？',no: 'No.3', answer: [{answer:'线雕提升',isAnswer: false}, {answer:'玻尿酸填充',isAnswer: false}, {answer:'玻尿酸填充+线雕提升',isAnswer: true}], score: 10, isShow: true},
                   {question: '图中的小姐姐什么问题得到明显改善？',no: 'No.5', answer: [{answer:'泪沟+黑眼圈',isAnswer: true}, {answer:'泪沟',isAnswer: false}, {answer:'黑眼圈',isAnswer: false}], score: 10, isShow: false},
                   {question: '图中的小姐姐是通过什么项目改变了脸型？',no: 'No.7', answer: [{answer:'线雕提升+玻尿酸填充',isAnswer: false}, {answer:'线雕提升',isAnswer: true}, {answer:'玻尿酸填充',isAnswer: false}], score: 10, isShow: false},
                   {question: '图中的小姐姐哪个部位发生了明显变化？',no: 'No.11', answer: [{answer:'法令纹',isAnswer: false}, {answer:'下颌缘',isAnswer: true}, {answer:'鼻子',isAnswer: false}], score: 10, isShow: false},
                   {question: '图中的小姐姐是如何get到下颌缘线的？',no: 'No.13', answer: [{answer:'线雕结合脂肪管理',isAnswer: true}, {answer:'瘦脸针',isAnswer: false}, {answer:'线雕',isAnswer: false}], score: 10, isShow: false},                 
                   {question: '图中的小姐姐做了什么面部抗衰项目？',no: 'No.35', answer: [{answer:'超皮秒嫩肤祛斑',isAnswer: false}, {answer:'蜜糖花瓣唇',isAnswer: false}, {answer:'玻尿酸填充太阳穴',isAnswer: true}], score: 10, isShow: false},
                   {question: '图中的小姐姐脸部做了哪些抗衰和皮肤保养项目？',no: 'No.37', answer: [{answer:'热玛吉/水光针/线雕/提拉素',isAnswer: true}, {answer:'面部埋线提升',isAnswer: false}, {answer:'水光针',isAnswer: false}], score: 10, isShow: false},
                   {question: '图中的小姐姐做了什么面部抗衰项目？',no: 'No.39', answer: [{answer:'射频美肤',isAnswer: false}, {answer:'埋线提升',isAnswer: true}, {answer:'瘦脸针',isAnswer: false}], score: 10, isShow: false},
                   {question: '图中的小姐姐做了哪些项目？',no: 'No.34', answer: [{answer:'线雕/童颜针',isAnswer: true}, {answer:'水光嫩肤',isAnswer: false}, {answer:'面部吸脂',isAnswer: false}], score: 10, isShow: false},
                   {question: '图中的小姐姐面部做了什么美肤项目',no: 'No.36', answer: [{answer:'皮秒祛斑',isAnswer: true}, {answer:'激光点痣',isAnswer: false}, {answer:'菲洛嘉水光',isAnswer: false}], score: 10, isShow: false}
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
       computed: {
           ...mapState(['userState'])
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
                }, 500)    
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
                margin-bottom: 0.2rem;                
            .imgpersom
                width 3rem
                margin 0 auto
                img
                    width 100%  
            .itemSon
                font-size 0.4rem
</style>