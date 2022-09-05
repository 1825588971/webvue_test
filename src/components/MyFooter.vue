<!--
 * @Author: your name
 * @Date: 2022-04-17 14:48:12
 * @LastEditTime: 2022-04-18 15:42:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webvue_test\src\components\MyFooter.vue
-->
<template>
  <div v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"  />
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{persons.length}}
    </span>
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script> 
  export default {
    name: 'MyFooter',
    props: ['persons','checkAllTodo','clearAllTodo'],
    computed: {
      total(){
        return this.persons.length
      },
      doneTotal(){
        // const x =this.props.reduce((pre,current)=>{
        //   console.log('@',pre)
        //   console.log('@',current)
        //   return pre+(current.done ? 1 : 0);
        // },0)
        return this.persons.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
      },
      // isAll(){:checked="isAll" @change="checkAll" 
      //   return this.doneTotal === this.total && this.total > 0
      // },
      isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0
        },
        set(value){
         this.checkAllTodo(value)
        }
      }
    },
    methods:{
      // checkAll(e){
      //   //console.log(e.target.checked)
      //   this.checkAllTodo(e.target.checked)
      // }
      clearAll(){
        this.clearAllTodo()
      }
    }
  }
</script>

<style>

</style>