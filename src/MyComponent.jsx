import React from 'react'
import {RandomMessage} from './RandomMessage'
import { Counter } from './Counter'

export function MyComponent () {
    return (
        <div>
            I’m a component, and my random message is:
            <RandomMessage />
            <Counter />
        </div>
    )
}
