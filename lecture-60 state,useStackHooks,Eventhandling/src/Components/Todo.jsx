import { useState } from "react";

function Todo() {
   

    let [value,setValue]=useState("")

    let [todos ,setTodos] = useState(["todo1","todo2","todo3"])

   

    function printValue(e){
         setValue(e.target.value) 
    }

    function addTodo(e){
        e.preventDefault();
        if(!value.trim()){
            return
        }
        setTodos((prev)=>[...prev,value])
        setValue("")

    }


  return (
   <>
    <h1>Todo</h1>
    <form action=""onSubmit={addTodo}>
        {/* <input type="text" onChange={printValue} value={value}/> */}
        <input value={value} type="text" onChange={(e)=> setValue(e.target.value)}/>
        <button >Add</button>
    </form>
        <ul>
            {todos.map((todo)=>
                (<li>{todo}</li>
                    
                ))}
        </ul>
        </>
     )
}

export default Todo