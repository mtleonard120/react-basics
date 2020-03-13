import React from 'react'

import './Todo.css'

// Use props destructuring
export const Todo = ({todoObj, onComplete, onDelete}) => (
    <li className="todo">
        {/* Use conditional class */}
        <span className={todoObj.isComplete ? 'complete' : undefined}>
            {todoObj.label}
        </span>

        <button onClick={onDelete}>Delete</button>

        {/* Conditionally render this piece of UI */}
        {!todoObj.isComplete && (
            <button onClick={onComplete}>Complete</button>
        )}
    </li>
)
