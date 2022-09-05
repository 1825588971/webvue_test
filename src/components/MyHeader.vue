<template>
  <div>
    <input type="text" placeholder="请输入内容点击回车添加一条信息" @keyup.enter="add" >
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name: 'MyHeader', 
    // data() {
    //   return {
    //     title:''
    //   }
    // },
    // props:['personsObjs'],
    methods:{
      add(e){
        const personsObj = {id:nanoid(),title:e.target.value,done:false}
       // this.personsObjs(personsObj)
        this.$emit('personsObjs',personsObj)
        e.target.value = ''
      },

    }
  }
</script>

<style>

</style>