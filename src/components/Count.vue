<template>
  <div>
      <h1>当前求和：{{sum}}</h1>
      <h1>当前求和：{{bigSum}}</h1>
      <h3 style="color:red">总人数：{{personsList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Count',
    data() {
        return {
            n:1,
           // sum:0
        }
    },
    computed:{
        ...mapState('countAbout',['sum']),
        ...mapState('personAbout',['personsList']),

        ...mapGetters('countAbout',['bigSum'])
    },
    methods:{
        // increment() {
        //     //this.sum += this.n
        //     // this.$store.dispatch('jia',this.n)
        //     this.$store.commit('JIA',this.n)
        // },
        // decrement() {
        //     //this.sum -= this.n
        //     //this.$store.dispatch('jian',this.n)
        //     this.$store.commit('JIAN',this.n)
        // },
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
        
        // incrementOdd() {
        //     //if (this.sum % 2) {
        //         //this.sum += this.n
        //     //}
        //     this.$store.dispatch('jiaOdd',this.n)
        // },
        // incrementWait() {
        //     //setTimeout(()=>{
        //        // this.sum += this.n
        //    // },500)
        //     this.$store.dispatch('jiaWait',this.n)
        // },
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
    mounted() {
        console.log(this.$store)
    }
}
</script>

<style lang="css">
    button {
        margin-left: 10px;
    }
</style>