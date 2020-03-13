import React, { useState } from 'react'

import {Todo} from './Todo'
import './TodoList.css'

export const TodoList = () => {
    const [inputVal, setInputVal] = useState('') // controlled input state
    const [todos, setTodos] = useState([])
    const [idCounter, setIdCounter] = useState(0)

    // Event Handlers
    const onInput = e => setInputVal(e.target.value)

    const onAddTodo = () => {
        const newTodo = {
            id: idCounter,
            label: inputVal,
            isComplete: false
        }

        setTodos(prevTodos => [...prevTodos, newTodo])
        setIdCounter(prevId => prevId + 1)
        setInputVal('')
    }

    const onDeleteTodo = (id) => () => {
        setTodos(prevTodos => prevTodos.filter(t => t.id !== id))
    }

    const onCompleteTodo = (id) => () => {
        setTodos(prevTodos => {
            const newTodos = [...prevTodos] // shallow copy
            const todoToComplete = newTodos.find(t => t.id === id)
            
            if (todoToComplete) {
                todoToComplete.isComplete = true
                return newTodos // triggers rerender
            } else {
                return prevTodos // no reference update, no rerender
            }
        })
    }

    return (
        <div className="todo-list">
            <h2>Todo List</h2>

            <div>
                {/* Controlled Input */}
                <input 
                    type="text"
                    placeholder="Add New Todo Item"
                    value={inputVal}
                    onChange={onInput}
                />

                <button onClick={onAddTodo}>Add Todo</button>
            </div>
            
            <ul>
                {/* Rendering a list via ES6 array map */}
                {todos.map(todo => (
                    // Pass down event handlers that update parent state
                    <Todo 
                        todoObj={todo}
                        onComplete={onCompleteTodo(todo.id)}
                        onDelete={onDeleteTodo(todo.id)}
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}
