import React from "react";
import '../styles/TodoList.css'
import TodoItem from "./TodoItem";
export default function TodoList(props){
    
    return(
        <div className="todo-list mt-5">
            <TodoItem todos={props.todos} setTodos={props.setTodos}/>
        </div>
    )
}