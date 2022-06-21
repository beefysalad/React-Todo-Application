import React,{useState,useEffect,useRef} from "react";
import '../styles/TodoItem.css'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import Modal from "./Modal";
export default function TodoItem(props){
    const [deleteIndex,setDeleteIndex] = useState('')
    const [editable,setEditable] = useState(false)
    const inputRef = useRef(null)
    const removeTodo = (key) => {
        // console.log(key)
        const newArray = props.todos.filter(todo=>todo.index!==key)
        props.setTodos(newArray)
    }
    
    const renderedTodo = props.todos.map((todo)=>{        
        return(
            <div key={todo.index} className="items">
                {
                    todo.name &&  (<div className="todo-item">
                        <h2 >{todo.name}</h2>
                        <p ref={inputRef} contentEditable={editable}>{todo.description}</p>
                        {/* <input readOnly={false} ref={inputRef} className="input-field"  /> */}
                    </div>)
                }
                <div className="actions">
                    <h3 data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="mx-2" onClick={()=>setDeleteIndex(todo.index)}><AiFillDelete/></h3>
                    <h3 className="mx-2" onClick={()=>{
                        inputRef.current.focus()
                        }}><AiFillEdit/></h3>
                </div>
            </div>
        )
    })
   
   
    return(
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Deleting Todo Item</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete that todo item?
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>removeTodo(deleteIndex)}>Delete</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Close</button>
                    </div>
                </div>
            </div>
      </div>
           {renderedTodo}
        </div>
    )
}