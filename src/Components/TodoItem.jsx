import React from 'react'

function TodoItem({completed, id, title, toggleTodo,deleteTodo}) {
    return (
        <div>
            <li>
                <label>
                    <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                    {title}
                    <button className="btn btn-danger" onClick={e=>deleteTodo(id)}> Delete</button> 
                </label>
            </li>

        </div>
    )
}

export default TodoItem
