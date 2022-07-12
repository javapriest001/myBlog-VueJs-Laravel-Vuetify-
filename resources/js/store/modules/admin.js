const state = {
    users:[
        {id: 1, name: 'John', email: 'john@example.com'},
        {id: 2, name: 'jane', email: 'jane@example.com'},
    ],
    category: []
}
export const getters = {
    getUser: (state)=> state.category
}
const actions = {
    getUserr: async ({commit})=>{
       await  axios.get('/api/category')
            .then((response)=>{
                commit('getUserr', response.data.category)
            })
           .then((response)=>{

           })
           .catch((error)=>{
               console.log(error)
           })

    }
}
const mutations ={
    getUserr: (state, payload)=>{
        state.category = payload
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}
