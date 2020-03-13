# 5. Component With Props

Lesson Branch: `5-component-with-props`

## Overview

Update `src/Counter.jsx` to demonstrate prop data flow from parent components. Recall, however, that any local state variables initialized in terms of props will remain unaffected, since state values persist through rerenders.

## Notes on src/Counter.jsx

**Props**: Recall that components are simply functions that return JSX. Arguments passed to component functions are called `props`. This flow of data from parent to children components allows us to write highly reusable building block components that render small pieces of UI dependent on the props passed to them.

**Prop Destructuring**: It is extremely commonplace in React to destructure props (an ES6 concept) like:

    export const Counter = ({initialCount, counterClass}) => { // component contents }

Destructuring allows us to avoid prefixing all prop references in our component with `props.` and also provides something of an upfront guide as to what props the component allows for (although TypeScript does a _tremendously_ better job at this).
