import React, { useState } from 'react'

export const Counter = () => {
    const [value, setValue] = useState(0)
    const onIncrement = () => setValue(prevVal => prevVal + 1)

    return (
        <div className="counter">
            <div>Current Counter Value: {value}</div>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}
