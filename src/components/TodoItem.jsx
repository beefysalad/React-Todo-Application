import React from "react";
import '../styles/TodoItem.css'
export default function TodoItem(props){
    const renderedTodo = props.todos.map((todo)=>{
        return(
            <div key={todo.index}>
            {
                todo.name &&  (<div className="todo-item">
                    <h2>{todo.name}</h2>
                    <p>{todo.description}</p>
                </div>)
            }
            </div>
        )
    })
    return(
        <div>
           {renderedTodo}
        </div>
    )
}