<template>
  <div>
     <ul>
        <myItem 
          v-for="personsObj in persons" 
          :key="personsObj.id" 
          :personsObj="personsObj" >
        </myItem>
     </ul>
  </div>
</template>

<script>
  import MyItem from './MyItem.vue'

  export default {
    name: 'MyList',
    components:{
      MyItem
    },
    //,'handChecked','deletePerson'
    props:['persons']
  }
</script>

<style>

</style>