import React, { useState } from 'react'

export const Counter = (props) => {
    const [value, setValue] = useState(props.initialCount)
    const onIncrement = () => setValue(prevVal => prevVal + 1)

    return (
        <div className={'counter ' + (props.counterClass ?? '')}>
            <div>Current Counter Value: {value}</div>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}
