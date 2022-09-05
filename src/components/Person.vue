<template>
  <div>
      <h1>人员</h1>
      <h3 style="color:red">{{sum}}</h3>
      <h3 style="color:red">{{firstPersonName}}</h3>

      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addWANG">添加addWANG</button>
      <button @click="addPersonServer">添加动态</button>
      <ul>
          <li v-for="p in personsList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
  
</template>

<script>
import {nanoid} from 'nanoid'
// import {mapState} from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personsList(){
            return this.$store.state.personAbout.personsList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
       // ...mapState(['personsList'])
    },
    methods: {
        add(){
            const parsonObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',parsonObj)
            this.name= ''
        },
        addWANG(){
            const parsonObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',parsonObj)
            this.name= ''
        },
        addPersonServer(){
           //  const parsonObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonServer')
            this.name= ''
        }
    },
}
</script>

<style>

</style>