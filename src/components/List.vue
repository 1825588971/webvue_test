<template>
  <div>
      <div v-show="info.users.length" v-for="user in info.users" :key="user.login" style="float:left">
        <a :href="user.html_url" style="width:100px">
            <img :src="user.avatar_url" style="width:100px">
        </a>
        <p>{{user.login}}</p>
      </div>
      <h1 v-show="info.isFirst">欢迎</h1>
      <h1 v-show="info.isLoading">加载中....</h1>
      <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>

export default {
    name: 'List',
   data() {
       return {
          info:{
            isFirst: true,
            isLoading: false,
            errMsg: '',
            users:[],
          }
       }
   },
   mounted() {
       this.$bus.$on('getUsers',(dataObj)=>{
           //console.log('我收到了数据users:',dataObj)
           //this.users = users
           this.info = {...this.info,...dataObj}
          // console.log(this.users)
       })
   }
}
</script>

<style scope>

</style>