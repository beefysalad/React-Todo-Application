import React,{useState,useEffect} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
function App() {
  const [todo,setTodos] = useState(JSON.parse(window.localStorage.getItem('todo')) || [])
  useEffect(()=>{
    window.localStorage.setItem('todo',JSON.stringify(todo))
  },[todo])
  return (
   <div className="container">
    <h2 className="text-white text-center mt-5">My Todos</h2>
      <AddTodo onAddTodo={setTodos}/>
      <TodoList todos={todo} setTodos={setTodos} />
   </div>
  )
}

export default App;
