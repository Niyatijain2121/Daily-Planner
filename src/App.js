import React, { useEffect, useState } from 'react';
import './App.css';
import NewTodoForm from './Components/NewTodoForm';
import TodoList from './Components/TodoList';
function App() {

  
  const [toDos, setTodo] = useState(()=>{
    const localValue=localStorage.getItem("Items")
    if (localValue===null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(()=> {
    localStorage.setItem("Items", JSON.stringify(toDos))
  },[toDos])

  function addTodo(title){
    setTodo((currentTodo) => {
      return ([
          ...currentTodo, { id: crypto.randomUUID(), title, completed: false }
      ])
  })
  }

  function toggleTodo(id, completed) {
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })

  }

  function deleteTodo(id) {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit ={addTodo} />

      <h1 className="header"> TO Do List</h1>
      <TodoList toDos={toDos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
