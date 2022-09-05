<template>
  <div>
    <input type="text" placeholder="输入想要的" v-model="keyWord">
    <button @click="searchUser">搜索</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Search',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUser() {
            //请求前
            this.$bus.$emit('getUsers',{isLoading:true,errMsg:'',users:[],isFirst:false})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('请求成功',response.data.items)
                    //this.$bus.$emit('getUsers',response.data.items)
                     this.$bus.$emit('getUsers',{isLoading:false,errMsg:'',users:response.data.items})
            
                },
                error => {
                     console.log('请求失败',error.message)
                      this.$bus.$emit('getUsers',{isLoading:false,errMsg:error.message,users:[]})
            
                }
            )
        }
    }
}
</script>

<style>

</style>