# 4. Component With State

Lesson Branch: `4-component-with-state`

## Overview

In `src/Counter.jsx`, demonstrate initializing and altering component state.

## Notes on src/index.css

**Including CSS**: There are a LOT of ways to style components in React, but I wanted to demonstrate the most simple method in this branch. In `src/index.css`, we added some basic css and we include it by importing it in `src/index.js`. When the react app mounts in the DOM, these styles are added to the head in a `<style>` tag by the js.

## Notes on src/Counter.jsx

**useState**: Modern React uses special functions called `Hooks` for a number of important duties, and state management is among them. This line:

* initializes our state variable (which we're calling `value`) and gives it an initial value of `0`
* initializes a state update function (which we're calling `setValue` - this naming is our choice but this is the conventional format)

**onIncrement**: Here we initialize an event handler - it instructs the component how state should be updated. Using the `setValue` function initialized above, we pass in a function which says "take the previous value of state and increment it by one". In general, the argument to `setValue` does not have to be a function - for example we could have written this as `setValue(value + 1)` and it would still work for us in this example. However, because of the potential complicated scenarios (i.e. a closure containing a stale value of `value` which then calls this increment function) the React team recommends using the functional argument whenever the new state is a function of the old state.

**className (and HTML attributes)**: HTML attributes look a bit different in React. For example, where you might use the attribute `class` in normal HTML, React instead uses `className` (`class` is a protected keyword in js). Another common html attribute is `for` (also a protected keyword in js) which becomes `htmlFor` in React. Multi-word attributes like `onchange` are instead camel-cased in React: `onChange`.
