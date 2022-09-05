import axios from 'axios'
import {nanoid} from 'nanoid'

export default {
    namespaced: true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('请添加性王的')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personsList.unshift(value)
        }
    },
    state:{
        personsList:[
            {id:'001',name:'战三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personsList[0].name
        }
    }
}