import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ toDos, toggleTodo, deleteTodo }) {
    return (

        <ul className="list">
            {toDos.length === 0 && "No Todo List"}
            {toDos.map(todo => {
                return (
                    <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                )
            })}
        </ul>

    )
}

export default TodoList
