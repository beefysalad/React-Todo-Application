import React,{useState,useRef} from "react";
import '../styles/AddTodo.css'
export default function AddTodo(props){
    const [todoName,setTodoName] = useState('')
    const [todoDesc,setTodoDesc] = useState('')
    const [index,setIndex] = useState(0)
    const addTodos = ()=>{  
        
        const newTodoObj = {
            index:index,
            name:todoName,
            description:todoDesc
        }
        setTodoName('')
        setTodoDesc('')
        setIndex(index+1)
        props.onAddTodo(oldTodo =>[...oldTodo,newTodoObj])
    }
    const clearTodos = ()=>{
        props.onAddTodo([])
    }
return(
    <div className="add-todos mt-4">
        <form onSubmit={(event)=>event.preventDefault()}>
            <div className="row text-white">
                <div className="col-lg-4 mt-2">
                    <label htmlFor="task-name" className="form-label">Task Name</label>
                    <input maxLength={30} onChange={(event)=>setTodoName(event.target.value)} value={todoName} id="task-name" placeholder="Task Name" className="custom-input form-control" />
                </div>
                <div className="col-lg-4 mt-2">
                    <label htmlFor="task-desc" className="form-label">Task Description</label>
                    <input maxLength={50} onChange={(event)=>setTodoDesc(event.target.value)} value={todoDesc} id="task-desc" placeholder="Description" className="custom-input form-control" />
                </div>
                <div className="col-lg-4 mt-4 button-side">
                    <button onClick={addTodos} disabled={todoName.length<1 || todoDesc.length<1} className="btn">Add</button>
                    <button onClick={clearTodos} className="btn">Clear</button>
                </div>
            </div>

        </form>
    </div>
)

}