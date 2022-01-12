import React,{useState} from "react"
import TodoItem from "./TodoItem"

export default function TodoList(){
  const [todoList,setTodoList] = useState([])
  const [newTodoText,setNewTodoText] = useState("")
  
  const addTodo = ()=>{
    let newTodo = (<TodoItem/>)
    const todos = [...todoList]
    todos.push(newTodo)
    setTodoList(todos)
    setNewTodoText("")
  }

  const removeTodo = (index)=>{
    const todos = [...todoList]
    todos.splice(index,1)
    setTodoList(todos)
  }

  return(
    <>
    <h1>Todos</h1>
    <ul>
      {todoList.map((todo,index)=><li key={index}><button onClick={()=>removeTodo(index)}>-</button>{todo}</li>)}
    </ul>
    <h3>Make new Todo</h3>
    <button onClick={addTodo}>New Todo</button>
    </>
  )
}