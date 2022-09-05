<!--
 * @Author: your name
 * @Date: 2022-04-17 14:48:17
 * @LastEditTime: 2022-04-18 14:21:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webvue_test\src\components\MyItem.vue
-->
<template>
    <li>
      <label>
        <input type="checkbox" :checked="personsObj.done" @change="changeChecked(personsObj.id)" >
        <span  v-show="!personsObj.isEdit">{{personsObj.title}}</span>
        <input type="text" 
          v-show="personsObj.isEdit" 
          :value="personsObj.title" 
          @blur="handleBlur(personsObj,$event)"  
          ref="inputTitle"
        >
      </label>
      <button class="" style="" v-show="!personsObj.isEdit" @click="clickUpdate(personsObj)">编辑</button>
      <button class="" style="" @click="clickButton(personsObj.id)">删除</button>
    </li>
</template>

<script>
  import pubSub from 'pubsub-js'
  
  export default {
    name: 'MyItem',
    props:['personsObj'],
    methods:{
      changeChecked(id){
        //this.handChecked(id)
        this.$bus.$emit('handChecked',id)
      },
      clickButton(id){
        if(confirm("确定删除吗？")){
          //this.deletePerson(id)
          // this.$bus.$emit('deletePerson',id)
          pubSub.publish('deletePerson',id)
        }
      },
      //编辑
      clickUpdate(personsObj) {
        // eslint-disable-next-line no-prototype-builtins
        if (personsObj.hasOwnProperty('isEdit')) {
          personsObj.isEdit = true
        }else{
          this.$set(personsObj,'isEdit',true)
        }
        //this.$refs.inputTitle.focus()
        //等下一次dom更新结束后执行
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
        console.log(personsObj)
      },
      //
      handleBlur(personsObj,e) {
        console.log(e)
        personsObj.isEdit = false
        this.$bus.$emit('updtatePerson',personsObj.id,e.target.value)

      }
    }
  }
</script>

<style>

</style>