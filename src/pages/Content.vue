<template>
    <div>
        <div>
            <div>
                <div>得分：{{ scores }}</div>
                <div>进度：{{ progress }} / {{ aaq.length }}</div>
            </div>
            <div v-for="(item, index) in aaq" :key="index" v-show="item.isShow" >
                <h3>第{{ index + 1 }}题、{{ item.question }}</h3>
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
                   {question: '这是问题1', answer: [{answer:'答案1',isAnswer: false}, {answer:'答案2',isAnswer: false}, {answer:'答案3',isAnswer: true}, {answer:'答案4',isAnswer: false}], score: 25, isShow: true},
                   {question: '这是问题2', answer: [{answer:'答案21',isAnswer: false}, {answer:'答案2',isAnswer: true}, {answer:'答案3',isAnswer: false}, {answer:'答案4',isAnswer: false}], score: 25, isShow: false},
                   {question: '这是问题3', answer: [{answer:'答案31',isAnswer: false}, {answer:'答案2',isAnswer: false}, {answer:'答案3',isAnswer: false}, {answer:'答案4',isAnswer: true}], score: 25, isShow: false},
                   {question: '这是问题4', answer: [{answer:'答案41',isAnswer: true}, {answer:'答案2',isAnswer: false}, {answer:'答案3',isAnswer: false}, {answer:'答案4',isAnswer: false}], score: 25, isShow: false}
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
               }else{
                   this.canClick = false
                   setTimeout(() => {
                        this.alertShow = true                      
                   }, 100);
               }
               window.console.log(fatherIndex)
               window.console.log(this.scores,progress,aaq)
           }
       },
    }
</script>

<style scoped lang="stylus">

</style>