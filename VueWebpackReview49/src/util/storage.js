/*
localStorage 存储数据的工具模块
暴露
1.function
2.object
需要向外暴露一个功能还是多个功能
一个就用function
多个就用object
*/
const TODOS_KEY = 'todos_key'
export default{
    setTodos(todos){
        window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
    },
    getTodos(){
        return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
    }
}
