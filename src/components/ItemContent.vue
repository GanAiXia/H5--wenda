<template>
    <div>
        <div v-for="(son, index) in item.answer" :key="index" @click="countScore(son.isAnswer)">
            {{ index+1 }}、{{ son.answer }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'canClick', 'fatherIndex', 'nextQuest'],
        methods: {
         countScore(Answer){
             if (this.canClick) {
                const {fatherIndex, nextQuest} = this
                const isAnswer = Answer
                nextQuest(fatherIndex, isAnswer) 
             }else{
                alert("请勿重复提交！") 
             }

         }   
        }
    }
</script>

<style lang="stylus" scoped>

</style>