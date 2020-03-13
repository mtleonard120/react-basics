import React from 'react'

import {RandomMessage} from './RandomMessage'
import {Counter} from './Counter'

export function MyComponent () {
    return (
        <div>
            I’m a component, and my random message is:
            <RandomMessage />
            <Counter initialCount={2} />
            <Counter initialCount={-8} counterClass='danger' />
        </div>
    )
}
