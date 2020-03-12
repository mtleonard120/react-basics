import React from 'react'

export const RandomMessage = () => {
    const randomNumber = Math.random() // 0 < randomNumber < 1

    return (
        <div>{randomNumber > .5 ? "Hello" : "Goodbye"}</div>
    )
}
