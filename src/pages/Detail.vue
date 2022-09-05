<template>
  <div>
      <ul>
          <li>Detail三级001消息:{{id}}</li>
          <li>Detail三级002消息:{{title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props:['id','title'],
    computed: {
        // id(){
        //     return this.$route.query.id
        // },
        // title(){
        //     return this.$route.query.title
        // }
    },
    mounted() {
       // console.log('1111111',this.$route)
    }
}
</script>

<style>

</style>