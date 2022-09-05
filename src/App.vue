<!--
 * @Author: your name
 * @Date: 2022-04-16 15:33:48
 * @LastEditTime: 2022-04-23 15:46:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webvue_test\src\App.vue
-->
<template>
    <div>
        <!---->
        <h1>这是个路由</h1>
        <banner></banner>
        <div>
            <router-link to="/about">About一级</router-link><br>
            <router-link to="/home">Home一级</router-link>
        </div>
        <div>
            <router-view style="margin-left:50px">
                
            </router-view>
        </div>
        <hr>
        <!-- <school></school>
        <student></student>
        <testyige aname="战三" asex="男" ></testyige> -->
        <myHeader @personsObjs="personsObjs"></myHeader>
        <!-- <myList :persons="persons" :handChecked="handChecked" :deletePerson="deletePerson"></myList> -->
        <myList :persons="persons"></myList>
        <myFooter :persons="persons" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></myFooter>

        <!---->
        <search></search>
        <list></list>

        <!---->
        <count></count>
        <person></person>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    import MyHeader from './components/MyHeader.vue'
    import MyList from './components/MyList.vue'
    import MyFooter from './components/MyFooter.vue'
 
    import List from './components/List.vue'
    import Search from './components/Search.vue'
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
import Banner from './components/Banner.vue'

    export default {
        name: 'App',
        components:{
            MyHeader,
            MyList,
            MyFooter,
                List,
                Search,
                Count,
                Person,
                Banner
        },
        data() {
            return {
                // {name:'李四',age:'11',sex:'男'}
                persons:[
                    {id:'001',title:'李四',done:false},
                    {id:'002',title:'李三',done:true},
                    {id:'003',title:'李二',done:false}
                ]
            }
        },
        methods:{
            personsObjs(x){
                this.persons.unshift(x)
            },
            handChecked(id){
                this.persons.forEach((person)=>{
                    if(id === person.id) person.done = !person.done
                    //console.log(this.persons)
                })
            },
            deletePerson(_,id){
                //alert(id)
               this.persons =  this.persons.filter((person)=>{
                   // alert(person.id !== id)
                    return person.id !== id
                })
            },
            checkAllTodo(done){
                this.persons.forEach((person)=>{
                    person.done = done
                })
            },
            updtatePerson(id,title){
                this.persons.forEach((person)=>{
                    if(person.id === id) person.title = title
                })
            },
            clearAllTodo(){
                this.persons =  this.persons.filter((person)=>{
                    return !person.done
                })
            }
        },
        mounted() {
            this.$bus.$on('handChecked',this.handChecked)
            this.$bus.$on('updtatePerson',this.updtatePerson)
            // this.$bus.$on('deletePerson',this.deletePerson)
            this.pubId = pubsub.subscribe('deletePerson',this.deletePerson)
            console.log('App',this)
        },
        beforeDestroy() {
            this.$bus.$off('handChecked')
            
            this.$bus.$off('updtatePerson')
            // this.$bus.$off('deletePerson')
            pubsub.unsubscribe(this.pubId)
        }     
    }
    // import School from './components/School.vue'
    // import Student from './components/Student.vue'
    // import Testyige from './components/Testyige.vue'
    // export default {
    //     name:'App',
    //     components:{
    //         School,
    //         Student,
    //         Testyige
    //     }
    // }
</script>

<style>

</style>