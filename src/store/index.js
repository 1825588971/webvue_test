import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//
import countOptions from './count'
import personOptions from './person'

export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
// export default new Vuex.Store({
//     actions:actions,
//     mutations:mutations,
//     state:state,
//     getters
// })
/*
//用于响应组件中的动作
const actions = {
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    
}
//用于操作数据
const mutations = {
    // ,
    // JIAODD(state,value) {
    //     state.sum += value
    // },
    // JIAWAITE(state,value) {
    //     state.sum += value
    // }
}
//存储数据
const state = { 
}
const getters = {
}
*/
//