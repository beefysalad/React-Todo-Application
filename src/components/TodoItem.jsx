import React from "react";
import '../styles/TodoItem.css'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
export default function TodoItem(props){
    const removeTodo = (key) => {
        console.log(key)
        const newArray = props.todos.filter(todo=>todo.index!==key)
        props.setTodos(newArray)
    }
    const renderedTodo = props.todos.map((todo)=>{        
        return(
            <div key={todo.index} className="items">
                {
                    todo.name &&  (<div className="todo-item">
                        <h2>{todo.name}</h2>
                        <p>{todo.description}</p>
                        
                    </div>)
                }
                <div className="actions">
                    <h3 className="mx-2" onClick={()=>removeTodo(todo.index)}><AiFillDelete/></h3>
                    <h3 className="mx-2"><AiFillEdit/></h3>
                </div>
            </div>
        )
    })
    return(
        <div>
           {renderedTodo}
        </div>
    )
}