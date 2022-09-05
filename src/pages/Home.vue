<template>
 <div>
    <div>
      <router-link to="/home/news">Home愉快的二级路由</router-link>
      <br>
      <router-link to="/home/message">Home刚爱的二级路由</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'Home',
}
</script>

<style>

</style>