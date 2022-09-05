<template>
    <div>
        <h1>{{msg}}</h1>
        <h1>名字：{{aname}}</h1>
        <h1>年龄：{{myage+1}}</h1>
        <h1>性别：{{asex}}</h1>
        <button @click="updateList">加一</button>
    </div>
</template>

<script>
    export default {
        name: 'Testyige',
        data() {
            return {
                 msg:'一个人',
                 myage:this.aage
             }
        },
        methods: {
            updateList(){
                this.myage++
            }
     },
    //  props:['aname','aage','asex']
    props:{
        aname:{
            type: String,
            require:true
        },
        aage:{
            type: Number,
           // require:true
           default:99
        },
        asex:{
            type: String,
            require:true
        }
    }

}
</script>

<style scoped>
    
</style>
