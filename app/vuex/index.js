import todos from './todos'

export default { 
    modules: {
        todos
    },
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++ ,
        decrement: state => state.count--
    }
}