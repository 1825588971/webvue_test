<template>
    <div class="demo">
        <h1>名字：{{name}}</h1>
        <h1>地址：{{address}}</h1>
        <button @click="shownfo">来到点我</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name:'帅帅',
            address:'好地方'
        }
    },
    methods: {
        shownfo(){
            alert(this.name)
        }
    }
}
</script>

<style scoped>
    .demo{
        background: orange;
    }
</style>
