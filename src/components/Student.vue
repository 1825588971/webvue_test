<template>
    <div>
        <h1>名字：{{username}}</h1>
        <h1>年龄：{{age}}</h1>
    </div>
</template>

<script>
export default {
    name: 'Student',
    
    data() {
        return {
            username:'帅帅',
            age:'11'
        }
     },
     methods: {
         
     }
}
</script>

<style scoped>
    
</style>
