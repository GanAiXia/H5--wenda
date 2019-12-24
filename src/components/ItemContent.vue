<template>
    <div>
        <div class="item" 
        :class="indexClass === index ? right : ''"
        v-for="(son, index) in item.answer" 
        :key="index" 
        @click="countScore(son.isAnswer, index)">
           {{ son.answer }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'canClick', 'fatherIndex', 'nextQuest'],
        data() {
            return {
                right: 'right',
                indexClass: -1
            }
        },
        methods: {
         countScore(Answer, index){

             if (this.canClick) {
                if (Answer) {
                    this.right = 'right'
                    this.indexClass = index
                }else{
                    this.right = 'wrong'
                    this.indexClass = index
                }

                const {fatherIndex, nextQuest} = this
                const isAnswer = Answer
                nextQuest(fatherIndex, isAnswer)
             }

         }   
        }
    }
</script>

<style lang="stylus" scoped>
.item
    font-size 0.3rem
    padding .25rem .375rem
    background-color rgb(232, 223, 192);
    margin-bottom 0.3rem
    color rgb(87, 71, 21)
.right
    background-color #4cd964
.wrong
    background-color #F33162    
</style>