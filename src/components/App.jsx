import React,{useState,useEffect} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
function App() {
  const [todo,setTodos] = useState([])

  return (
   <div className="container">
    <h2 className="text-white text-center mt-5">My Todos</h2>
      <AddTodo onAddTodo={setTodos}/>
      <TodoList todos={todo} />
   </div>
  )
}

export default App;
