import React, { useState } from 'react'

export const Counter = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => setValue(value + 1);

    return (
        <p>
            <div>Current Counter Value: {value}</div>
            <div><button onClick={onIncrement}>Increment</button></div>
        </p>
    )
}
