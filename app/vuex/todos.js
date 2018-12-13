export default {
    namespaced: true,
    state: {
        newTodo: "",
        todos: [{
            name: "Non duis fugiat aute anim sint sit incididunt incididunt nisi consectetur dolore eu."
        }],
        dones: []
    },
    mutations: {
        addTodo: (state, payload) => {
            if (state.newTodo === "") return
            
            state.todos.unshift({
                name: state.newTodo
            })

            state.newTodo = ""
        },
        moveDone: (state, index) => {
            state.dones.unshift(state.todos[index])
            state.todos.splice(index, 1)
        },
        moveTodo: (state, index) => {
            state.todos.unshift(state.dones[index])
            state.dones.splice(index, 1)
        },                
        removeDone: (state, index) => {
            state.dones.splice(index, 1)
        },
        removeTodo: (state, index) => {
            state.todos.splice(index, 1)
        }
    },
    actions: {
        addTodo({ state, commit}, payload){
            commit("addTodo", payload)
        },
        moveDone({ state, commit}, indexOf){
            commit("moveDone", indexOf)
        },
        moveTodo({ state, commit}, indexOf){
            commit("moveTodo", indexOf)
        },
        removeTodo({ state, commit}, indexOf){
            commit("removeTodo", indexOf)
        },
        removeDone({ state, commit}, indexOf){
            commit("removeDone", indexOf)
        }
    }
}